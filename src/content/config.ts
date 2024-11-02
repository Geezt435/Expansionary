import { defineCollection, z } from "astro:content";

// Author collection schema
const authorsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
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

// Blog collection schema
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
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

// Docs collection schema
const docsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string().default("Admin"),
    pubDatetime: z.date().optional(),
    modDatetime: z.date().optional().nullable(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    hide_breadcrumbs: z.boolean().optional().default(false),
    hide_toc: z.boolean().optional().default(false),
    hide_sidenav: z.boolean().optional().default(false),
    max_width: z.boolean().optional().default(false),
  }),
});

// Export collections
export const collections = {
  authors: authorsCollection,
  blog: blogCollection,
  docs: docsCollection,
};
