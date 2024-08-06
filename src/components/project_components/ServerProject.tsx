'use server'

import { fetchImageWithPlaceholder, preload } from "@/lib/actions/images/images.action";
import ClientProject from "./ClientProject";




export default async function ServerProject() {

     // Preload the image data
    preload('education'),
    preload('agriculture'),
    preload('water'),
    preload('fishing'),
    preload('roads'),
    preload('market-life'),
    preload('education1'),
    preload('farming1'),
    preload('water1'),
    preload('fishing1'),
    preload('road1'),
    preload('market1'),
    preload('gberefu1'),
    preload('blackout'),
    preload('education'),
    preload('teach')



    const [
      { src: gallerysrc1, blurData: galleryblurData1 },
      { src: gallerysrc2, blurData: galleryblurData2 },
      { src: gallerysrc3, blurData: galleryblurData3 },
      { src: gallerysrc4, blurData: galleryblurData4 },
      { src: gallerysrc5, blurData: galleryblurData5 },
      { src: gallerysrc6, blurData: galleryblurData6 },
      { src: gallerysrc7, blurData: galleryblurData7 },
      { src: gallerysrc8, blurData: galleryblurData8 },
      { src: gallerysrc9, blurData: galleryblurData9 },
      { src: gallerysrc10, blurData: galleryblurData10 },
      { src: gallerysrc11, blurData: galleryblurData11 },
      { src: gallerysrc12, blurData: galleryblurData12 },
      { src: outlinesrc1, blurData: outlineblurData1 },
      { src: outlinesrc2, blurData: outlineblurData2 },
      { src: outlinesrc3, blurData: outlineblurData3 },
      { src: outlinesrc4, blurData: outlineblurData4 },
    ] = await Promise.all([
        fetchImageWithPlaceholder('education'),
        fetchImageWithPlaceholder('agriculture'),
        fetchImageWithPlaceholder('water'),
        fetchImageWithPlaceholder('fishing'),
        fetchImageWithPlaceholder('roads'),
        fetchImageWithPlaceholder('market-life'),
        fetchImageWithPlaceholder('education1'),
        fetchImageWithPlaceholder('farming1'),
        fetchImageWithPlaceholder('water1'),
        fetchImageWithPlaceholder('fishing1'),
        fetchImageWithPlaceholder('road1'),
        fetchImageWithPlaceholder('market1'),
        fetchImageWithPlaceholder('gberefu1'),
        fetchImageWithPlaceholder('blackout'),
        fetchImageWithPlaceholder('education'),
        fetchImageWithPlaceholder('teach'),

    ]);
    return (<ClientProject
        gallerysrc1={gallerysrc1}
        galleryblurData1={galleryblurData1}
        gallerysrc2={gallerysrc2}
        galleryblurData2={galleryblurData2}
        gallerysrc3={gallerysrc3}
        galleryblurData3={galleryblurData3}
        gallerysrc4={gallerysrc4}
        galleryblurData4={galleryblurData4}
        gallerysrc5={gallerysrc5}
        galleryblurData5={galleryblurData5}
        gallerysrc6={gallerysrc6}
        galleryblurData6={galleryblurData6}
        gallerysrc7={gallerysrc7}
        galleryblurData7={galleryblurData7}
        gallerysrc8={gallerysrc8}
        galleryblurData8={galleryblurData8}
        gallerysrc9={gallerysrc9}
        galleryblurData9={galleryblurData9}
        gallerysrc10={gallerysrc10}
        galleryblurData10={galleryblurData10}
        gallerysrc11={gallerysrc11}
        galleryblurData11={galleryblurData11}
        gallerysrc12={gallerysrc12}
        galleryblurData12={galleryblurData12}
       outlinesrc1={outlinesrc1}
       outlineblurData1={outlineblurData1}
       outlinesrc2={outlinesrc2}
       outlineblurData2={outlineblurData2}
       outlinesrc3={outlinesrc3}
       outlineblurData3={outlineblurData3}
       outlinesrc4={outlinesrc4}
       outlineblurData4={outlineblurData4}
    
    />)
}