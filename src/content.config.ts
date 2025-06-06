import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const work = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  // loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      link: z.string().optional(),
      cover: image().optional().nullable(),
      coverAlt: z.string().optional().nullable(),
      subtitle: z.string().optional().nullable(),
      imageCopyright: z.string().optional().nullable(),
      tags: z.array(z.string()).optional().nullable(),
    }),
});

export const collections = { work };
