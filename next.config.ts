import type { NextConfig } from "next"
import nextPWA from "next-pwa"

const withPWA = nextPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
})

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, 
  },
  reactStrictMode: true,
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: { icon: true },
          },
        ],
        as: "*.js",
      },
    },
    resolveExtensions: [".tsx", ".ts", ".jsx", ".js", ".json", ".svg"],
  },
}

export default withPWA(nextConfig)
