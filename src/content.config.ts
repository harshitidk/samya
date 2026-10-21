import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* Each post is one Markdown file in src/content/blog/. The file name is the URL. */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** One line under the title, and the link-preview description. */
      description: z.string(),
      date: z.coerce.date(),
      photo: image(),
      photoAlt: z.string(),
      /** Service slug this post belongs with, for the closing links. */
      service: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
