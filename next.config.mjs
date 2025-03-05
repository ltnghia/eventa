/** @type {import('next').NextConfig} */

const nextConfig = {
    output: "export",
    reactStrictMode: true,
    images: { 
        unoptimized: true,
    },
    basePath: '/eventa'
};

export default nextConfig;
