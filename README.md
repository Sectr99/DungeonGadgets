# Dungeon Gadgets

Landing page for the Dungeon Gadgets suite of free TTRPG utilities, deployed on Cloudflare Workers.

## Tools

| Tool | URL | Description |
|------|-----|-------------|
| **Lineage** | [lineage.dungeongadgets.com](https://lineage.dungeongadgets.com/) | Build character ancestry trees and define heritage across generations |
| **Dungeon Tracker** | [tracker.dungeongadgets.com](https://tracker.dungeongadgets.com/) | Track room states, log encounters, and map your crawl |
| **Token Forge** | [tokenforge.dungeongadgets.com](https://tokenforge.dungeongadgets.com/) | Create and export tokens for characters and monsters |

## How it works

The site is a single self-contained `index.html` — no build step, no framework, no bundler. Dependencies are loaded from CDN at runtime:

- **Tailwind CSS** — via CDN `<script>`
- **Cinzel + EB Garamond** — via Google Fonts
- **Particle animation** — vanilla canvas JS, inline in the HTML

The deployable files live in `dist/`:

```
dist/
  index.html
  assets/
    DungeonGadgetsLogo.png   # Chest illustration (hero)
    LogoTextNormal.png       # Stone text wordmark (header)
    DungeoGadgetsText.png
    TextDark.png
```

`wrangler.jsonc` points Cloudflare Workers at `./dist`. No build command needed.

## Deployment

Deploys automatically via Cloudflare Workers on push to `master`.

**Deploy command:** `npx wrangler versions upload`
**Build command:** *(none)*

To deploy manually:
```bash
npx wrangler versions upload
```

## Local development

Just open `dist/index.html` directly in a browser — no server required.

## License

MIT
