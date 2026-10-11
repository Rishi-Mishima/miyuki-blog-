import type { MarkdownInstance } from "astro";

interface Frontmatter {
  title: string;
  description: string;
  pubDate: string;
  tags?: string[];
}

export const posts = Object.values(
  import.meta.glob<MarkdownInstance<Frontmatter>>("../pages/posts/*.md", { eager: true }),
)
  .map((post) => ({
    url: post.url!,
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    date: new Date(post.frontmatter.pubDate),
    tags: post.frontmatter.tags ?? [],
  }))
  .sort((a, b) => b.date.valueOf() - a.date.valueOf());

export type Post = (typeof posts)[number];
