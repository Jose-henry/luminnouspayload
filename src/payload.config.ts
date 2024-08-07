// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { s3Storage } from '@payloadcms/storage-s3'
//import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
//import { Post } from './collections/post'


const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media /* , Post */],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [s3Storage({ 
    collections: { 
      [Media.slug]: true,
      'media': {
        prefix: 'media',
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
      // ... Other S3 configuration options
    },
   }),
  ], /*  process.env.BLOB_READ_WRITE_TOKEN
  ? [
      vercelBlobStorage({
        collections: {
          [Media.slug]: true,
        },
        token: process.env.BLOB_READ_WRITE_TOKEN || '',
      }),
    ]
  :  [], */ //you can have more than one storage plugin blob and/or aws and/or supabase etc
  //now i dont need the media folder anymore
})
