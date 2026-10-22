import type { ImageMetadata } from 'astro';
import dandelion from '../assets/photos/dandelion.jpg';
import kids from '../assets/photos/kids-colouring.jpg';
import teen from '../assets/photos/teen-headphones.jpg';
import family from '../assets/photos/indian-family.jpg';
import motherDaughter from '../assets/photos/mother-daughter.jpg';
import night from '../assets/photos/night-hill.jpg';
import journal from '../assets/photos/journal.jpg';
import wave from '../assets/photos/pink-wave.jpg';
import calmSea from '../assets/photos/calm-sea.jpg';
import breathing from '../assets/photos/woman-breathing.jpg';
import handsWarm from '../assets/photos/hands-warm.jpg';
import handsHeld from '../assets/photos/hands-held.jpg';

export interface Service {
  slug: string;
  title: string;
  short: string;          // nav and card label
  tagline: string;        // one line under the title
  teaser: string;         // card body, one short line
  /** Each service sits at its own point between the calm pole and the warm pole. */
  theme: { a: string; b: string; c: string; accent: string; ink: string };
  photo: ImageMetadata;
  photoAlt: string;
  photo2: ImageMetadata;
  photo2Alt: string;
  intro: string;
  listHeading: string;
  list: string[];
  aim: string;
  extras?: { title: string; body: string; icon: 'chat' | 'circle' }[];
  testimonial?: 'snigdha' | 'maithili';
}

