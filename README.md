[中文版本](./README_CN.md)

# 白羽 / Snow Plume

*A LoveLive! fan site — Swiss International Style, physics feather, pure static*

> Named after the white feather of inheritance in LoveLive!, and echoing μ's iconic *Snow Halation*.

[![Astro](https://img.shields.io/badge/Astro-5.x-FF5A03?logo=astro)](https://astro.build)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.x-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)
[![Deploy](https://img.shields.io/badge/deploy-Cloudflare%20Pages-F38020?logo=cloudflare)](https://pages.cloudflare.com)

The name **白羽** (shiraha, "white feather") is drawn from LoveLive!'s most enduring visual metaphor — the feather of inheritance passed from μ's through each successive generation.

---

## Groups

| | | | | | |
|:--:|:--:|:--:|:--:|:--:|:--:|
| <img src="public/images/muse_logo.svg" height="36"> | <img src="public/images/aqours_logo.svg" height="28"> | <img src="public/images/nijigasaki_logo.svg" height="26"> | <img src="public/images/liella_logo.svg" height="28"> | <img src="public/images/hasunosora_logo.svg" height="22"> | <img src="public/images/bluebird-logo.svg" height="28"> |
| μ's | Aqours | Nijigasaki | Liella! | Hasunosora | BLUEBIRD |

## Features

- **6 Group Pages** — μ's, Aqours, Nijigasaki, Liella!, Hasunosora, BLUEBIRD
- **Subdomain Routing** — Chinese-character subdomains (缪.*, 水.*, 虹.*, 星.*, 莲.*, 鸟.*)
- **Swiss International Style** — Grid system, restrained color, glassmorphism
- **Physics Feather** — Spring-mass-damper simulation, draggable, drifts between group cards
- **Member Colors** — Click color dots to shift page accent theme
- **Markdown Blog** — Astro content collections, write in `.md`
- **Song Links** — Each favorite song card can link to a Bilibili video or internal blog post
- **Photo Wall** — Grid gallery + lightbox, PNG/JPG/WebP
- **Glassmorphism TopBar** — `backdrop-blur` navigation with friend links

## Quick Start

```bash
npm install
npm run dev          # http://localhost:4321
```

| Param | Page |
|-------|------|
| `/?site=lovelive` | Hub |
| `/?site=缪` | μ's |
| `/?site=水` | Aqours |
| `/?site=虹` | Nijigasaki |
| `/?site=星` | Liella! |
| `/?site=莲` | Hasunosora |
| `/?site=鸟` | BLUEBIRD |

## Deploy

```bash
npm run build        # output → dist/
```

Deploy `dist/` to Cloudflare Pages with custom domain + subdomain routing.

## Private Blog Posts

Blog posts in `src/content/blog/` are public by default. To keep future posts private (local dev only, not pushed to GitHub):

```bash
# After creating a new post:
git update-index --skip-worktree src/content/blog/your-private-post.md
```

The file stays on disk and works in dev, but git ignores all changes to it — no accidental commits or pushes. To track it again later:

```bash
git update-index --no-skip-worktree src/content/blog/your-private-post.md
```

List all skipped files: `git ls-files -v | grep "^S"`

## Song Links

Each song in the "我最喜爱的歌曲" (My Favorite Songs) section can optionally link to external or internal content:

| Link type | Example | Behavior |
|-----------|---------|----------|
| Bilibili (B站) | `https://www.bilibili.com/video/BV...` | Opens in new tab, shows "B站观看" label |
| Blog post | `/blog/song-post-slug` | Same-tab navigation, shows "阅读博文" label |
| None | (omit `url`) | Static card, no link |

### Configuration

Edit `src/data/groups.js` — each song is an object with `name` (required) and `url` (optional):

```js
songs: [
  { name: "Snow halation" },                                        // no link
  { name: "僕らは今のなかで", url: "https://www.bilibili.com/video/BV..." }, // B站
  { name: "START:DASH!!", url: "/blog/start-dash" },                // blog
],
```

Songs that are fan remixes or rearrangements can link directly to their B站 uploads, while songs with write-ups link to the corresponding blog post.

## Design

Swiss International Style — glass cards with `backdrop-blur-2xl`, group colors as 2px accent lines, alternating card alignment on a strict grid. No database, no API, pure static HTML.

The feather uses a **spring-mass-damper** physics model with critical damping — it drifts between group cards at its own pace, unaffected by scroll speed. Drag it, release it, it springs back.

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | [Astro](https://astro.build) 5.x |
| Styling | [Tailwind CSS](https://tailwindcss.com) 3.x |
| Content | Astro Content Collections (Markdown) |
| Font | [Noto Sans SC](https://fonts.google.com/specimen/Noto+Sans+SC) |
| Hosting | [Cloudflare Pages](https://pages.cloudflare.com) |

## Project Structure

```
src/
├── layouts/Layout.astro
├── pages/
│   ├── index.astro               # Entry + subdomain router
│   └── blog/[slug].astro         # Blog post detail
├── components/
│   ├── NavHub.astro              # Hub page (lovelive.*)
│   ├── GroupPage.astro           # Group page
│   ├── CoverSection.astro        # Full-screen cover
│   ├── TopBar.astro              # Global top bar
│   ├── MemberColors.astro        # Color picker dots
│   ├── BlogList.astro            # Blog post list
│   └── PhotoWall.astro           # Photo grid + lightbox
├── content/
│   ├── config.ts                 # Collection schema
│   └── blog/*.md                 # Blog posts
└── data/
    └── groups.js                 # Groups, members, songs, images
```

## Credits

| Asset | Source | License |
|-------|--------|---------|
| μ's logo | [Moegirl Commons](https://commons.moegirl.org.cn/index.php?title=File:%CE%9C%27s_logo.svg) | Public Domain |
| Aqours logo | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Aqours_logo.svg) | Public Domain |
| Nijigasaki logo | [latestlogo.com](https://latestlogo.com/logos/nijigasaki-high-school-idol-club/) | Public Domain |
| Liella! logo | [Moegirl Commons](https://commons.moegirl.org.cn/index.php?title=File:Liella%21.svg) | Public Domain |
| Hasunosora logo | [Moegirl Commons](https://commons.moegirl.org.cn/index.php?title=File:莲之空logo横板.svg) | Public Domain |
| BLUEBIRD logo | [Moegirl Commons](https://commons.moegirl.org.cn/Category:生如百戏难！LOVELIVE!_BLUEBIRD) | Public Domain |
| Feather image | [pngimg.com](https://pngimg.com/uploads/feather/feather_PNG12955.png) | Free for personal use |

| Noto Sans SC | [Google Fonts](https://fonts.google.com/specimen/Noto+Sans+SC) | SIL Open Font License |

## License

MIT © 2026 · Co-created by [Claude](https://claude.ai) (Anthropic) and DeepSeek V4 Pro

---

If you find this project helpful, a Star ⭐ would be greatly appreciated!
