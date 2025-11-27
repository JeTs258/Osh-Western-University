# Setup Guide

This guide will help you set up the Osh-Western University portal project on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.x or higher
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify: `node --version`

- **npm**: Comes with Node.js (version 9.x or higher)
  - Verify: `npm --version`

- **Git**: For version control
  - Download from [git-scm.com](https://git-scm.com/)
  - Verify: `git --version`

## Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Osh-Western-University
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js
- React
- TypeScript
- Tailwind CSS
- ESLint & Prettier
- Utility libraries (clsx, tailwind-merge)

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at:
- **Local**: http://localhost:3000
- **Network**: http://your-ip:3000

### 4. Verify Setup

Open your browser and navigate to http://localhost:3000. You should see:
- ✅ Navigation header with "Osh-Western University" branding
- ✅ Hero section with "Welcome to Osh-Western University"
- ✅ Statistics section showing student/faculty numbers
- ✅ Card grid with three feature cards
- ✅ Footer with links

## Development Workflow

### Running Commands

```bash
# Development server (with hot reload)
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm start

# Run linting
npm run lint

# Fix linting issues automatically
npm run lint:fix

# Format code with Prettier
npm run format

# Check code formatting
npm run format:check

# Type checking (no output = success)
npm run type-check
```

### Making Changes

1. **Edit files** in `src/` directory
2. **See changes** automatically in browser (hot reload)
3. **Check for errors** - they'll appear in terminal and browser
4. **Before committing**:
   ```bash
   npm run lint
   npm run type-check
   npm run format
   npm run build
   ```

## Project Structure

```
Osh-Western-University/
├── src/
│   ├── app/                    # Pages and routes
│   │   ├── layout.tsx         # Root layout (Header/Footer)
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── ui/                # UI primitives (Button, Card, etc.)
│   │   ├── layout/            # Layout components (Header, Footer)
│   │   └── sections/          # Page sections (Hero, Stats, etc.)
│   ├── lib/
│   │   ├── utils/             # Utility functions
│   │   └── hooks/             # Custom React hooks
│   ├── assets/                # Images, icons
│   └── locales/               # Translation files
├── public/                    # Static assets
├── .gitignore                # Git ignore rules
├── .prettierrc.json          # Prettier configuration
├── eslint.config.mjs         # ESLint configuration
├── next.config.ts            # Next.js configuration
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.ts        # Tailwind configuration
├── package.json              # Dependencies and scripts
├── README.md                 # Project documentation
├── ARCHITECTURE.md           # Architecture details
└── SETUP.md                  # This file
```

## Creating Your First Component

### 1. Create a New UI Component

```bash
# Create file: src/components/ui/Badge.tsx
```

```typescript
import { cn } from "@/lib/utils/cn";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-sm rounded-full",
        variant === "default" && "bg-gray-200 text-gray-800",
        variant === "success" && "bg-green-100 text-green-800",
        variant === "warning" && "bg-yellow-100 text-yellow-800"
      )}
    >
      {children}
    </span>
  );
}
```

### 2. Export from Index

```bash
# Add to: src/components/ui/index.ts
```

```typescript
export { Badge } from "./Badge";
export type { BadgeProps } from "./Badge";
```

### 3. Use in a Page

```bash
# Edit: src/app/page.tsx
```

```typescript
import { Badge } from "@/components/ui";

export default function Home() {
  return (
    <div>
      <Badge variant="success">New Feature!</Badge>
    </div>
  );
}
```

## Creating a New Page

### 1. Create Directory and File

```bash
mkdir src/app/about
touch src/app/about/page.tsx
```

### 2. Add Page Content

```typescript
// src/app/about/page.tsx
import { Container } from "@/components/layout";

export default function AboutPage() {
  return (
    <Container>
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="text-lg text-gray-700">
        Learn about Osh-Western University's rich history and mission.
      </p>
    </Container>
  );
}
```

### 3. Access the Page

Navigate to http://localhost:3000/about

## Common Issues and Solutions

### Issue: Port 3000 Already in Use

**Solution**: Use a different port
```bash
PORT=3001 npm run dev
```

### Issue: Module Not Found

**Solution**: Restart dev server
```bash
# Stop server (Ctrl+C)
npm run dev
```

### Issue: TypeScript Errors

**Solution**: Check for typos and missing imports
```bash
npm run type-check
```

### Issue: Styling Not Applied

**Solution**: Ensure Tailwind classes are correct
- Check for typos in class names
- Verify `globals.css` is imported in `layout.tsx`
- Restart dev server

### Issue: Build Fails

**Solution**: Run checks individually
```bash
npm run type-check  # Check TypeScript
npm run lint        # Check linting
npm run build       # Try build again
```

## Editor Setup

### Visual Studio Code (Recommended)

Install these extensions:
- **ESLint** - Microsoft
- **Prettier** - Prettier
- **Tailwind CSS IntelliSense** - Tailwind Labs
- **TypeScript and JavaScript Language Features** - Built-in

#### Settings

Add to `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

### WebStorm / IntelliJ IDEA

1. Enable Prettier:
   - Settings → Languages & Frameworks → JavaScript → Prettier
   - Check "On save"

2. Enable ESLint:
   - Settings → Languages & Frameworks → JavaScript → Code Quality Tools → ESLint
   - Select "Automatic ESLint configuration"

## Environment Variables

### Local Development

Create `.env.local` file (not committed to git):
```env
# API endpoints
NEXT_PUBLIC_API_URL=http://localhost:4000

# Feature flags
NEXT_PUBLIC_ENABLE_ANALYTICS=false

# Other secrets
SECRET_KEY=your-secret-key
```

### Accessing Variables

```typescript
// Public variables (client-side accessible)
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// Private variables (server-side only)
const secretKey = process.env.SECRET_KEY;
```

## Testing the Build

Before deploying, always test the production build:

```bash
# 1. Create production build
npm run build

# 2. Start production server
npm start

# 3. Test at http://localhost:3000

# 4. Verify:
#    - All pages load correctly
#    - Navigation works
#    - Mobile menu functions
#    - No console errors
```

## Getting Help

### Documentation

- **Project README**: [README.md](./README.md)
- **Architecture Guide**: [ARCHITECTURE.md](./ARCHITECTURE.md)
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **TypeScript Docs**: https://www.typescriptlang.org/docs

### Common Commands Quick Reference

```bash
npm run dev          # Start development
npm run build        # Build for production
npm start            # Run production build
npm run lint         # Check code quality
npm run lint:fix     # Fix linting issues
npm run format       # Format code
npm run type-check   # Check types
```

## Next Steps

After completing setup:

1. **Read the README**: Understand the project structure and patterns
2. **Explore Components**: Look at existing components in `src/components/`
3. **Review Architecture**: Read `ARCHITECTURE.md` for design decisions
4. **Make Changes**: Start with small edits to understand the workflow
5. **Create Pages**: Add new pages for About, Programs, Contact, etc.

## Support

If you encounter issues not covered here:

1. Check the project README
2. Review the architecture documentation
3. Search existing issues in the repository
4. Contact the development team

---

**Welcome to the Osh-Western University Portal project!** 🎓
