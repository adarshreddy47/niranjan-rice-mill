
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/niranjan-rice-mill",
  assetPrefix: "/niranjan-rice-mill/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
