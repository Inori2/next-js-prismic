# GEMINI.md Framework

## Project Overview

This project is a high-performance portfolio website built with Next.js, Prismic CMS, and advanced animations using GSAP. It focuses on a premium visual aesthetic and smooth user experience.

## Tech Stack

### Core

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, React 19)
- **Language**: JavaScript
- **CMS**: [Prismic](https://prismic.io/) (Headless CMS)

### Styling & UI

- **CSS Framework**: [Tailwind CSS v4](https://tailwindcss.com/)
- **CSS Architecture**: Utility-first with global CSS variables in `src/app/globals.css`.

### Animation & Interaction

- **GSAP**: [GreenSock Animation Platform](https://gsap.com/) for complex, high-performance animations.
- **Lenis**: [Lenis](https://github.com/darkroomengineering/lenis) for smooth scrolling experiences.

## Folder Structure

```
/
├── src/
│   ├── app/              # Next.js App Router (pages, layouts, globals.css)
│   │   ├── layout.js     # Root layout with Prismic preview & smooth scroll setup
│   │   ├── page.js       # Homepage
│   │   └── slice-simulator/ # Prismic Slice Simulator
│   ├── components/       # Shared UI components (Header, Footer, etc.)
│   ├── slices/           # Prismic Slices (Hero, Content, etc.)
│   └── prismicio.js      # Prismic client configuration
├── public/               # Static assets
├── .slicemachine/        # Prismic Slice Machine local data
├── slicemachine.config.json # Slice Machine config
├── next.config.mjs       # Next.js config
└── tailwind.config.js    # Tailwind config (if customized)
```

## Development Workflow

### Prerequisites

- Node.js (Latest LTS recommended)

### Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run Development Server**:

   ```bash
   npm run dev
   ```

   Access the app at `http://localhost:3000`.

3. **Run Slice Machine (Prismic)**:
   ```bash
   npm run slicemachine
   ```
   Access Slice Machine at `http://localhost:9999` to model content and push to Prismic.

## Best Practices & Conventions

### Styling

- Use **Tailwind CSS** for all styling needs.
- Avoid custom CSS files unless necessary for complex animations or global resets.
- Use `clsx` or `tailwind-merge` for conditional class names if needed.
- For tailwind class, order from: size > position > layout > color > font > other utilities

### Components

- **Functional Components**: Use React functional components.
- **Client vs Server**: Default to Server Components. Use `'use client'` strictly when interactivity (hooks, event listeners) is required.

### Animations (GSAP)

- **Context Safety**: Clean up animations using `gsap.context()` or `useGSAP` hook (from `@gsap/react`) to avoid memory leaks in React.
- **ScrollTrigger**: Use ScrollTrigger for scroll-based interactions. Ensure markers are disabled in production.

### CMS (Prismic)

- **Slices**: Build modular content using Slices.
- **Type Safety**: Although using JS, rely on JSDoc or Prismic's generated types if available/configured for better intellisense.

## Important Commands

| Command                | Description                            |
| :--------------------- | :------------------------------------- |
| `npm run dev`          | Starts the Next.js development server. |
| `npm run build`        | Builds the application for production. |
| `npm run start`        | Starts the production server.          |
| `npm run slicemachine` | Starts the Prismic Slice Machine UI.   |
| `npm run lint`         | Runs ESLint checks.                    |
