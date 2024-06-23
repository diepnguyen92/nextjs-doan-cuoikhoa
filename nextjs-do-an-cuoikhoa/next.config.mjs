/** @type {import('next').NextConfig} */
const nextConfig = {
   images:{
    remotePatterns: [
        {
            protocol: "https",
            hostname: "traicaytonyteo.com"
        }
    ]
   }
};

export default nextConfig;
