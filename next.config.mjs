// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.dailynewzmail.com"], // 👈 whitelist your API domain
  },
};

export default nextConfig;
