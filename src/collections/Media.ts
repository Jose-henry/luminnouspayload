import type { CollectionConfig } from 'payload';
import path from 'path';

const getFileNameWithoutExtension = (fileName: string): string => {
  // Extract the base name without the extension and the dot
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
  },
};
