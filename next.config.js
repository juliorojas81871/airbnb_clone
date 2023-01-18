/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["jsonkeeper.com", "i.ibb.co", "a0.muscache.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoianVsaW9yb2phczgxODcxIiwiYSI6ImNsZDF3cjczeDAxeTYzcW85eWczbHVqdXEifQ.Kx3v02I0m_NfEyTA35i0Uw",
  },
};

module.exports = nextConfig;
