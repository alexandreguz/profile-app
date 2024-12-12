/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/profile-app" : "",
  assetPrefix: isProd ? "/profile-app/" : "",
};

export default nextConfig;
