/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow local images served from /public
    localPatterns: [
      {
        pathname: '/images/**',
      },
    ],
  },
};

module.exports = nextConfig;
