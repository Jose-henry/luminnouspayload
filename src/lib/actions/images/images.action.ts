'use server';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { getPlaiceholder } from 'plaiceholder';
import { cache } from 'react';

export const preload = (alt: string) => {
  void fetchImageWithPlaceholder(alt);
};

export const fetchImageWithPlaceholder = cache(async (alt: string) => {
  try {
    const payload = await getPayloadHMR({ config: configPromise });
    const supabaseBaseUrl = process.env.NEXT_PUBLIC_API_URL;
    const data = await payload.find({
      collection: 'media',
      where: { alt: { equals: alt } },
    });

    if (data.docs && data.docs.length > 0) {
      const firstDoc = data.docs[0];
      if (firstDoc.url) {
        const fileName = firstDoc.url.split('/').pop();  // Extract the file name from the URL
        const src = `${supabaseBaseUrl}/${fileName}`; // Construct the new Supabase URL
        
        const buffer = await fetch(src).then(async (res) =>
          Buffer.from(await res.arrayBuffer())
        );
        const { base64 } = await getPlaiceholder(buffer);

        //console.log({ src, blurData: base64 });
        return { src, blurData: base64 };
      } else {
        throw new Error('No valid URL found in the document.');
      }
    } else {
      throw new Error(`No media found with the specified alt text: ${alt}`);
    }
  } catch (err: any) {
    console.error(`Error fetching image with alt ${alt}:`, err.message);
    return { src: '', blurData: '' };
  }
});
