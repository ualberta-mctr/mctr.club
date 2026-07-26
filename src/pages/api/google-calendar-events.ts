import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const prerender = false;

const ALLOWED_DOMAINS = [
  "http://localhost",
  "http://127.0.0.1",
  "https://mctr.club"
];

export const GET: APIRoute = async ({ request }) => {
  const referer = request.headers.get("referer");
  const origin = request.headers.get("origin");

  const isAuthorized = ALLOWED_DOMAINS.some(domain => 
    (referer && referer.startsWith(domain)) || (origin && origin.startsWith(domain))
  );

  if (!isAuthorized) {
    return new Response(JSON.stringify({ secretData: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }), { 
      status: 403,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const API_KEY = env.GOOGLE_API_KEY || import.meta.env.GOOGLE_API_KEY;
  const requestUrl = new URL(request.url);
  const paramCalendarId = requestUrl.searchParams.get("calendarId");
  const CALENDAR_ID = paramCalendarId || env.GOOGLE_CALENDAR_ID || import.meta.env.GOOGLE_CALENDAR_ID;

  if (!API_KEY || !CALENDAR_ID) {
    console.error("API Route Error: Missing environment variables.");
    console.error(`GOOGLE_API_KEY defined: ${!!API_KEY}`);
    console.error(`GOOGLE_CALENDAR_ID defined: ${!!CALENDAR_ID}`);
    
    return new Response(JSON.stringify({ error: 'Server configuration error.' }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?key=${API_KEY}&singleEvents=true&orderBy=startTime`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      console.error(`Google API Rejected Request (${response.status}):`, JSON.stringify(data, null, 2));
      return new Response(JSON.stringify({ error: 'Failed to retrieve calendar data.' }), { 
        status: response.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const sanitizedData = minimizeEventData(data);

    return sendCachedJson(sanitizedData);
  } catch (error) {
    console.error("Fatal Fetch Error in API Route:", error);
    return new Response(JSON.stringify({ error: 'Internal server error.' }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

function minimizeEventData(rawData: any) {
  if (!rawData || !Array.isArray(rawData.items)) {
    return { items: [] };
  }

  const safeItems = rawData.items
    .filter((event: any) => event && event.status !== "cancelled")
    .map((event: any) => ({
      id: event.id,
      summary: event.summary || "Busy",
      start: event.start,
      end: event.end,
      location: event.location || "",
      description: event.description || "",
      status: event.status
    }));

  return { items: safeItems };
}

function sendCachedJson(data: any, edgeCacheSeconds = 30, browserCacheSeconds = 15) {
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': `public, max-age=${browserCacheSeconds}, s-maxage=${edgeCacheSeconds}`,
    },
  });
}