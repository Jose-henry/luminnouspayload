'use server';

import ClientAbout from "@/components/about_components/ClientAbout";
import { fetchImageWithPlaceholder } from "@/lib/actions/images/images.action";

export default async function ServerAbout() {
  const [
    { src: donatesrc, blurData: donateblurData },
    { src: projectsrc1, blurData: projectblurData1 },
    { src: projectsrc2, blurData: projectblurData2 },
    { src: projectsrc3, blurData: projectblurData3 },
    { src: absrc1, blurData: abblurData1 },
    { src: absrc2, blurData: abblurData2 },
    { src: absrc3, blurData: abblurData3 },
    { src: absrc4, blurData: abblurData4 },
] = await Promise.all([
    fetchImageWithPlaceholder('child'),
    fetchImageWithPlaceholder('blackout'),
    fetchImageWithPlaceholder('pretty'),
    fetchImageWithPlaceholder('teach'),
    fetchImageWithPlaceholder('rural1'),
    fetchImageWithPlaceholder('rural2'),
    fetchImageWithPlaceholder('rural3'),
    fetchImageWithPlaceholder('rural4'),
  ]);

  return (
    <ClientAbout
      projectsrc1={projectsrc1}
      projectsrc2={projectsrc2}
      projectsrc3={projectsrc3}
      projectblurData1={projectblurData1}
      projectblurData2={projectblurData2}
      projectblurData3={projectblurData3}
      donatesrc={donatesrc}
      donateblurData={donateblurData}
      absrc1={absrc1} 
      abblurData1={abblurData1}
      absrc2={absrc2} 
      abblurData2={abblurData2}
      absrc3={absrc3} 
      abblurData3={abblurData3}
      absrc4={absrc4} 
      abblurData4={abblurData4}
    />
  );
}
