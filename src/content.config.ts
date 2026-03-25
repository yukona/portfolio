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

const clients = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/clients' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    logo: z.string().optional(),
    logoDark: z.string().optional(),
    industry: z.array(z.string()).default([]),
    dateRange: z.string(),
    summary: z.string(),
    protected: z.boolean().default(false),
    password: z.string().optional(),
    projects: z.array(z.object({
      title: z.string(),
      description: z.string(),
      outcome: z.string(),
      tags: z.array(z.string()),
      year: z.string(),
      image: z.string().optional(),
      imageAlt: z.string().optional(),
      liveUrl: z.string().optional(),
    })),
  }),
});

const industries = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/industries' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string(),
    clientSlugs: z.array(z.string()).default([]),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    headline: z.string(),
    subhead: z.string(),
    credibility: z.array(z.string()),
    process: z.array(z.object({
      step: z.string(),
      title: z.string(),
      description: z.string(),
    })),
    outcomes: z.array(z.object({
      metric: z.string(),
      label: z.string(),
    })),
    serviceItems: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })),
    ctaHeadline: z.string(),
    ctaSubhead: z.string(),
    ctaLabel: z.string(),
    relatedClientSlugs: z.array(z.string()).default([]),
    relatedProjectSlugs: z.array(z.string()).default([]),
    metaDescription: z.string(),
    order: z.number(),
  }),
});

const values = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/values' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = { projects, clients, industries, services, values };
