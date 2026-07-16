// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap()],

  site: 'https://mctr.club/',

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['@schedule-x/calendar']
    }
  },

  adapter: cloudflare(),
});