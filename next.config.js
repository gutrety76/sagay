/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com', "asset.cloudinary.com", "ik.imagekit.io"]
  }
}

module.exports = nextConfig
