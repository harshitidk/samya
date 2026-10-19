/* ============================================================
   Every practical detail of the practice lives here.
   Change it once and the whole site updates.
   Anything marked PLACEHOLDER still needs confirming.
   ============================================================ */

export const site = {
  name: 'Samya',
  nameDiacritic: 'sāmya',
  nameDevanagari: 'साम्य',
  tagline: 'Counselling & Family Therapy',

  practitioner: 'Gitanjali',
  /* PLACEHOLDER: full name as it should appear publicly, e.g. "Gitanjali Sharma". */
  practitionerFull: 'Gitanjali',
  role: 'Counsellor, Family Therapist & Grief Counsellor',

  /* PLACEHOLDER: real domain. Also update astro.config.mjs and public/robots.txt. */
  url: 'https://samya.in',

  /* ---- Contact. PLACEHOLDER: all need real values. ---- */
  phoneDisplay: '+91 98765 43210',
  phoneHref: '+919876543210',
  whatsappNumber: '919876543210',
  whatsappMessage: 'Hi Gitanjali, I found Samya online and would like to talk.',
  email: 'hello@samya.in',

  /* ---- Practice details. PLACEHOLDER: confirm with Gitanjali. ---- */
  modes: 'Online across India, and in person in Delhi NCR',
  modesShort: 'Online & in person',
  area: 'Delhi NCR',
  languages: 'English and Hindi',
  replyTime: 'within a day',

  /* ---- Social. Set to null to hide. ---- */
  instagram: null as string | null,

  /* ---- Crisis line. Re-verify before launch. ---- */
  crisis: {
    serviceName: 'Tele-MANAS',
    numbers: ['14416', '1-800-891-4416'],
    emergency: '112',
  },

  /* PLACEHOLDER: Formspree (or similar) endpoint. While empty, the booking
     form hands everything over to WhatsApp instead, so nothing is lost. */
  formEndpoint: '',
} as const;

export const whatsappHref = (text: string = site.whatsappMessage) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const telHref = `tel:${site.phoneHref}`;
