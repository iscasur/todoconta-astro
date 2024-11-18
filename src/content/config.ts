import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional().nullable(),
    description: z.string(),
    publishedDate: z.date(),
    img: z.string().url().optional().nullable(),
    tags: z.array(z.string()).optional().nullable(),
    categories: z.array(z.string()).optional().nullable(),
  }),
});

const products = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
    lowPrice: z.number().optional(),
    publishedDate: z.date(),
    rate: z.number(),
    img: z.string().url(),
  }),
});

const newsletter = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishedDate: z.date(),
    img: z.string().url(),
  }),
});

const podcast = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    publishedDate: z.date(),
    url: z.string().url(),
  }),
});

export const collections = {
  posts,
  products,
  newsletter,
  podcast,
};
