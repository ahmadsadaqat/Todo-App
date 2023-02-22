/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['bcrypt'],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
