# Rudraveda — Authentic Himalayan Rudraksha

A modern, simple e-commerce site for lab-certified Nepali Rudraksha beads.
Built with **Vite + React + TypeScript + Tailwind CSS** following the
**shadcn project structure**, with **framer-motion** scroll animations.

## What's better (vs. typical rudraksha sites)

- **No paywalls** — the full mukhi guide, certificates and care instructions are free
- Clean, fast single-page experience with a 3D hero scroll animation
- Working cart drawer with quantities and totals
- Honest trust signals: X-ray certification, 200% lifetime guarantee, free shipping
- Fully responsive, accessible markup, modern typography (Fraunces + Inter)

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Project structure (shadcn convention)

```
components.json            # shadcn CLI config (aliases, Tailwind paths)
src/
  components/
    ui/                    # shadcn-style primitives (button, container-scroll-animation)
    site/                  # page sections (Hero, Collection, FAQ, ...)
  context/CartContext.tsx  # cart state
  data/products.ts         # product catalog
  lib/utils.ts             # cn() helper
  index.css                # Tailwind + shadcn CSS variables
```

The `src/components/ui` folder is where the shadcn CLI installs components —
keeping primitives there (with the `@/components/ui` alias in
`components.json`) means any future `npx shadcn@latest add <component>`
lands in the right place.
