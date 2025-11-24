/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    domains: ['media.istockphoto.com', 'media.giphy.com', 'media.tenor.com'],
    // বা আপনার GIF hosting domain
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // সব domains allow করতে
        pathname: '**',
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
