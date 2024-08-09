import { withPayload } from '@payloadcms/next/withPayload'
import withPlaiceholder from "@plaiceholder/next";
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      ppr: 'incremental',
        serverActions: {
          bodySizeLimit: '2mb',
        },
    },
    // eslint: {
    //     ignoreDuringBuilds: true
    // },

};

const combinedConfig = withPayload(withPlaiceholder(nextConfig));

export default combinedConfig;