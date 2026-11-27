/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/webp'],
    qualities: [75],
    deviceSizes: [384, 640, 750, 828, 1080, 1200, 1600],
    minimumCacheTTL: 2678400,
  },
}

export default nextConfig
