/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shikimori.one',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
