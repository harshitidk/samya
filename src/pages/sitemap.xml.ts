import type { APIRoute } from 'astro';
import { services } from '../data/services';

const paths = ['/', '/about', '/services', ...services.map((s) => `/services/${s.slug}`), '/why-samya', '/grief-circle', '/breathe', '/faq', '/contact', '/privacy'];

export const GET: APIRoute = ({ site }) => {
  const base = (site?.href ?? 'https://samya.in/').replace(/\/$/, '');
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${base}${p}</loc></url>`).join('\n')}
</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
