/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure static files like sitemap.xml and robots.txt are served correctly
  poweredByHeader: false,
  reactStrictMode: true,
}

module.exports = nextConfig
