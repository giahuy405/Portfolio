/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  head: {
    link: {
      rel: 'icon',
      href: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Eo_circle_blue_letter-p.svg/480px-Eo_circle_blue_letter-p.svg.png',  
      type: 'image/x-icon',
    },
  },
  images: {
    domains: ['cybersoft.edu.vn'],
  },
}

console.log('Next.js config:', nextConfig)

module.exports = nextConfig
