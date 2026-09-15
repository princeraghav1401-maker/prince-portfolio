# Prince Raghav — Portfolio

A premium, animated personal portfolio for **Prince Raghav**, a fresher Java Full Stack Developer. Built with React, Vite, and Framer Motion in a dark "space / tech" visual style — glassmorphism cards, ambient gradient orbs, a custom cursor, and scroll-driven reveal animations throughout.

**Live focus:** honest, fresher-appropriate content (no invented job history) presented at a senior-portfolio production quality.

---

## Features

- **Animated hero** with gradient headline, floating tech badges, and social/CTA links
- **Custom cursor** (glowing dot + delayed outer ring) — automatically disabled on touch devices and when the OS "reduce motion" setting is on
- **Ambient animated background** — drifting gradient orbs, a subtle grid, twinkling stars, and gentle mouse-based parallax
- **Floating glassmorphism navbar** with scroll-aware active-section indicator and an animated mobile menu
- **Scroll progress bar** at the top of the page
- **About** section with animated stat cards (BCA, MCA, training duration)
- **Skills** section grouped by category (languages, frontend, backend, database, tools, core concepts) plus soft skills
- **Professional Training** timeline (CodeSquadz, Noida) — no fabricated employment history
- **Projects** section with animated cards and a detailed modal for each project (CBSE Student Result Management System, this portfolio itself)
- **Education** vertical timeline (MCA → BCA → Intermediate → High School)
- **Certifications** section (HackerRank Java Basic)
- **Contact form** wired to [EmailJS](https://www.emailjs.com), with client-side validation, loading state, and success/error feedback
- Fully responsive, accessible (semantic HTML, visible focus states, `prefers-reduced-motion` support), and SEO-tagged (`index.html` meta + Open Graph)

## Tech stack

| Layer        | Choice                              |
|--------------|--------------------------------------|
| Framework    | React 19 + Vite                      |
| Animation    | Framer Motion                        |
| Icons        | lucide-react                         |
| Contact form | @emailjs/browser                     |
| Styling      | Plain CSS with a shared design-token system (no CSS framework) |

## Project structure

```
src/
  components/     Reusable UI: Navbar, Footer, AnimatedBackground, CustomCursor, ScrollProgress, Reveal
  sections/       One file per page section: Hero, About, Skills, Experience, Projects, Education, Certifications, Contact
  data/           portfolioData.js — single source of truth for all resume content
  hooks/          useMousePosition, useActiveSection, useReducedMotion
  utils/          scroll.js, motionVariants.js
  App.jsx
  main.jsx
  index.css       Design tokens + global styles
```

## Getting started

```bash
npm install
npm run dev
```

The dev server prints a local URL (typically `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

The production build is output to `dist/`.

## Environment variables (EmailJS)

The contact form sends messages through EmailJS instead of a backend. Copy the example env file and fill in your own EmailJS credentials:

```bash
cp .env.example .env
```

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

To get these values:

1. Create a free account at [emailjs.com](https://www.emailjs.com).
2. Add an email service (e.g. Gmail) — this gives you the **Service ID**.
3. Create an email template with `from_name`, `from_email`, `subject`, and `message` variables — this gives you the **Template ID**.
4. Copy your **Public Key** from the EmailJS account/API keys page.

`.env` is git-ignored, so your keys never get committed. If the variables aren't set, the form will show its normal error state instead of crashing.

## Adding your own assets

Two optional assets are referenced but not included, so the site stays fully functional without them:

- `public/profile.png` — your headshot for the hero section. If it's missing, a clean gradient placeholder with your initials is shown instead.
- `public/resume.pdf` — the file downloaded by the "Download resume" button. Add your actual PDF resume here.

## Deployment (Vercel)

1. Push this project to a GitHub repository.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Vite** (auto-detected). Build command: `npm run build`. Output directory: `dist`.
4. Add the three `VITE_EMAILJS_*` environment variables in the Vercel project settings.
5. Deploy — Vercel will rebuild automatically on every push.

The same `dist/` output also works on Netlify, GitHub Pages, or any static host.

## Accessibility & performance notes

- Respects `prefers-reduced-motion`: background motion, the custom cursor, and floating animations are all disabled when the user has this OS setting on.
- Custom cursor and decorative background elements are `aria-hidden` and never intercept pointer events.
- All interactive elements have visible focus states and accessible labels.
- Animations use `viewport={{ once: true }}` so they don't re-trigger on every scroll, keeping the page light.

## Author

**Prince Raghav**
Java Full Stack Developer (Fresher)
Email: prince.raghav1401@gmail.com
GitHub: [github.com/princeraghav1401-maker](https://github.com/princeraghav1401-maker)
