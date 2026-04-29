import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string().optional(),
    tags: z.array(z.string()).default([]),
    year: z.coerce.string(),
    role: z.string().optional(),
    tools: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    protected: z.boolean().default(false),
    password: z.string().optional(),
    liveUrl: z.string().optional(),
    pageTitle: z.string().optional(),
    metaDescription: z.string().optional(),
  }),
});

const clients = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/clients' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    logo: z.string().optional(),
    logoDark: z.string().optional(),
    logoColor: z.string().optional(),
    featuredImage: z.string().optional(),
    services: z.array(z.string()).default([]),
    industry: z.array(z.string()).default([]),
    dateRange: z.string(),
    summary: z.string(),
    companyDescription: z.string().optional(),
    pageTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    featuredWork: z.boolean().default(false),
    featuredLogo: z.boolean().default(false),
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
    pageTitle: z.string().optional(),
    headline: z.string().optional(),
    description: z.string(),
    metaDescription: z.string().optional(),
    heroImage: z.string().optional(),
    keyChallenges: z.array(z.string()).default([]),
    whyMe: z.array(z.string()).default([]),
    ctaHeadline: z.string().optional(),
    ctaSubhead: z.string().optional(),
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
    pageTitle: z.string().optional(),
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

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    company: z.string(),
    quote: z.string(),
    avatar: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { projects, clients, industries, services, values, testimonials };
