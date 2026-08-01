/**
 * app/robots.js
 * Next.js automatically serves this as /robots.txt
 * Spec: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */
export default function robots() {
  return {
    rules: [
      {
        // Allow all crawlers full access
        userAgent: '*',
        allow: '/',
        // Block internal Next.js routes and any API endpoints
        disallow: ['/api/', '/_next/'],
      },
      {
        // Prevent GPTBot from training on site content
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        // Prevent ChatGPT-User crawler
        userAgent: 'ChatGPT-User',
        disallow: '/',
      },
      {
        // CCBot (Common Crawl — used for AI training datasets)
        userAgent: 'CCBot',
        disallow: '/',
      },
    ],
    // XML sitemap — consumed by crawlers
    sitemap: 'https://sisiro.co/sitemap.xml',
    // HTML sitemap — human-readable page listing all URLs
    // Note: robots.txt doesn't have a standard field for HTML sitemaps,
    // but listing it as a comment-style entry is widely accepted.
    host: 'https://sisiro.co',
  };
}
