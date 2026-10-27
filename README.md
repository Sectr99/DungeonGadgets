# Dungeon Gadgets

Landing page for the Dungeon Gadgets suite of free TTRPG utilities, deployed on Cloudflare Workers.

## Tools

| Tool | URL | Description |
|------|-----|-------------|
| **Lineage** | [lineage.dungeongadgets.com](https://lineage.dungeongadgets.com/) | Build character ancestry trees and define heritage across generations |
| **Dungeon Tracker** | [tracker.dungeongadgets.com](https://tracker.dungeongadgets.com/) | Track room states, log encounters, and map your crawl |
| **Token Forge** | [tokenforge.dungeongadgets.com](https://tokenforge.dungeongadgets.com/) | Create and export tokens for characters and monsters |

## How it works

The site is a single self-contained `dist/index.html`: no build step, no framework, no JavaScript. CSS is inline and follows the shared DungeonTools style (ink on bone paper, light and dark mode). Oswald and Crimson Pro load from Google Fonts. The logo is an inline SVG d20.

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
