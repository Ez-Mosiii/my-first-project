# GSAP Awwwards Landing Page

Scroll-driven marketing landing page built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **GSAP** (ScrollTrigger, ScrollSmoother, SplitText). Based on an Awwwards-style SPYLT-style layout from common GSAP tutorials.

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm

### GSAP Club plugins

This project uses **Club GreenSock** plugins:

- `SplitText` — hero, message, nutrition, flavor titles
- `ScrollSmoother` — smooth scrolling wrapper in `App.tsx`

You need a valid [GSAP membership](https://gsap.com/pricing/) and npm setup per [GSAP installation docs](https://gsap.com/docs/v3/Installation). Without Club access, installs may succeed but those plugins will not run in the browser.

## Getting started

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

Other scripts:

```bash
npm run build    # production build to dist/
npm run preview  # serve dist/ locally
npm run lint     # ESLint
```

## Static assets (`public/`)

Vite serves files from `public/` at the site root. **Most media is not included in this repository** (course/tutorial assets). Copy the tutorial’s `public` folder into this project so paths match the code.

### Fonts

| Path |
|------|
| `public/fonts/ProximaNova-Regular.otf` |

### Images

Already in repo: flavor `*-bg.svg`, social icons, `arrow.svg`, `circle-text.svg`, `play.svg`.

You still need (from the tutorial bundle):

| Path |
|------|
| `public/images/nav-logo.svg` |
| `public/images/hero-bg.png`, `hero-img.png` |
| `public/images/slider-dip.png`, `big-img.png` |
| `public/images/footer-dip.png`, `footer-drink.png` |
| `public/images/p1.png` … `p7.png` |
| `public/images/{brown,red,blue,orange,white,black}-drink.webp` |
| `public/images/{brown,red,blue,orange,white,black}-elements.webp` |

### Videos

| Path |
|------|
| `public/videos/hero-bg.mp4` |
| `public/videos/pin-video.mp4` |
| `public/videos/splash.mp4` |
| `public/videos/f1.mp4` … `f7.mp4` |

If you add large video files for GitHub, consider [Git LFS](https://git-lfs.com/) for `*.mp4` to avoid blob size limits.

## Deploy

Run `npm run build` and deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages, etc.).

## Attribution

UI copy and branding reference SPYLT-style demo content from GSAP landing-page tutorials. Respect your course or asset license before redistributing third-party videos, logos, or fonts.

## License

Source code in this repo is shared for portfolio/learning. Tutorial assets and GSAP Club plugins remain subject to their respective licenses.
