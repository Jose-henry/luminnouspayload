import type { CollectionConfig } from 'payload';
import path from 'path';
import { revalidateTag } from 'next/cache';

// Helper function to extract the base name without the extension
const getFileNameWithoutExtension = (fileName: string): string => {
  return path.parse(fileName).name;
};

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      admin: {
        readOnly: true,
      },
    },
  ],
  upload: true,
  hooks: {
    beforeValidate: [
      async ({ data = {}, req }) => {
        if (req.file) {
          // Automatically set the 'alt' field
          data.alt = getFileNameWithoutExtension(req.file.name);

          console.log('Alt Text:', data.alt);  // Debugging line
        } else {
          console.log('No file found in req.file');  // Debugging line
        }
      },
    ],
    afterChange: [
      async ({ doc }) => {
        // Trigger revalidation for the cache tag based on 'alt' field
        if (doc.alt) {
          revalidateTag(doc.alt);  // Use 'alt' as the cache tag
        }
      },
    ],
  },
};
