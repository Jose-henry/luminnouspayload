import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

import { Users } from './collections/Users';
import { Media } from './collections/Media';
import { s3Storage } from '@payloadcms/storage-s3';
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Determine whether to use Vercel Blob Storage
const useVercelBlobStorage = !!process.env.BLOB_READ_WRITE_TOKEN;

// Determine whether to use S3 Storage
const useS3Storage = !!process.env.S3_BUCKET;

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    ...(useVercelBlobStorage ? [
      vercelBlobStorage({
        collections: {
          [Media.slug]: {
            disableLocalStorage: true,
          },
        },
        token: process.env.BLOB_READ_WRITE_TOKEN || '',
      }),
    ] : []),
    ...(useS3Storage ? [
      s3Storage({
        collections: {
          [Media.slug]: {
            prefix: 'media',
            disableLocalStorage: true,
          },
        },
        bucket: process.env.S3_BUCKET || '',
        config: {
          credentials: {
            accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
            secretAccessKey: process.env.S3_SECRET_KEY || '',
          },
          region: process.env.S3_REGION || '',
          endpoint: process.env.S3_ENDPOINT || '',
          forcePathStyle: true,
        },
      }),
    ] : []),
    // Fallback to local storage if neither Vercel Blob nor S3 is used
    ...(useVercelBlobStorage || useS3Storage ? [] : [
      // Local storage configuration for Media collection: plugins: []
    ]),
  ],
});
