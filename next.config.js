/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // next.js 14 — local /public images work without any config.
    // remotePatterns is only needed for external (http/https) image sources.
    // localPatterns is a Next.js 15+ feature and has no effect here.
    unoptimized: false,
  },
};

module.exports = nextConfig;
