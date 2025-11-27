# Osh-Western Portal

A modern web portal built on the NodeLoc/Edu stack, featuring static HTML, Tailwind CSS, and vanilla JavaScript for optimal performance and maintainability.

## Documentation

- **[Reference Architecture](docs/reference-architecture.md)** - Comprehensive guide to the tech stack, layout patterns, UI design system, and portal adaptation guidelines

## Tech Stack

- **Frontend**: Static HTML5, Tailwind CSS (via CDN), Vanilla JavaScript
- **Architecture**: Component-based patterns with reusable layouts
- **Deployment**: Static file hosting (Nginx, CDN, or static hosting services)

## Getting Started

### Development

1. Clone the repository
2. Open the project in a local web server:
   ```bash
   python3 -m http.server 8000
   ```
3. Navigate to `http://localhost:8000`

### Production Build

For production deployments, compile Tailwind CSS for optimized performance:

```bash
# Install Tailwind CLI
npm install -D tailwindcss

# Build optimized CSS
npx tailwindcss -i ./css/input.css -o ./css/output.css --minify
```

## Project Structure

```
osh-western-portal/
├── docs/                      # Documentation
│   └── reference-architecture.md
├── css/                       # Stylesheets
├── js/                        # JavaScript modules
├── assets/                    # Images, icons, logos
└── *.html                     # HTML pages
```

## Key Features

- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: WCAG 2.1 AA compliant
- **Performance**: Static-first architecture for fast load times
- **Modular JavaScript**: Vanilla JS modules for maintainability
- **Reusable Components**: Consistent UI patterns across all pages

## Contributing

Please refer to the [Reference Architecture](docs/reference-architecture.md) for coding standards, component patterns, and design guidelines.

## License

Copyright © 2025 Osh-Western