export const services: Service[] = [
  {
    slug: 'grief-counselling',
    title: 'Grief Counselling',
    short: 'Grief & loss',
    tagline: 'There’s no right way to grieve, and no deadline.',
    teaser: 'Room to grieve, at your own pace.',
    // Dusk: quiet sky, a little warmth held in it.
    theme: { a: '#DCE8F4', b: '#F1E4E2', c: '#FBEDE6', accent: '#3E5F7C', ink: '#1B2A3A' },
    photo: dandelion,
    photoAlt: 'A single dandelion clock against a soft blue sky',
    photo2: handsWarm,
    photo2Alt: 'Two hands gently holding each other',
    intro:
      'Loss can change how we see ourselves, the people around us and the world. Here, you can grieve without pressure to “move on”, at a pace that feels safe.',
    listHeading: 'Grief can look like',
    list: [
      'Losing a parent, partner, child or friend',
      'A sudden death, or a long illness',
      'Grief others think you should be “over”',
      'Grieving someone who is still here, but unwell',
      'Losses that are hard to name',
    ],
    aim: 'We’ll meet you where you are.',
    extras: [
      { icon: 'chat', title: 'Between sessions', body: 'WhatsApp or text support on the heavier days.' },
      { icon: 'circle', title: 'A free grief circle', body: 'A small group to share, listen and feel less alone.' },
    ],
    testimonial: 'snigdha',
  },
  {
    slug: 'child-adolescent-counselling',
    title: 'Child & Adolescent Counselling',
    short: 'Children & teens',
    tagline: 'Helping young people understand themselves.',
    teaser: 'Making sense of big feelings, safely.',
    // Morning: sunlight meeting fresh green.
    theme: { a: '#FBF0D8', b: '#DDF0E7', c: '#E3EDF6', accent: '#2D6A5F', ink: '#163A34' },
    photo: kids,
    photoAlt: 'Children colouring together with bright felt pens',
    photo2: teen,
    photo2Alt: 'A teenager relaxing on a bed with headphones in soft window light',
    intro:
      'Growing up brings feelings children can’t always name. Counselling gives them a safe place to understand those feelings and learn healthy ways to cope.',
    listHeading: 'I help with',
    list: [
      'Exam stress and academic pressure',
      'Bullying and friendship troubles',
      'Separation, family change or illness at home',
      'The emotional ups and downs of adolescence',
      'Clashes over screens, food and routines',
      'Motivation, focus and routine',
      'Restlessness and overwhelm',
    ],
    aim: 'Not to change who a child is, but to help them understand who they are.',
  },
  {
    slug: 'family-therapy',
    title: 'Family Therapy',
    short: 'Family therapy',
    tagline: 'Not who’s to blame. How we relate.',
    teaser: 'Seeing the whole family, not one problem.',
    // Hearth: the warm pole, softened by calm.
    theme: { a: '#FBE3D9', b: '#F6D3C6', c: '#E4F1EB', accent: '#A04A57', ink: '#3E1E24' },
    photo: family,
    photoAlt: 'A smiling family sitting close together outdoors',
    photo2: motherDaughter,
    photo2Alt: 'A mother and daughter laughing in a warm hug',
    intro:
      'What affects one person affects the whole family. Family therapy helps you see your patterns, hear each other, and find kinder ways to relate.',
    listHeading: 'I help with',
    list: [
      'Difficult transitions and life changes',
      'Estrangement and emotional distance',
      'Chronic illness in the family',
      'Separation, divorce and new family shapes',
      'A family member’s mental health',
      'Financial stress and family crises',
      'Changing roles and living arrangements',
    ],
    aim: 'More empathy, clearer communication, healthier boundaries.',
    extras: [
      { icon: 'chat', title: 'When a loved one has a diagnosis', body: 'Guidance for families living with depression, anxiety, bipolar disorder or OCD.' },
    ],
    testimonial: 'maithili',
  },
  {
    slug: 'relationship-counselling',
    title: 'Relationship Counselling',
    short: 'Relationships',
    tagline: 'When relationships feel difficult, there is room to begin again.',
    teaser: 'Finding a way forward, together.',
    // Rose meets calm: warmth with room to breathe.
    theme: { a: '#F8DCE2', b: '#EAD3E2', c: '#E3F0E9', accent: '#9C4A6E', ink: '#3A2130' },
    photo: handsHeld,
    photoAlt: 'Two hands clasped together in comfort',
    photo2: calmSea,
    photo2Alt: 'A still, pale sea meeting a soft horizon',
    intro:
      'Relationships can hold our deepest belonging and our deepest hurt. A safe, non-judgemental space to understand what is happening and find healthier ways of relating.',
    listHeading: 'I offer support with',
    list: [
      'Navigating break-ups, separation and divorce',
      'Fertility-related emotional challenges',
      'Conflict with in-laws and extended family',
      'Pre-marital counselling and preparing for marriage',
      'Healing from childhood wounds and unresolved family conflict',
      'Estrangement or difficult relationships between adult children and parents',
      'Separation or emotional distance between partners',
      'Relationships affected by a lack of emotional or physical intimacy',
    ],
    aim: 'Not always about “fixing” a relationship — sometimes it’s understanding yourself, setting boundaries, and moving forward with clarity.',
  },
  {
    slug: 'existential-counselling',
    title: 'Existential Counselling',
    short: 'Life transitions & meaning',
    tagline: 'For when life leaves you at a crossroads.',
    teaser: 'When life looks fine, but feels empty.',
    // Deep water: the calm pole at its quietest.
    theme: { a: '#D6E5F2', b: '#CFE7E0', c: '#EEF5F1', accent: '#2F5A78', ink: '#16283A' },
    photo: night,
    photoAlt: 'A lone figure on a hilltop beneath a night sky',
    photo2: journal,
    photo2Alt: 'Someone writing in a notebook on a bright marble table',
    intro:
      'Everything can look fine from the outside while something inside feels empty. This is a space to pause, and gently explore what lies beneath.',
    listHeading: 'We can explore',
    list: [
      'Disconnection, low motivation or lost purpose',
      'Empty nest, menopause or the end of a relationship',
      'Losing a career or a business',
      'Reconnecting with your values',
      'What a more meaningful life looks like for you',
    ],
    aim: 'Not just coping. Living with more meaning.',
  },
  {
    slug: 'anger-emotional-regulation',
    title: 'Anger & Emotional Regulation',
    short: 'Anger & emotions',
    tagline: 'Understanding what lies beneath the anger.',
    teaser: 'Learning what your anger is saying.',
    // Heat cooling into calm: warm on one side, sea-glass on the other.
    theme: { a: '#F9D6C8', b: '#FBEADF', c: '#D9EEE6', accent: '#A8513A', ink: '#3F1D12' },
    photo: wave,
    photoAlt: 'A wave curling over at sunset',
    photo2: calmSea,
    photo2Alt: 'A still, pale sea meeting a soft horizon',
    intro:
      'Anger is often hurt, fear or feeling unheard, held in for too long. Rather than suppressing it, we learn what it’s trying to say.',
    listHeading: 'I help with',
    list: [
      'A short temper affecting work or relationships',
      'Outbursts that feel hard to stop',
      'Anger that stays bottled up',
      'Knowing your triggers and patterns',
      'Responding without hurting yourself or others',
    ],
    aim: 'Not to take anger away, but to respond with choice and calm.',
  },
  {
    slug: 'anxiety-stress-counselling',
    title: 'Anxiety & Stress Counselling',
    short: 'Anxiety & stress',
    tagline: 'A little more space to breathe.',
    teaser: 'Space to breathe when life feels too full.',
    // Breath: sea-glass and open sky.
    theme: { a: '#D3EDE5', b: '#E3EDF6', c: '#F1F7F4', accent: '#2D6A5F', ink: '#123A35' },
    photo: breathing,
    photoAlt: 'A woman by a window with her eyes closed, breathing slowly',
    photo2: calmSea,
    photo2Alt: 'A still, pale sea meeting a soft horizon',
    intro:
      'Holding too many roles at once can become overwhelming. Together, we slow down, see what’s creating the stress, and find your balance again.',
    listHeading: 'I help with',
    list: [
      'Procrastination and feeling stuck',
      'Overthinking',
      'Chronic stress',
      'Caring for everyone but yourself',
      'Work–life imbalance',
    ],
    aim: 'Not having it all figured out. Just a little more grounded.',
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

/* One feeling per service, in the words someone might actually use. */
export const feelings = [
  { label: 'I’ve lost someone', service: 'grief-counselling' },
  { label: 'My child is struggling', service: 'child-adolescent-counselling' },
  { label: 'Our family keeps clashing', service: 'family-therapy' },
  { label: 'My relationship is struggling', service: 'relationship-counselling' },
  { label: 'I feel lost', service: 'existential-counselling' },
  { label: 'My anger worries me', service: 'anger-emotional-regulation' },
  { label: 'I can’t switch off', service: 'anxiety-stress-counselling' },
] as const;
