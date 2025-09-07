import type { NextConfig } from "next"
import nextPWA from "next-pwa"

const withPWA = nextPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
})

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  // other Next.js config options
}

export default withPWA(nextConfig)
