import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Update `site` to the real domain before launch (used by sitemap, canonicals, OG).
export default defineConfig({
  site: 'https://samya.in',
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
