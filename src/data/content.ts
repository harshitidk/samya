import { site } from '../config/site';

/* Real, consented words only. Never invent an entry here.
   `excerpt` is a shortened cut of the person's own words, for tight spaces;
   the full `quote` appears on the About page. */
export const testimonials = {
  snigdha: {
    name: 'Snigdha Singh',
    context: 'After losing her mother',
    excerpt:
      'Her approach to grief counselling is incredibly compassionate and patient. She gave me a safe space to grieve without judgement.',
    quote:
      'I started seeing Gitanjali ma’am after losing my mother in 2024, at a time when I was struggling to process my grief and make sense of everything I was feeling. Her approach to grief counselling is incredibly compassionate and patient. She gave me a safe space to grieve without judgement, while gently helping me navigate the emotional ups and downs that came to me. Her guidance and support have helped me understand my grief, reconnect with myself and slowly find a sense of stability again. I’m truly grateful for the way she has held space for me through one of the most difficult phases of my life.',
  },
  maithili: {
    name: 'Maithili S.',
    context: 'Relationships & family',
    excerpt:
      'She’s done a fabulous job guiding me through my relationship issues and family connections. I have come out more sorted than before.',
    quote:
      'I have been going to Gitanjali for all my therapy and she’s done a fabulous job in guiding me through my relationship issues and my family connections. I have come out more sorted than before, thanks to her guidance and timely hand-holding.',
  },
} as const;

export const testimonialList = [testimonials.snigdha, testimonials.maithili];

/* Why Samya: what you can expect. */
export const promises = [
  { title: 'Support between sessions', body: 'WhatsApp or text, when you need it.', icon: 'chat' },
  { title: 'Confidential, always', body: 'Say anything, without judgement.', icon: 'shield' },
  { title: 'Shaped around you', body: 'Your needs, your pace.', icon: 'person' },
  { title: 'A free community', body: 'Support groups at no extra cost.', icon: 'circle' },
  { title: 'Your strengths first', body: 'Tools to stand on your own.', icon: 'spark' },
] as const;

export const education = [
  { title: 'PG Diploma in Counselling and Family Therapy', where: 'IGNOU' },
  { title: 'Trauma-Informed Psychosocial Care', where: 'Hansraj College, University of Delhi', note: 'Specialisation in grief' },
  { title: 'Cognitive Behavioural Therapy', where: 'UBIS' },
  { title: 'Clinical Hypnosis', where: 'IHA' },
] as const;

export const areas = [
  'Grief & loss',
  'Estrangement',
  'Relationships',
  'Anger & emotions',
  'Self-esteem & identity',
  'Children & teens',
  'Separation & family change',
  'Chronic illness',
  'Families & mental illness',
] as const;

export const steps = [
  { title: 'Say hello', short: 'WhatsApp, call, or the form.' },
  { title: 'We talk', short: 'A short chat to see if it fits.' },
  { title: 'We begin', short: 'Online or in person, at your pace.' },
  { title: 'You find your footing', short: 'With tools that stay with you.' },
] as const;

export const faqGroups = [
  {
    group: 'Getting started',
    items: [
      { q: 'How do I know if I need counselling?', a: 'If something is weighing on you, that’s reason enough. You don’t need a diagnosis.' },
      { q: 'What happens in the first conversation?', a: 'A short, unhurried chat. Share as much or as little as you like, ask anything, and we’ll see if it feels right.' },
      { q: 'Can I reach out for someone else?', a: 'Yes. Many people first reach out for a parent, partner, child or friend.' },
      { q: 'Do you work with children and teens?', a: 'Yes, with parents involved in a way that respects the young person’s trust.' },
    ],
  },
  {
    group: 'Sessions',
    items: [
      { q: 'Online or in person?', a: `${site.modes}.` },
      { q: 'Which languages?', a: `${site.languages}.` },
      { q: 'How many sessions will I need?', a: 'There’s no fixed number. Sessions are focused, and the aim is for you to stand on your own.' },
      { q: 'Can I message you between sessions?', a: 'Yes. WhatsApp or text support is there on the heavier days.' },
    ],
  },
  {
    group: 'Cost & privacy',
    items: [
      { q: 'What does it cost?', a: 'Fees are kept affordable on purpose. We’ll talk about what works for you in the first conversation.' },
      { q: 'Is the grief circle free?', a: 'Yes, always.' },
      { q: 'Is it confidential?', a: 'Yes, within standard safety limits, which I’ll explain when we first talk.' },
    ],
  },
  {
    group: 'Urgent help',
    items: [
      { q: 'Is Samya for emergencies?', a: `No. In a crisis, call ${site.crisis.serviceName} on ${site.crisis.numbers[0]} (free, 24×7) or ${site.crisis.emergency}.` },
    ],
  },
] as const;
