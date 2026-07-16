import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  const API_KEY = env.GOOGLE_API_KEY || import.meta.env.GOOGLE_API_KEY;
  
  const requestUrl = new URL(request.url);
  const paramCalendarId = requestUrl.searchParams.get("calendarId");
  
  const CALENDAR_ID = paramCalendarId || env.GOOGLE_CALENDAR_ID || import.meta.env.GOOGLE_CALENDAR_ID;

  if (!API_KEY || !CALENDAR_ID) {
    console.error("API Route Error: Missing environment variables.");
    console.error(`GOOGLE_API_KEY defined: ${!!API_KEY}`);
    console.error(`GOOGLE_CALENDAR_ID defined: ${!!CALENDAR_ID}`);
    
    return new Response(JSON.stringify({ error: 'Missing API Key or Calendar ID' }), { 
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
      return new Response(JSON.stringify(data), { status: response.status });
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("Fatal Fetch Error in API Route:", error);
    return new Response(JSON.stringify({ error: 'Failed to fetch from Google' }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};