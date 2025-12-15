# Samco Website Rebuild

This repository contains a rebuilt Next.js website for Samco, a manufacturer of precast concrete piling products.

## Features
- Next.js 16 app directory
- Tailwind CSS + shadcn/ui components
- Responsive design and animations (Framer Motion)
- Lightweight, static-friendly asset handling

## Local development
1. Install dependencies:

```bash
npm install
```

2. Run the dev server:

```bash
npm run dev
# Open http://localhost:3000
```

3. Build and preview production:

```bash
npm run build
npm start
```

## Favicon / App Icon
The site uses `public/favicon.svg` as the app icon. If you want broader browser support, generate PNG/ICO sizes and add them to `public/`.

## Deploying
Recommended hosting: Vercel

1. Import the repository into Vercel (connect your GitHub account).
2. Select the `main` branch and let Vercel detect Next.js.
3. Deploy — Vercel will run `npm install` and `npm run build` by default.

## Notes
- Vercel Analytics has been removed from the project; there is no active analytics package configured by default.

## License
Add a license file if you intend to make this repo public.

---

If you want, I can add a short `CONTRIBUTING.md`, generate PNG favicons, or wire up Vercel automatic deployments for you.
