import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      seoTitle: z.string().optional().nullable(),
      description: z.string(),
      publishedDate: z.date(),
      img: image().refine((img) => img.width >= 600, {
        message: "Cover image must be at least 600 pixels wide",
      }),
      tags: z.array(z.string()).optional(),
      categories: z.array(z.string()).optional().nullable(),
    }),
});

const products = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      seoTitle: z.string().optional().nullable(),
      rating: z.number().min(0).max(5).optional(),
      urlDemo: z.string().url().optional().nullable(),
      urlToBuy: z
        .union([
          z.string().url(),
          z.array(
            z.object({
              title: z.string(),
              value: z.string(),
              url: z.string().url(),
            })
          ),
        ])
        .optional()
        .nullable(),
      price: z.object({
        value: z.number(),
        currency: z.string().length(3).default("MXN"),
        discount: z
          .object({
            value: z.number().positive(),
            isPercentage: z.boolean(),
          })
          .optional(),
      }),
      description: z.string().min(10),
      img: image().refine((img) => img.width >= 300, {
        message: "Product image must be at least 300 pixels wide",
      }),
      video: z.string().url().optional().nullable(),
      tags: z.array(z.string()).optional(),
      testimonials: z
        .array(
          z.object({
            author: z.string(),
            comment: z.string().min(5),
            rating: z.number().min(0).max(5),
          })
        )
        .optional()
        .nullable(),
      categories: z.array(z.string()).optional().nullable(),
      hasDemo: z.boolean().optional(),
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
