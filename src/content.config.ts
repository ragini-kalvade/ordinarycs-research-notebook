import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const sidebarSchema = z.object({
  observations: z.array(z.string()),
  openQuestions: z.array(z.string()),
  relatedPapers: z.array(z.string()),
  citations: z.array(z.string()),
});

const papers = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/papers' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    pubDate: z.coerce.date(),
    readingTime: z.string(),
    tags: z.array(z.string()).optional(),
    sidebar: sidebarSchema,
    references: z.array(z.string()),
  }),
});

export const collections = { papers };
