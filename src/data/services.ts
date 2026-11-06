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

export interface ServiceSection {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
}

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
  /** Short list shown on the services index preview. */
  highlights: string[];
  /** The main body, in reading order. */
  sections: ServiceSection[];
  /** The warm closing statement, rendered as the centred signature. */
  closing: { heading: string; paragraphs: string[] };
  related?: { label: string; href: string };
  testimonial?: 'snigdha' | 'maithili';
}

export const services: Service[] = [
  {
    slug: 'grief-counselling',
    title: 'Grief Counselling',
    short: 'Grief & loss',
    tagline: "There's no single way to grieve, and no fixed timetable for healing.",
    teaser: 'Room to grieve, at your own pace.',
    // Dusk: quiet sky, a little warmth held in it.
    theme: { a: '#DCE8F4', b: '#F1E4E2', c: '#FBEDE6', accent: '#3E5F7C', ink: '#1B2A3A' },
    photo: dandelion,
    photoAlt: 'A single dandelion clock against a soft blue sky',
    photo2: handsWarm,
    photo2Alt: 'Two hands gently holding each other',
    highlights: [
      'Sadness, longing or a sense of emptiness',
      'Anger, guilt, regret or unanswered questions',
      'Loneliness, even when surrounded by other people',
    ],
    sections: [
      {
        heading: 'You may find yourself experiencing',
        list: [
          'Sadness, longing or a sense of emptiness',
          'Anger, guilt, regret or unanswered questions',
          'Difficulty concentrating or engaging with everyday life',
          'Loneliness, even when surrounded by other people',
          'A sense that life has changed in ways others may not fully understand',
          'Grief that returns long after a loss, sometimes when you least expect it',
        ],
      },
      {
        paragraphs: ['There is no single way to grieve, and there is no fixed timetable for healing.'],
      },
      {
        heading: 'How counselling may help',
        paragraphs: [
          "Grief counselling offers a space where you do not have to minimise your loss, explain your feelings away or move forward before you feel ready.",
          'Together, we may explore the meaning of your loss, the emotions that accompany it and the ways it has affected your sense of self, relationships and everyday life.',
          'You can choose a session of clinical hypnosis with me to experience a deep meditative state, delve into the unconscious feelings and emotions and how to bring them into awareness.',
          'Our sessions may include reflection, talking through difficult experiences, narrative approaches or other suitable methods within my training and scope of practice.',
        ],
      },
      {
        heading: 'An informal grief circle',
        paragraphs: ['At Samya you have the opportunity to be part of an informal grief circle where:'],
        list: [
          'You are welcome to participate in your own way',
          'You can share your experiences or a memory, if you wish',
          'You can listen to others without feeling obliged to speak',
          'There is space for emotions that may be difficult to express elsewhere',
          'You can recognise that other people may be navigating loss in different ways',
          'You can take part without any expectation to feel better or reach a particular stage of grief',
        ],
      },
      {
        paragraphs: [
          'The intention is not to forget the person or life you have lost. It is to make room for your grief while gradually exploring how you might continue living alongside it.',
        ],
      },
    ],
    closing: {
      heading: 'You do not have to carry everything alone',
      paragraphs: [
        'You are welcome to come as you are, whether your loss is recent or something you have been carrying for years.',
        'You do not need to know what to say or where to begin. We can start with what feels most difficult today.',
        'If you would like to explore grief counselling, you are welcome to get in touch.',
      ],
    },
    related: { label: 'About the Grief Circle', href: '/grief-circle' },
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
    highlights: [
      'Conversation, reflection and creative activities',
      'Recognising and communicating feelings',
      'Skills for emotional wellbeing',
    ],
    sections: [
      {
        heading: 'How counselling may help',
        paragraphs: [
          "Sessions are adapted to the young person's age, needs and comfort level. Depending on what is appropriate, our work may include conversation, reflection, creative activities, narrative approaches and practical emotional-regulation strategies.",
          'The aim is to help young people recognise and communicate their feelings, understand their responses and build skills that support their emotional wellbeing.',
        ],
      },
      {
        heading: 'Working with parents and caregivers',
        paragraphs: [
          "Parents and caregivers can play an important role in supporting a young person's emotional development. Where appropriate, we may discuss ways to strengthen communication, respond to difficult behaviour and create a more supportive environment at home.",
          "At the outset, we will discuss consent, parental involvement, confidentiality and safeguarding in an age-appropriate and transparent way. A young person's privacy will be respected within the applicable safety and legal boundaries.",
        ],
      },
    ],
    closing: {
      heading: 'Every child deserves to be heard',
      paragraphs: [
        "You do not need to wait until a difficulty becomes overwhelming to seek support. If you are concerned about your child's emotional wellbeing, we can explore whether counselling may be appropriate for their needs.",
      ],
    },
  },
  {
    slug: 'family-therapy',
    title: 'Family Therapy',
    short: 'Family therapy',
    tagline: 'Understanding one another, finding new ways forward.',
    teaser: 'Seeing the whole family, not one problem.',
    // Hearth: the warm pole, softened by calm.
    theme: { a: '#FBE3D9', b: '#F6D3C6', c: '#E4F1EB', accent: '#A04A57', ink: '#3E1E24' },
    photo: family,
    photoAlt: 'A smiling family sitting close together outdoors',
    photo2: motherDaughter,
    photo2Alt: 'A mother and daughter laughing in a warm hug',
    highlights: [
      'Clearer, more respectful communication',
      'Understanding different needs and perspectives',
      'Finding ways through difficult conversations',
    ],
    sections: [
      {
        heading: 'How family counselling may help',
        paragraphs: [
          'Our work may involve exploring how family members communicate, what happens when disagreements arise and how individual experiences influence the wider family dynamic.',
        ],
      },
      {
        heading: 'Together, we may work towards',
        list: [
          'Developing clearer and more respectful communication',
          'Understanding different needs, emotions and perspectives',
          'Recognising recurring patterns of conflict',
          'Exploring boundaries and expectations',
          'Finding practical ways to navigate difficult conversations',
        ],
      },
      {
        paragraphs: [
          'The intention is not to assign blame or decide who is right. It is to understand what is happening between family members and explore possibilities for change.',
        ],
      },
      {
        heading: 'Who can participate?',
        paragraphs: [
          'Depending on the circumstances, family counselling may involve individual family members, parents and children, or several members of the family together. We can discuss the most appropriate format during an initial enquiry.',
          'We will also clarify the goals of the work, participation arrangements and how confidentiality applies when more than one person is involved.',
        ],
      },
    ],
    closing: {
      heading: 'Making space for a different conversation',
      paragraphs: [
        'Family relationships can be complicated, and meaningful change takes time. Counselling offers an opportunity to pause, listen differently and explore what may help your family move towards greater understanding.',
      ],
    },
    testimonial: 'maithili',
  },
  {
    slug: 'relationship-counselling',
    title: 'Relationship Counselling',
    short: 'Relationships',
    tagline: 'Understanding the patterns that shape our relationships.',
    teaser: 'Finding a way forward, together.',
    // Rose meets calm: warmth with room to breathe.
    theme: { a: '#F8DCE2', b: '#EAD3E2', c: '#E3F0E9', accent: '#9C4A6E', ink: '#3A2130' },
    photo: handsHeld,
    photoAlt: 'Two hands clasped together in comfort',
    photo2: calmSea,
    photo2Alt: 'A still, pale sea meeting a soft horizon',
    highlights: [
      'How you respond to conflict',
      'Emotional patterns and boundaries',
      'Clarifying your needs and choices',
    ],
    sections: [
      {
        heading: 'How counselling may help',
        paragraphs: [
          'Our work may involve exploring how you respond to conflict, how you express your needs and what happens when expectations go unmet.',
          'We may look at emotional patterns, communication, personal boundaries and the beliefs that influence how you relate to others.',
          'The aim is not to tell you whether to stay or leave a relationship. It is to help you understand your experiences, clarify your needs and consider the choices available to you.',
        ],
      },
      {
        heading: 'Individual or joint support',
        paragraphs: [
          'You can enquire about individual relationship counselling to explore your own experiences and patterns.',
          'If joint sessions are offered, their suitability will depend on the circumstances, the goals of the work and the safety of everyone involved. We can discuss this before making a decision about the format.',
        ],
      },
    ],
    closing: {
      heading: 'Relationships can be explored with honesty and care',
      paragraphs: [
        'You do not have to wait until a relationship reaches a breaking point to seek support. Sometimes, beginning with a clearer understanding of yourself can help you decide what needs attention and what you would like to do next.',
      ],
    },
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
    highlights: [
      'The values that matter to you',
      'Acknowledging uncertainty',
      'Choices aligned with your values',
    ],
    sections: [
      {
        heading: 'How counselling may help',
        paragraphs: [
          'Together, we can explore the values that matter to you, the assumptions that shape your decisions and the possibilities available to you in the present.',
          'Our conversations may help you understand what feels important, acknowledge uncertainty and make choices that are more aligned with your values.',
          'Existential counselling does not require you to arrive at a particular philosophy or belief. It makes room for your questions, including those that may not have simple or immediate answers.',
        ],
      },
    ],
    closing: {
      heading: 'Finding your own way forward',
      paragraphs: [
        'You do not need to be in a crisis to explore questions about meaning or direction. Sometimes, the wish to understand yourself more deeply is reason enough to begin.',
      ],
    },
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
    highlights: [
      'Recognising the signs of rising frustration',
      'Identifying triggers and patterns',
      'Ways to pause before responding',
    ],
    sections: [
      {
        heading: 'How counselling may help',
        paragraphs: [
          'Together, we can explore the situations that trigger anger, the feelings that may accompany it and the patterns that develop when emotions become difficult to manage.',
        ],
      },
      {
        heading: 'Depending on your needs, our work may include',
        list: [
          'Recognising emotional and physical signs of rising frustration',
          'Identifying triggers and recurring patterns',
          'Developing ways to pause before responding',
          'Exploring communication and boundary-setting',
          'Practising suitable coping and emotional-regulation strategies',
        ],
      },
      {
        paragraphs: [
          'The aim is not to suppress anger or expect you never to feel frustrated. It is to help you understand what you are experiencing and find healthier ways to respond.',
        ],
      },
    ],
    closing: {
      heading: 'A different relationship with your emotions',
      paragraphs: [
        'You do not have to feel ashamed of having difficult emotions to begin counselling. Understanding them can be an important step towards responding with greater awareness and choice.',
      ],
    },
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
    highlights: [
      'Exploring what contributes to your distress',
      'Practical ways to cope',
      'Responding with awareness and care',
    ],
    sections: [
      {
        heading: 'How counselling may help',
        paragraphs: [
          'Our work may involve exploring the situations and thought patterns contributing to your distress, recognising emotional responses and identifying practical ways to cope.',
          'Where appropriate and within my training, this may include cognitive and behavioural strategies, emotional awareness, grounding exercises and approaches to managing everyday stress.',
          'We can also explore the expectations you place on yourself, the boundaries you may need and the sources of support available to you.',
          'Counselling is not about expecting yourself to manage everything perfectly. It is about understanding what is happening and finding ways to respond with greater awareness and care.',
        ],
      },
    ],
    closing: {
      heading: 'You do not have to work everything out at once',
      paragraphs: [
        'You are welcome to begin even if you cannot clearly explain why you feel overwhelmed. We can start with what you have been experiencing and explore what kind of support may be helpful.',
        'Where symptoms are severe, persistent or require medical assessment, we can also discuss appropriate additional professional support.',
      ],
    },
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
