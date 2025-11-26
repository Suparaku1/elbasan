/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: process.env.NODE_ENV === 'production' ? false : true,
  },
  experimental: {
    esmExternals: 'loose'
  }
}

module.exports = nextConfig