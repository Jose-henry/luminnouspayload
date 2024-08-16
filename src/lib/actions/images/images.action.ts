'use server';

import { getPayloadHMR } from '@payloadcms/next/utilities';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { getPlaiceholder } from 'plaiceholder';
import NodeCache from 'node-cache'; // Import NodeCache

// Cache with a 1-minute TTL (Time To Live)
const imageCache = new NodeCache({ stdTTL: 60 });

// Define the return type for fetchImageWithPlaceholder
interface ImageData {
  src: string;
  blurData: string;
}

// Preload function to trigger image loading
export const preload = (alt: string) => {
  void fetchImageWithPlaceholder(alt);
};

// Function to fetch image with placeholder, cached for 1 minute
export const fetchImageWithPlaceholder = async (alt: string): Promise<ImageData> => {
  // Check cache for existing data
  const cachedData = imageCache.get(alt);
  if (cachedData) {
    return cachedData as ImageData; // Return cached data if available
  }

  try {
    const payload = await getPayload({ config: configPromise });
    const supabaseBaseUrl = process.env.NEXT_PUBLIC_API_URL;
    const data = await payload.find({
      collection: 'media',
      where: { alt: { equals: alt } },
    });

    if (data.docs && data.docs.length > 0) {
      const firstDoc = data.docs[0];
      if (firstDoc.url) {
        const fileName = firstDoc.url.split('/').pop(); // Extract the file name from the URL
        // Append a cache-busting query parameter
        const src = `${supabaseBaseUrl}/${fileName}?timestamp=${new Date().getTime()}`;
        
        // Log the URL to check what is being fetched
        console.log('Fetching from:', src);
        
        // Fetch the image buffer
        const buffer = await fetch(src).then(async (res) => {
          console.log('Response headers:', res.headers); // Log headers to inspect caching
          return Buffer.from(await res.arrayBuffer());
        });

        // Generate placeholder using Plaiceholder
        const { base64 } = await getPlaiceholder(buffer);

        // Prepare the result object
        const result: ImageData = { src, blurData: base64 };

        // Cache the result for 1 minute
        imageCache.set(alt, result);

        return result;
      } else {
        throw new Error('No valid URL found in the document.');
      }
    } else {
      throw new Error(`No media found with the specified alt text: ${alt}`);
    }
  } catch (err: any) {
    console.error(`Error fetching image with alt ${alt}:`, err.message);
    return { src: '', blurData: '' }; // Return empty data on error
  }
};
