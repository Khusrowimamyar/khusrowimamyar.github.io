import type { NextConfig } from 'next';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, '') || '';
const config: NextConfig = { output: 'export', outputFileTracingRoot: process.cwd(), trailingSlash: true, basePath, images: { unoptimized: true }, poweredByHeader: false };
export default config;
