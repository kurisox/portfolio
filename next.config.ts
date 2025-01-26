import type { NextConfig } from "next";

const basepath = process.env.GITHUB_ACTIONS ? "/nextjs-github-pages" : "";



const nextConfig: NextConfig = {
  basePath: basepath,
};

export default nextConfig;
