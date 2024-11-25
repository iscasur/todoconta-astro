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
    seoTitle: z.string().optional().nullable(),
    rating: z.number(),
    price: z.string(),
    description: z.string(),
    img: z.string().url(),
    video: z.string().url().optional().nullable(),
    testimonials: z
      .array(
        z.object({
          author: z.string(),
          comment: z.string(),
          rating: z.number(),
        })
      )
      .optional(),
    categories: z.array(z.string()).optional().nullable(),
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
