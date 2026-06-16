# Dungeon Gadgets

A landing page for the Dungeon Gadgets suite of free TTRPG utilities.

## Tools

| Tool | URL | Description |
|------|-----|-------------|
| **Lineage** | [lineage.dungeongadgets.com](https://lineage.dungeongadgets.com/) | Build character ancestry trees and define heritage across generations |
| **Dungeon Tracker** | [tracker.dungeongadgets.com](https://tracker.dungeongadgets.com/) | Track room states, log encounters, and map your crawl |
| **Token Forge** | [tokenforge.dungeongadgets.com](https://tokenforge.dungeongadgets.com/) | Create and export tokens for characters and monsters |

## Stack

- [Next.js 16](https://nextjs.org/) — App Router
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Cinzel](https://fonts.google.com/specimen/Cinzel) + [EB Garamond](https://fonts.google.com/specimen/EB+Garamond) via `next/font/google`
- Canvas particle system (vanilla JS, no dependencies)

## Development

```bash
npm install
npm run dev       # http://localhost:3000
npm run build
npm run start
```

## Project Structure

```
app/
  layout.tsx      # Root layout, font loading, metadata
  page.tsx        # Page composition
  globals.css     # Tailwind + custom CSS (animations, tool row effects)
components/
  Background.tsx  # Animated canvas particle system + gradient overlays
  Header.tsx      # Logo wordmark + nav
  Hero.tsx        # Chest logo + tagline
  ToolList.tsx    # The three tool rows with per-tool accent colors
  Footer.tsx      # Links, copyright, license
public/
  DungeonGadgetsLogo.png   # Full chest illustration (hero)
  LogoTextNormal.png       # Stone text wordmark (header)
```

## License

MIT — see [LICENSE](LICENSE) for details.
