import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

/* The public address of the site. Link previews (WhatsApp, iMessage, LinkedIn…)
   need absolute image URLs, so this must be the address people actually visit.
   Order: an explicit SITE_URL, then whatever Vercel or Netlify say the live
   address is, then the intended domain. */
const site =
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  process.env.URL || // Netlify
  'https://samya.in';

export default defineConfig({
  site,
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
