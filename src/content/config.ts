import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const about = defineCollection({
  loader: glob({ pattern: '-index.md', base: "./src/content/about" }),
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

const authors = defineCollection({
  loader: glob({ pattern: '**\/[^_]*.md', base: "./src/content/authors" }),
  schema: z.object({
    title: z.string(),
    email: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    social: z
      .array(
        z
          .object({
            name: z.string().optional(),
            icon: z.string().optional(),
            link: z.string().optional(),
          })
          .optional(),
      )
      .optional(),
    draft: z.boolean().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**\/[^_]*.md', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    author: z.string().default("Admin"),
    categories: z.array(z.string()).default(["others"]),
    tags: z.array(z.string()).default(["others"]),
    draft: z.boolean().optional(),
    complexity: z.number().default(1),
  }),
});

const docs = defineCollection({
  loader: glob({ pattern: '**\/[^_]*.md', base: "./src/content/docs" }),
  schema: z.object({
    title: z.string(),
    author: z.string().default("Admin"),
    pubDatetime: z.date().optional(),
    modDatetime: z.date().optional().nullable(),
    image: z.string().optional(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    hide_breadcrumbs: z.boolean().optional().default(false),
    hide_toc: z.boolean().optional().default(false),
    hide_sidenav: z.boolean().optional().default(false),
    max_width: z.boolean().optional().default(false),
  }),
});

const home = defineCollection({
  loader: glob({ pattern: '-index.md', base: "./src/content/home" }),
  schema: z.object({
    banner: 
      z.object({
        title: z.string(),
        content: z.string(),
        button: 
          z.object({
            enable: z.boolean().optional(),
            label: z.string().optional(),
            link: z.string().optional(),
          }),
    }),
    testimonials:
      z.object({
        enable: z.boolean().default(true),
        title: z.string(),
        description: z.string(),
        items: 
          z.array(
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
  loader: glob({ pattern: '-index.md', base: "./src/content/terms" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
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
