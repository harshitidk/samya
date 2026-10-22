# Samya · Counselling & Family Therapy

The website for Samya, Gitanjali's counselling, family therapy and grief counselling practice.

Astro + a little Tailwind, no tracking. Every page is static except the blog, which reads Supabase on request (Vercel adapter). Client-side page transitions via Astro's `ClientRouter`.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Pages

| Route | What it is |
|---|---|
| `/` | Home: hero, "What's weighing on you?" finder, services bento, meaning of sāmya, meet Gitanjali, process, testimonials, grief circle + live breathing widget, FAQ preview |
| `/services` | All six services |
| `/services/[slug]` | One page per service (grief, child & adolescent, family therapy, existential, anger, anxiety & stress), each with its own colour theme |
| `/about` | Gitanjali's story, approach, areas, education timeline, commitment |
| `/why-samya` | The meaning of sāmya and the five things you can expect |
| `/grief-circle` | The free grief-support circle |
| `/breathe` | Breathing companion (Calm / Box / 4-7-8) and 5-4-3-2-1 grounding |
| `/faq` | Searchable, filterable FAQs |
| `/contact` | Four-step booking form (falls back to a pre-written WhatsApp message) |

## Where things live

- **Practical details** (phone, WhatsApp, email, location, languages, form endpoint): `src/config/site.ts`. Everything marked `PLACEHOLDER` needs a real value.
- **Service copy and colours**: `src/data/services.ts`
- **Testimonials, promises, education, FAQs, steps**: `src/data/content.ts`. Only add real, consented testimonials.
- **Design tokens** (colour, type, gradients, motion): `src/styles/tokens.css`
- **Photos**: `src/assets/photos/` (Unsplash licence, free for commercial use). Astro optimises them at build.

## Blog and admin

Posts live in Supabase, not in the repo. Add and delete them at **`/admin`**, which isn't linked from anywhere on the site.
It needs an email and password. Images you upload (cover and inside the post) are resized in the browser and stored in the `blog-images` bucket.
New posts appear on the site within about a minute, with no rebuild.

One-time setup:

1. Supabase → SQL Editor: run `supabase/schema.sql` (creates the tables, image bucket and access rules, and imports the first post).
2. Supabase → Authentication → Users → **Add user**: enter the admin email and password and tick *Auto confirm*.
3. In the SQL Editor, make that user an admin:
   `insert into public.admins (user_id) select id from auth.users where email = 'you@example.com';`
4. Supabase → Authentication → Sign In / Providers: turn **off** *Allow new users to sign up*.
5. Vercel → Settings → Environment Variables: add `PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_PUBLISHABLE_KEY` (the same values as `.env.local`).

Only accounts in `public.admins` can write. Everyone else, signed in or not, can only read.

## Swapping in real photos

Replace a file in `src/assets/photos/` keeping the same name, or import a new one where it's used.
Gitanjali's own photos are `gitanjali-portrait.jpg` (home hero), `gitanjali-session.jpg` (home and About) and `gitanjali-chair.jpg` (About).

## Booking form

While `formEndpoint` is empty, submitting the form writes a ready-to-send WhatsApp message, so nothing is lost.
Set `formEndpoint` to a Formspree (or similar) URL to receive the details by email instead.

The previous site lives in `_legacy/` for reference and can be deleted.

## Link previews

Every page has its own preview card (WhatsApp, iMessage, LinkedIn, X…) in `public/og/`.
After changing a heading, tagline or photo, regenerate them with `npm run og` (needs Google Chrome).
The card designs live in `src/pages/og-card/[card].astro`, which is dev-only and never shipped.

Preview images must use the live address. The build picks it up automatically on Vercel and Netlify;
anywhere else, set `SITE_URL=https://your-domain` when building.
