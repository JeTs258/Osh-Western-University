# Osh-Western University Website

Official website for Osh-Western University - A multilingual educational portal serving students in Kyrgyzstan and internationally.

## 🌍 Languages Supported

- **Russian (РУ)** - Default language
- **English (EN)** - International audience
- **Chinese (中文)** - Chinese-speaking students

## 📋 Project Overview

This project is a static, multilingual university website built with modern web technologies, designed to showcase academic programs, faculty, admissions information, and campus life at Osh-Western University.

### Key Features

- ✅ Multilingual support (RU/EN/ZH)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Modern UI with Tailwind CSS
- ✅ Fast loading and performance optimized
- ✅ SEO-friendly architecture
- ✅ Accessible (WCAG 2.1 AA compliant)
- ✅ Static site - no backend required

## 🏗️ Architecture

Based on the **nodeloc/edu** reference repository with significant adaptations for multilingual support and Kyrgyzstani context.

See **[docs/architecture.md](docs/architecture.md)** for detailed architecture analysis and implementation guidelines.

## 🚀 Technology Stack

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework (custom configuration)
- **Vanilla JavaScript** - Interactive features
- **Font Awesome** - Icon library
- **Google Fonts** - Multilingual typography (PT Sans, Noto Sans SC)

## 📁 Project Structure

```
osh-western-university/
├── docs/
│   └── architecture.md       # Architecture documentation
├── ru/                       # Russian pages (default)
│   ├── index.html
│   ├── about.html
│   ├── academics.html
│   ├── admissions.html
│   └── contact.html
├── en/                       # English pages
│   └── ...
├── zh/                       # Chinese pages
│   └── ...
├── js/
│   ├── main.js              # Core JavaScript
│   └── lang-switcher.js     # Language switching logic
├── images/                   # Image assets
├── src/
│   └── input.css            # Tailwind source
├── dist/
│   └── output.css           # Compiled CSS
├── index.html               # Root redirect to /ru/
├── 404.html                 # Error page
├── tailwind.config.js       # Tailwind configuration
└── README.md                # This file
```

## 🛠️ Development Setup

### Prerequisites

