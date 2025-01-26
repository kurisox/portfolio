import type { NextConfig } from "next";

const basepath = process.env.NEXT_PUBLIC_GITHUB_ACTIONS ? "/portfolio" : "";



const nextConfig: NextConfig = {
  basePath: basepath,
};

export default nextConfig;
