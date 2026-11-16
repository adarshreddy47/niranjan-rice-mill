
const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProduction ? "/niranjan-rice-mill" : "",
  assetPrefix: isProduction ? "/niranjan-rice-mill/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
