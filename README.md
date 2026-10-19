# Samya · Counselling & Family Therapy

The website for Samya, Gitanjali's counselling, family therapy and grief counselling practice.

Astro + a little Tailwind, static output, no tracking. Client-side page transitions via Astro's `ClientRouter`.

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

## Swapping in real photos

Replace a file in `src/assets/photos/` keeping the same name, or import a new one where it's used.
The most important swap is Gitanjali's portrait: it is currently `tea-lavender.jpg`, used on `/about` and on the home "Meet your counsellor" section.

## Booking form

While `formEndpoint` is empty, submitting the form writes a ready-to-send WhatsApp message, so nothing is lost.
Set `formEndpoint` to a Formspree (or similar) URL to receive the details by email instead.

The previous site lives in `_legacy/` for reference and can be deleted.
