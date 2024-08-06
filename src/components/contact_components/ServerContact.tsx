'use server';

// import { getPayload } from 'payload'; //this could be used instaead of getPayloadHMR
// import { getPayloadHMR } from '@payloadcms/next/utilities'; //this could be used instaead of getPayload
// import configPromise from '@payload-config';
// import { getPlaiceholder } from 'plaiceholder';
import ClientContact from './ClientContact';
import { fetchImageWithPlaceholder, preload } from "@/lib/actions/images/images.action";


  
export default async function ServerContact() {
  // Preload the image data
  preload('office2');

  const [
    { src: src, blurData: blurData }
  ] = await Promise.all([
    fetchImageWithPlaceholder('office2'),
  ]);

  return(<ClientContact src={src} blurData={blurData} />);
}