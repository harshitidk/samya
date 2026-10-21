import type { APIRoute } from 'astro';
import { services } from '../data/services';
import { getPosts } from '../data/blog';

const paths = ['/', '/about', '/services', ...services.map((s) => `/services/${s.slug}`), '/why-samya', '/grief-circle', '/breathe', '/blog', '/faq', '/contact', '/privacy'];

export const GET: APIRoute = async ({ site }) => {
  const posts = (await getPosts()).map((p) => `/blog/${p.id}`);
  const base = (site?.href ?? 'https://samya.in/').replace(/\/$/, '');
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...paths, ...posts].map((p) => `  <url><loc>${base}${p}</loc></url>`).join('\n')}
</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
