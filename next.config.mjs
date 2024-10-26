/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  reactStrictMode: false,
  env: {
    API_SSR_PATH: process.env.API_SSR_PATH,
  },
};

export default nextConfig;
