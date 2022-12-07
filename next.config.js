/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["jsonkeeper.com", "i.ibb.co"],
  },
};

module.exports = nextConfig;
