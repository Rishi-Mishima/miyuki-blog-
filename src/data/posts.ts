import type { MarkdownInstance } from "astro";
import { postCategories, type PostCategory } from "../config/post-categories";

interface Frontmatter {
  title: string;
  description: string;
  pubDate: string;
  category: PostCategory;
  tags?: string[];
}

export const posts = Object.values(
  import.meta.glob<MarkdownInstance<Frontmatter>>("../pages/posts/*.md", { eager: true }),
)
  .map((post) => {
    if (!postCategories.some(({ id }) => id === post.frontmatter.category)) {
      throw new Error(`Invalid category in ${post.url}: use cs-engineer, ai-lab, or web3.`);
    }
    const date = new Date(post.frontmatter.pubDate);
    if (Number.isNaN(date.valueOf())) {
      throw new Error(`Invalid pubDate in ${post.url}.`);
    }
    return {
      url: post.url!,
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      date,
      category: post.frontmatter.category,
      tags: post.frontmatter.tags ?? [],
    };
  })
  .sort((a, b) => b.date.valueOf() - a.date.valueOf());

export type Post = (typeof posts)[number];
