/* Renders every link-preview card to public/og/<card>.jpg.
   Run `npm run og` (it starts its own dev server). Needs local Google Chrome. */
import { chromium } from 'playwright-core';
import { spawn } from 'node:child_process';
import sharp from 'sharp';

const PORT = 4399;
// Keep in step with src/pages/og-card/[card].astro.
const slugs = ['grief-counselling', 'child-adolescent-counselling', 'family-therapy', 'existential-counselling', 'anger-emotional-regulation', 'anxiety-stress-counselling'];
const cards = ['default', 'about', 'services', 'contact', 'why-samya', 'grief-circle', 'breathe', ...slugs.map((s) => `service-${s}`)];

const dev = spawn('npx', ['astro', 'dev', '--port', String(PORT)], { stdio: 'pipe' });
await new Promise((res) => dev.stdout.on('data', (d) => String(d).includes('ready') || String(d).includes('Local') ? res() : null));

const browser = await chromium.launch({ executablePath: process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
for (const card of cards) {
  await page.goto(`http://localhost:${PORT}/og-card/${card}`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(300);
  const png = await page.locator('.og').screenshot();
  // WhatsApp drops previews over ~300KB, so keep every card well under that.
  await sharp(png).jpeg({ quality: 82, mozjpeg: true }).toFile(`public/og/${card}.jpg`);
  console.log('✓', card);
}
await browser.close();
dev.kill();
