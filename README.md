# Gyanelle LLC Website

Professional electrical services, consulting, facility management, and logistics solutions in Columbus, Ohio.

## Clean URL Routing System

This website uses a simple folder-based structure for clean URLs. Each page has its own folder with an `index.html` file, making routing straightforward and eliminating the need for complex URL rewriting.

**Clean URLs:**
- `/` (Home)
- `/about/`
- `/services/`
- `/contact/`

## Simple Folder Structure

The website uses a clean folder-based approach where each page has its own directory:

```
gyanelle_llc/
├── index.html              # Homepage
├── about/
│   └── index.html          # About page
├── services/
│   └── index.html          # Services page
├── contact/
│   └── index.html          # Contact page
├── 404.html               # Error page
├── .htaccess              # Apache configuration
├── css/                   # Stylesheets
├── js/                    # JavaScript files
├── img/                   # Images
└── lib/                   # Third-party libraries
```

## URL Mapping

| Clean URL | Folder/File | Description |
|-----------|-------------|-------------|
| `/` | `index.html` | Homepage |
| `/about/` | `about/index.html` | About Us page |
| `/services/` | `services/index.html` | Services page |
| `/contact/` | `contact/index.html` | Contact page |
| Any other URL | `404.html` | 404 Error page |

## Features

- **Clean URLs**: No .html extensions in the browser address bar
- **Simple Structure**: Each page has its own folder
- **SEO Friendly**: Better for search engine optimization
- **User Friendly**: Easier to remember and share URLs
- **Professional**: More professional appearance
- **No Complex Routing**: Uses standard web server folder structure

## How It Works

1. **User visits** `/about/` 
2. **Web server automatically** serves `about/index.html`
3. **User visits** `/services/` 
4. **Web server automatically** serves `services/index.html`
5. **Any invalid URL** shows the custom 404 page

## Deployment

### Apache Hosting
1. Upload all files to your web server
2. The `.htaccess` file handles any additional routing needs
3. Works immediately with standard web hosting

### Static Hosting (Netlify, Vercel, etc.)
1. Upload all files to your static hosting provider
2. The folder structure works natively
3. No additional configuration needed

### Any Web Server
- Works with Apache, Nginx, IIS, or any web server
- Standard folder structure is universally supported
- No special server requirements

## Benefits of Folder Structure

- ✅ **Universal Compatibility** - Works on any web server
- ✅ **Simple Maintenance** - Easy to understand and modify
- ✅ **No Dependencies** - No special modules or configurations needed
- ✅ **Scalable** - Easy to add new pages by creating new folders
- ✅ **Professional URLs** - Clean, SEO-friendly URLs
- ✅ **Standard Practice** - Follows web development best practices

## Contact

For questions about the website or services, contact Gyanelle LLC:
- **Phone**: +1 (614) 779-6860
- **Email**: info@gyanelle.com
- **Location**: Columbus, Ohio
- **Hours**: Mon-Fri | 9 AM - 5 PM ET 