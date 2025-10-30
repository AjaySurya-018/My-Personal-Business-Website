# J.S.N Raju Seniors' Space — Website

A warm, modern website for J.S.N Raju Seniors' Space — an old age home focused on comfort, community and care. Built with a clean, responsive design and lightweight, maintainable TypeScript code.


Quick highlights
- Crisp hero video, gallery of facilities, events slider, downloadable documents, and embedded map.
- Clear CTAs for contact, volunteering and donations.
- Mobile-first, accessible UI with readable typography and calm color accents.

Tech stack
- TypeScript + React — strong typing and modern UI patterns.
- Vite — fast development and production builds.
- Tailwind CSS — utility-first responsive styling.
- Framer Motion — subtle, performant UI animations.
- React Player — optimized hero/video playback.
- react-intersection-observer — on-scroll reveal animations.
- lucide-react — lightweight SVG icons.
- EmailJS / serverless-friendly forms — simple contact handling.
- Leaflet (available) — optional interactive maps.

Project structure (high level)
- src/
  - components/ — navbar, hero, gallery, slider, documents, map, features
  - index.css — Tailwind entry + small player helpers
  - main.tsx, App.tsx — app bootstrap
- public/assets — images, videos, PDFs

Quick start
1. Clone:
   git clone https://github.com/AjaySurya-018/My-Personal-Business-Website.git
2. Install:
   npm install
3. Dev server:
   npm run dev
4. Build for production:
   npm run build
5. Preview:
   npm run preview

Deployment
- Deploy to GitHub Pages, Netlify or Vercel (connect repo, set build command `npm run build`, publish the `dist` output).
- If using form/email features, configure EmailJS or serverless endpoints and set environment variables on the host.
