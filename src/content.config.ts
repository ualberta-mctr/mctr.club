import { z, defineCollection } from 'astro:content';
// 1. Import the glob loader
import { glob } from 'astro/loaders'; 

const updatesCollection = defineCollection({
  // 2. Define the loader to point to your updates folder
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/updates" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().optional(),
    publishDate: z.string().or(z.date()).transform((val) => new Date(val).toISOString()),
    updatedDate: z.string().or(z.date()).transform((val) => new Date(val).toISOString()).optional(),
    coverImage: z.object({ src: z.string(), alt: z.string() }).optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
    minutesRead: z.string().optional(),
  }),
});

export const collections = {
  'updates': updatesCollection, 
};