// src/components/contact/ContactServer.tsx
'use server';

import { getPayload } from 'payload'; //this could be used instaead of getPayloadHMR
import { getPayloadHMR } from '@payloadcms/next/utilities'; //this could be used instaead of getPayload
import configPromise from '@payload-config';
import { getPlaiceholder } from 'plaiceholder';
import ClientContact from './ClientContact';
import { fetchImageWithPlaceholder } from "@/lib/actions/images/images.action";

  
export default async function ServerContact() {
  const [
    { src: src, blurData: blurData }
] = await Promise.all([
    fetchImageWithPlaceholder('office2'),
  ]);
  

  return(<ClientContact src={src} blurData={blurData} />)}
