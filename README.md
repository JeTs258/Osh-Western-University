# Next.js Static Export Project

A modern Next.js project configured with TypeScript, Tailwind CSS, and static export support.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Linting**: ESLint 9
- **Formatting**: Prettier
- **Export**: Static HTML/CSS/JS

## Project Structure

```
├── src/
│   ├── app/           # Next.js App Router pages
│   ├── components/    # Shared React components
│   └── content/       # Static content and data files
├── public/            # Static assets (images, fonts, etc.)
└── out/               # Built static export (generated)
```

## Getting Started

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Building

Build the static export:

```bash
npm run build
```

The static files will be generated in the `out/` directory.

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build static export
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking
- `npm run deploy` - Build for deployment

## Features

- ✅ Static Site Generation (SSG) with static export
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ ESLint + Prettier for code quality
- ✅ App Router architecture
- ✅ Optimized for deployment

## Configuration

- **Next.js Config**: `next.config.ts` - Configured for static export
- **TypeScript Config**: `tsconfig.json` - Strict TypeScript settings
- **Tailwind Config**: Uses Tailwind CSS 4 with PostCSS
- **ESLint Config**: `eslint.config.mjs` - Next.js recommended rules + Prettier
- **Prettier Config**: `.prettierrc` - Code formatting rules

## Deployment

This project is configured for static export and can be deployed to:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Simply build the project (`npm run build`) and deploy the `out/` directory.
