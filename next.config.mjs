/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "api.dailynewzmail.com",
      "66.116.198.221",
      "api.shopsmaart.com",
      "localhost",
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
