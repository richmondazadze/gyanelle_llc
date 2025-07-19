# Gyanelle LLC Website

Professional electrical services, consulting, facility management, and logistics solutions in Columbus, Ohio.

## Clean URL Routing System

This website has been configured with clean URLs that remove the `.html` extensions. Users can now access pages using clean URLs like:
- `/` (Home)
- `/about`
- `/services`
- `/contact`

## Simple Apache Setup

The `.htaccess` file provides simple URL rewriting without any additional servers or dependencies.

**Requirements:**
- Apache server with mod_rewrite enabled
- Place all files in your web root directory

**Features:**
- ✅ Clean URLs without .html extensions
- ✅ Automatic redirects from .html URLs to clean URLs
- ✅ Custom 404 error page
- ✅ Security headers
- ✅ Gzip compression
- ✅ Browser caching

## File Structure

```
gyanelle_llc/
├── index.html          # Homepage
├── about.html          # About page
├── services.html       # Services page
├── contact.html        # Contact page
├── 404.html           # Error page
├── .htaccess          # Apache URL rewriting
├── css/               # Stylesheets
├── js/                # JavaScript files
├── img/               # Images
└── lib/               # Third-party libraries
```

## URL Mapping

| Clean URL | File | Description |
|-----------|------|-------------|
| `/` | `index.html` | Homepage |
| `/about` | `about.html` | About Us page |
| `/services` | `services.html` | Services page |
| `/contact` | `contact.html` | Contact page |
| Any other URL | `404.html` | 404 Error page |

## Features

- **Clean URLs**: No .html extensions in the browser address bar
- **SEO Friendly**: Better for search engine optimization
- **User Friendly**: Easier to remember and share URLs
- **Professional**: More professional appearance
- **Consistent**: All internal links updated to use clean URLs
- **Simple**: No additional servers or dependencies required

## Deployment

### Apache Hosting
1. Upload all files to your web server
2. Ensure mod_rewrite is enabled
3. The `.htaccess` file will handle URL rewriting automatically

### Static Hosting (Netlify, Vercel, etc.)
1. Upload all files to your static hosting provider
2. Configure redirects in your hosting provider's settings:
   - `/about` → `/about.html`
   - `/services` → `/services.html`
   - `/contact` → `/contact.html`
   - `/*` → `/404.html` (for 404 errors)

## How It Works

The `.htaccess` file uses Apache's mod_rewrite to:
1. **Remove .html extensions** from URLs automatically
2. **Redirect old URLs** to clean URLs (301 redirects)
3. **Handle 404 errors** with your custom error page
4. **Optimize performance** with compression and caching

## Contact

For questions about the website or services, contact Gyanelle LLC:
- **Phone**: +1 (614) 779-6860
- **Email**: info@gyanelle.com
- **Location**: Columbus, Ohio
- **Hours**: Mon-Fri | 9 AM - 5 PM ET 