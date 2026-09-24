import type { NextConfig } from 'next';
import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

const config: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/docs/games/tutorial/:path*',
        destination: '/docs/tutorial/:path*',
        permanent: true,
      },
      {
        source: '/docs/games/tutorial',
        destination: '/docs/tutorial',
        permanent: true,
      },
    ];
  },
};

export default withMDX(config);