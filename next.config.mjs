/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  env: {
    BASE_URL: process.env.BASE_URL,
    STORE_ENCRYPT_SECRET_KEY: process.env.STORE_ENCRYPT_SECRET_KEY,
  },
};

export default nextConfig;
