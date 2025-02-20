import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'i.redd.it', 'cdn.mos.cms.futurecdn.net', 'picsum.photos', 'i.pinimg.com', 'avatars.githubusercontent.com'],
  }
}
export default nextConfig
