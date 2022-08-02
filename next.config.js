/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: [
        'images.unsplash.com',
        'upload.wikimedia.org',
        'images.squarespace-cdn.com',
        'press.etc.cmu.edu',
        'avatars.githubusercontent.com'
    ],
    },
};
  
module.exports = nextConfig;