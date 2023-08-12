/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Cooey Club',
    description: 'Application Registry.',
    icon: '/public/logo.gif',
    listUrl: 'https://registry.cooey.club/',
    contactUrl: 'https://cooey.club/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
