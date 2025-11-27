# Deployment Guide

This project is configured for static export, making it easy to deploy to various platforms.

## Build

First, create the static export:

```bash
npm run build
```

This will generate static files in the `out/` directory.

## Deployment Options

### Vercel

1. Push your code to a Git repository
2. Import your project in Vercel
3. Vercel will automatically detect Next.js and deploy

### Netlify

1. Connect your Git repository
2. Set build command: `npm run build`
3. Set publish directory: `out`
4. Deploy

### GitHub Pages

1. Build the project locally
2. Push the `out/` directory to a `gh-pages` branch
3. Enable GitHub Pages in repository settings

### Other Static Hosts

Any static hosting service can be used. Simply upload the contents of the `out/` directory after building.
