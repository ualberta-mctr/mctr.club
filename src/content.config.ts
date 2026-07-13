import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders'; 

const updatesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/updates" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().optional(),
    publishDate: z.string().or(z.date()).transform((val) => new Date(val).toISOString()),
    updatedDate: z.string().or(z.date()).transform((val) => new Date(val).toISOString()).optional(),
    coverImage: z.object({ 
      src: image(),
      alt: z.string() 
    }).optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
    minutesRead: z.string().optional(),
  }),
});

const eventsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/events" }),
  schema: ({ image }) => z.object({
    name: z.string(),
    description: z.string().optional(),
    date: z.string().or(z.date()).transform((val) => new Date(val).toISOString()),
    location: z.string(),
    coverImage: z.object({ 
      src: image(),
      alt: z.string() 
    }).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'updates': updatesCollection, 
  'events': eventsCollection,
};