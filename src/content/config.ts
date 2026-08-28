import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    group: z.enum(["lovelive", "缪", "水", "虹", "星", "莲", "鸟"]),
    date: z.date(),
    excerpt: z.string().optional(),
    cover: z.string().optional(),
    // 置顶：标记后在列表中排在最前，可多篇
    pinned: z.boolean().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
