export const postCategories = [
  { id: "cs-engineer", href: "/cs-engineer/", label: "CS" },
  { id: "ai-lab", href: "/ai-lab/", label: "AI" },
  { id: "web3", href: "/web3/", label: "Web3" },
] as const;

export type PostCategory = (typeof postCategories)[number]["id"];