- Node.js 16+ and npm
- Git
- Code editor (VS Code recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd osh-western-university
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build Tailwind CSS**
   ```bash
   # Development (watch mode)
   npm run dev
   
   # Production (minified)
   npm run build
   ```

4. **Start local development server**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Or using Node.js
   npx serve
   
   # Or VS Code Live Server extension
   # Right-click on index.html and select "Open with Live Server"
   ```

5. **Open in browser**
   ```
   http://localhost:8000
   ```

## 📦 NPM Scripts

Add these to your `package.json`:

```json
{
  "scripts": {
    "dev": "tailwindcss -i ./src/input.css -o ./dist/output.css --watch",
    "build": "tailwindcss -i ./src/input.css -o ./dist/output.css --minify",
    "serve": "serve ."
  }
}
```

## 🎨 Customization

### Brand Colors

Edit `tailwind.config.js` to customize colors:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#0073e6',  // Main brand color
        // ... other shades
      }
    }
  }
}
```

### Fonts

Fonts are configured in `tailwind.config.js` and loaded via Google Fonts:
- **PT Sans** - Russian (Cyrillic)
- **Roboto** - English (Latin)
- **Noto Sans SC** - Chinese (Simplified)

### Content

Edit HTML files in respective language directories:
- `ru/` - Russian content
- `en/` - English content
- `zh/` - Chinese content

## 🌐 Deployment

### Recommended Hosting Options

1. **Netlify** (Recommended)
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Deploy
   netlify deploy --prod
   ```

2. **Vercel**
   ```bash
   # Install Vercel CLI
   npm install -g vercel
   
   # Deploy
   vercel --prod
   ```

3. **GitHub Pages**
   - Push to GitHub
   - Enable GitHub Pages in repository settings
   - Select branch and root directory

4. **Traditional Hosting**
   - Build production CSS: `npm run build`
   - Upload all files via FTP/SFTP
   - Point domain to hosting server

### Pre-Deployment Checklist

- [ ] Run production build: `npm run build`
- [ ] Test all pages in all languages
- [ ] Verify responsive design
- [ ] Check forms and interactive elements
- [ ] Validate HTML/CSS
- [ ] Test cross-browser compatibility
- [ ] Run Lighthouse audit (aim for 90+ score)
- [ ] Set up custom domain
- [ ] Configure SSL certificate

## 🧪 Testing

### Manual Testing

- **Languages**: Verify all pages load in RU/EN/ZH
- **Responsive**: Test on mobile (320px), tablet (768px), desktop (1024px+)
- **Browsers**: Chrome, Firefox, Safari, Edge
- **Interactive**: Menu, forms, language switcher, back-to-top button

### Performance Testing

```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit
lighthouse http://localhost:8000 --view
```

Target scores:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

## 📊 SEO

### Multilingual SEO

Each page includes `hreflang` tags:

```html
<link rel="alternate" hreflang="ru" href="https://osh-western.kg/ru/" />
<link rel="alternate" hreflang="en" href="https://osh-western.kg/en/" />
<link rel="alternate" hreflang="zh" href="https://osh-western.kg/zh/" />
<link rel="alternate" hreflang="x-default" href="https://osh-western.kg/ru/" />
```

### Structured Data

Add JSON-LD structured data for educational organization:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Osh-Western University",
  "url": "https://osh-western.kg",
  "logo": "https://osh-western.kg/images/logo.png",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "KG",
    "addressLocality": "Osh"
  }
}
</script>
```

## ♿ Accessibility

The site follows WCAG 2.1 AA guidelines:
- Semantic HTML
- ARIA labels (translated per language)
- Keyboard navigation
- Color contrast compliance
- Alt text for images (translated)
- Screen reader friendly

## 🔧 Maintenance

### Regular Updates

- Update content in all three languages simultaneously
- Keep dependencies updated: `npm update`
- Monitor site performance and analytics
- Regular backup of content

### Content Updates

1. Edit HTML files in language directories
2. Rebuild if CSS changes: `npm run build`
3. Test locally
4. Deploy to production

## 📚 Reference

This project is based on the analysis of [nodeloc/edu](https://github.com/nodeloc/edu) repository. See [docs/architecture.md](docs/architecture.md) for detailed comparison and adaptation strategy.

## 🤝 Contributing

1. Create a feature branch
2. Make changes
3. Test thoroughly (all languages, responsive, browsers)
4. Submit pull request with description

### Translation Guidelines

- Use native speakers for translations
- Maintain consistent terminology (use glossary)
- Adapt content culturally, not just linguistically
- Test text length in layouts

## 📄 License

Copyright © 2024 Osh-Western University. All rights reserved.

## 📞 Contact

- **Website**: https://osh-western.kg
- **Email**: info@osh-western.kg
- **Address**: Osh, Kyrgyz Republic

---

## 🗺️ Roadmap

### Phase 1: Foundation ✅
- [x] Architecture documentation
- [ ] Directory structure setup
- [ ] Tailwind configuration
- [ ] Base templates

### Phase 2: Content
- [ ] Translate core pages (RU/EN/ZH)
- [ ] Add Osh-Western content
- [ ] Image assets
- [ ] Branding

### Phase 3: Features
- [ ] Contact forms
- [ ] News/events section
- [ ] Faculty profiles
- [ ] Course catalog

### Phase 4: Launch
- [ ] Testing and QA
- [ ] Performance optimization
- [ ] SEO implementation
- [ ] Production deployment

### Future Enhancements
- [ ] Student portal
- [ ] Online application system
- [ ] CMS integration
- [ ] Virtual campus tour
- [ ] Live chat support

---

**For detailed technical documentation, see [docs/architecture.md](docs/architecture.md)**
