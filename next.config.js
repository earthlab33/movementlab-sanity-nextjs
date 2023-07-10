/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
    domains: [
      "cdn.sanity.io",
      "d1hd3rokkj5cpu.cloudfront.net",
      "via.placeholder.com",
      "d1coydiqa46lxm.cloudfront.net",
      "v5.airtableusercontent.com",
      "movementlab.dance",
    ],
  },
};
