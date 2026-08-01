/**
 * app/robots.js
 * Next.js automatically serves this as /robots.txt
 */
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
    ],
    sitemap: 'https://makeupstudio-nextjs.vercel.app/sitemap.xml',
    host: 'https://makeupstudio-nextjs.vercel.app',
  };
}
