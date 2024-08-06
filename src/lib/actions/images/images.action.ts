'use server';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import {getPayload} from 'payload'
import configPromise from '@payload-config';
import { getPlaiceholder } from 'plaiceholder';

export const fetchImageWithPlaceholder = async (alt: string) => {
  try {
    const payload = await getPayload({ config: configPromise });
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const data = await payload.find({
      collection: 'media',
      where: { alt: { equals: alt } },
    });

    if (data.docs && data.docs.length > 0) {
      const firstDoc = data.docs[0]
      if (firstDoc.url) {
        const src = `${apiUrl}${firstDoc.url.startsWith('/') ? '' : '/'}${firstDoc.url}`;
        const buffer = await fetch(src).then(async (res) =>
          Buffer.from(await res.arrayBuffer())
        );
        const { base64 } = await getPlaiceholder(buffer);

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
};

