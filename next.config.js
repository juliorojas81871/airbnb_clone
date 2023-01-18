/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["jsonkeeper.com", "i.ibb.co", "a0.muscache.com"],
  },
};

module.exports = nextConfig;
