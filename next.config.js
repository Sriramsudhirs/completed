/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com',
      }
    ],
    unoptimized: true
  },
  webpack: (config) => {
    config.resolve.fallback = { 
      ...config.resolve.fallback,
      "tunnel-agent": false,
      "sharp": false
    };
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  }
};

module.exports = nextConfig;