/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.exemplo.com",
      "images.unsplash.com",
      "i.imgur.com",
      "media.discordapp.net"
    ],
  },
};

module.exports = nextConfig;
