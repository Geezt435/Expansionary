import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

// Also update /src/types/index.d.ts when updating these signatures
const searchable = z.object({
  title: z.string(),
  description: z.string().optional(),
  autodescription: z.boolean().default(true),
  draft: z.boolean().default(false),
});

const about = defineCollection({
  loader: glob({ pattern: '-index.{md,mdx}', base: "./src/content/about" }),
  schema: searchable.extend({
    image: z.string().optional(),
  }),
});

const authors = defineCollection({
  loader: glob({ pattern: '**\/[^_]*.{md,mdx}', base: "./src/content/authors" }),
  schema: searchable.extend({
    email: z.string().optional(),
    image: z.string().optional(),
    social: z.array(
      z.object({
        name: z.string().optional(),
        icon: z.string().optional(),
        link: z.string().optional(),
      }).optional(),
    ).optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**\/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: searchable.extend({
    date: z.date().optional(),
    image: z.string().optional(),
    author: z.string().optional(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    complexity: z.number().default(1),
    hide_toc: z.boolean().default(false),
  }),
});

const docs = defineCollection({
  loader: glob({ pattern: '**\/[^_]*.{md,mdx}', base: "./src/content/docs" }),
  schema: searchable.extend({
    pubDatetime: z.date().optional(),
    modDatetime: z.date().optional(),
    image: z.string().optional(),
    hide_toc: z.boolean().default(false),
    hide_sidenav: z.boolean().default(false),
  }),
});

const home = defineCollection({
  loader: glob({ pattern: '-index.{md,mdx}', base: "./src/content/home" }),
  schema: z.object({
    banner: z.object({
      title: z.string(),
      content: z.string(),
      button: z.object({
        label: z.string(),
        link: z.string().optional(),
      }).optional(),
    }),
    testimonials: z.object({
      enable: z.boolean().default(true),
      title: z.string(),
      description: z.string(),
      items: z.array(
        z.object({
          name: z.string(),
          designation: z.string(),
          avatar: z.string(),
          content: z.string(),
        }),
      ),
    }),
  }),
});

const terms = defineCollection({
  loader: glob({ pattern: '-index.{md,mdx}', base: "./src/content/terms" }),
  schema: searchable,
});

// Export collections
export const collections = {
  about,
  authors,
  blog,
  docs,
  home,
  terms,
};
