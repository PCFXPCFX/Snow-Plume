import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    group: z.enum(["lovelive", "缪", "水", "虹", "星", "莲", "鸟"]),
    date: z.date(),
    excerpt: z.string().optional(),
    cover: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
