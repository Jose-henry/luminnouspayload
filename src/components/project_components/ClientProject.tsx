'use client';

import React, { useEffect } from 'react';

// import Gallery from "@/components/project_components/gallery_component/gallery";
import Intro from "@/components/project_components/intro_component/intro";
// import Outline from "@/components/project_components/project_outline/outline";
import dynamic from 'next/dynamic';


const Gallery = dynamic(() => import('@/components/project_components/gallery_component/gallery'), {
  ssr: false
})

const Outline = dynamic(() => import('@/components/project_components/project_outline/outline'), {
  ssr: false
})

// const Intro = dynamic(() => import('@/components/project_components/intro_component/intro'), {
//   ssr: false
// })

interface clientProps {
  gallerysrc1: string; 
  galleryblurData1: string;
  gallerysrc2: string; 
  galleryblurData2: string;
  gallerysrc3: string; 
  galleryblurData3: string;
  gallerysrc4: string; 
  galleryblurData4: string;
  gallerysrc5: string; 
  galleryblurData5: string;
  gallerysrc6: string; 
  galleryblurData6: string;
  gallerysrc7: string; 
  galleryblurData7: string;
  gallerysrc8: string; 
  galleryblurData8: string;
  gallerysrc9: string; 
  galleryblurData9: string;
  gallerysrc10: string; 
  galleryblurData10: string;
  gallerysrc11: string; 
  galleryblurData11: string;
  gallerysrc12: string; 
  galleryblurData12: string;
  outlinesrc1: string; 
  outlineblurData1: string;
  outlinesrc2: string; 
  outlineblurData2: string;
  outlinesrc3: string; 
  outlineblurData3: string;
  outlinesrc4: string; 
  outlineblurData4: string;
}

export default function ClientProject({
   gallerysrc1,
   galleryblurData1,
   gallerysrc2,
   galleryblurData2,
   gallerysrc3,
   galleryblurData3,
   gallerysrc4,
   galleryblurData4,
   gallerysrc5,
   galleryblurData5,
   gallerysrc6,
   galleryblurData6,
   gallerysrc7,
   galleryblurData7,
   gallerysrc8,
   galleryblurData8,
   gallerysrc9,
   galleryblurData9,
   gallerysrc10,
   galleryblurData10,
   gallerysrc11,
   galleryblurData11,
   gallerysrc12,
   galleryblurData12,
   outlinesrc1,
   outlineblurData1,
   outlinesrc2,
   outlineblurData2,
   outlinesrc3,
   outlineblurData3,
   outlinesrc4,
   outlineblurData4,
}:clientProps) {
  
    useEffect(() => {
      const handleHashChange = () => {
        const hash = window.location.hash;
        if (hash === "#project") {
          const donateElement = document.getElementById("project-section");
          if (donateElement) {
            donateElement.scrollIntoView({ behavior: "smooth" });
          }
        }
      };
  
      // Initial check when the component mounts
      handleHashChange();
  
      // Add event listener for hash changes
      window.addEventListener("hashchange", handleHashChange);
  
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("hashchange", handleHashChange);
      };
    }, []);
  
    return (
        <div className="w-full mt-[73px]">
          <Intro/>
          <Gallery
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
          />
          <div id="project-section">
             <Outline
             outlinesrc1={outlinesrc1}
             outlineblurData1={outlineblurData1}
             outlinesrc2={outlinesrc2}
             outlineblurData2={outlineblurData2}
             outlinesrc3={outlinesrc3}
             outlineblurData3={outlineblurData3}
             outlinesrc4={outlinesrc4}
             outlineblurData4={outlineblurData4}
             />
          </div>
        </div>
    );
  }
