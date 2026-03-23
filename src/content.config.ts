import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string().optional(),
    tags: z.array(z.string()).default([]),
    year: z.number(),
    role: z.string().optional(),
    tools: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    protected: z.boolean().default(false),
    password: z.string().optional(),
    liveUrl: z.string().optional(),
  }),
});

export const collections = { projects };
