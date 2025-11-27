# Internationalization (i18n) Setup

This project uses [next-intl](https://next-intl.dev/) for internationalization support with static site generation.

## Supported Languages

- **Russian (ru)** - Default language
- **English (en)**
- **Chinese (zh)**

## Directory Structure

```
├── messages/
│   ├── ru.json          # Russian translations
│   ├── en.json          # English translations
│   └── zh.json          # Chinese translations
├── src/
│   ├── i18n/
│   │   └── config.ts    # Locale configuration
│   ├── i18n.ts          # next-intl request configuration
│   ├── app/
│   │   ├── [locale]/    # Locale-aware routes
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Root page (redirects to default locale)
│   └── components/
│       ├── LanguageSwitcher.tsx
│       ├── Header.tsx
│       └── Footer.tsx
```

## Usage

### Accessing Translations in Components

```tsx
import { useTranslations } from "next-intl";

export default function MyComponent() {
  const t = useTranslations("navigation");
  
  return <h1>{t("home")}</h1>;
}
```

### Adding New Translations

1. Add the translation key to all locale files (`messages/*.json`)
2. Use the translation in your components with `useTranslations`

Example:
```json
// messages/en.json
{
  "mySection": {
    "title": "Hello World"
  }
}
```

```tsx
// In your component
const t = useTranslations("mySection");
return <h1>{t("title")}</h1>;
```

### Language Switcher

The language switcher is available in the header and allows users to switch between supported languages. The selection is persisted via URL routing (e.g., `/ru`, `/en`, `/zh`).

### Adding a New Language

1. Create a new translation file in `messages/` (e.g., `messages/fr.json`)
2. Add the locale to `src/i18n/config.ts`:
   ```ts
   export const locales = ["ru", "en", "zh", "fr"] as const;
   export const localeNames: Record<Locale, string> = {
     ru: "Русский",
     en: "English",
     zh: "中文",
     fr: "Français",
   };
   ```
3. Rebuild the project

## Static Generation

All locale pages are pre-generated during the build process using `generateStaticParams` in the locale layout. This ensures the site works as a static export without needing a server.

## Testing Locally

```bash
# Development server
npm run dev

# Visit http://localhost:3000 (redirects to /ru)
# Or visit specific locales:
# - http://localhost:3000/ru
# - http://localhost:3000/en
# - http://localhost:3000/zh

# Build for production
npm run build

# Test the production build
npx serve out
```

## Important Notes

- Russian (`ru`) is the default locale
- The root path (`/`) automatically redirects to `/ru`
- All locale routes are pre-generated during build time
- The site works as a full static export with no server requirements
- Language selection is route-based (no cookies or localStorage needed)
