/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/home-2', // Redirect root URL to /home-2
          permanent: false, // Use false for a temporary redirect (302)
        },
      ];
    },
  };
  
  export default nextConfig;
  