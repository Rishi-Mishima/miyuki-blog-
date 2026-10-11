# Miyuki Blog

A static Astro blog. Node.js >= 22.12.0 is required.

## Development

Run `npm install` to install dependencies. Start a local preview only when needed:

```sh
npm run dev -- --background
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

Run `npm run build` to generate the site in `dist/`.

## Writing

Copy `docs/post-template.md` to `src/pages/posts/your-post-slug.md` and edit its metadata and Markdown body. The filename becomes `/posts/your-post-slug/`.

Required metadata: `title`, `description`, `pubDate` (YYYY-MM-DD), `category`, and `layout`. Keep the template's layout path. Tags are optional.

| Category | Archive |
| --- | --- |
| `cs-engineer` | `/cs-engineer/` |
| `ai-lab` | `/ai-lab/` |
| `web3` | `/web3/` |

Posts appear automatically in their category, the full archive, and the homepage's latest posts, sorted by publication date. An invalid category or date fails the build so an article cannot silently disappear from its category.

Keep unfinished drafts outside `src/pages`, for example in `drafts/`. Every Markdown article in `src/pages/posts/` is published when the site is built; a future date does not schedule publication. The tutorial posts are preserved in `docs/examples/` and are not published. The two initial Web3 notes are generated starter content based on linked references and can be edited or replaced.

Place article images in `public/images/posts/` and reference them as `/images/posts/filename.jpg` in Markdown.

## Contact

Update `src/config/profile.ts` to change the GitHub profile or set a public email address. An empty email hides the email link.

## Publishing

After reviewing an article, run `npm run build`, then commit and push its Markdown file and images. A Git-connected hosting service can rebuild from `main` automatically.

For Netlify, use `npm run build`, publish `dist`, and set `NODE_VERSION=24`. No database or server adapter is needed for the current static site.
