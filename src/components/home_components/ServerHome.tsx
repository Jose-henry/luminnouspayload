'use server'

import { fetchImageWithPlaceholder, preload } from "@/lib/actions/images/images.action";
import Hero from "./HeroSection/hero";
import About from "./AboutSection/about";
import Contribute from "./ContributeSection/contribute";
import Improve from "./ImproveSection/improve";
import Update from "./UpdateSection/update";
import Mission from "./MissionStatement/mission";
import Impact from "./ImpactSection/impact";
import PageText2 from "../PageText/pageText2";
import dynamic from "next/dynamic"

// const Hero = dynamic(() => import('./HeroSection/hero'), { ssr: true });
// const About = dynamic(() => import('./AboutSection/about'), { ssr: true });
// const Contribute = dynamic(() => import('./ContributeSection/contribute'), { ssr: true });
// const Improve = dynamic(() => import('./ImproveSection/improve'), { ssr: true });
// const Update = dynamic(() => import('./UpdateSection/update'), { ssr: true });
// const Mission = dynamic(() => import('./MissionStatement/mission'), { ssr: false });
// const Impact = dynamic(() => import('./ImpactSection/impact'), { ssr: false });
// const PageText2 = dynamic(() => import('../PageText/pageText2'), { ssr: false });


export default async function ServerHome() {


  //revalidateImage('office2'); //could be used to revalidate images based on their alt tag, but could cause heavy load on server
  
   // Preload the image data
   preload('bg1');
   preload('bg2');
   preload('bg3');
   preload('yellow');
   preload('yellow2');
   preload('kero');
   preload('love1');
   preload('love2');
   preload('love3');
   preload('post1');
   preload('post2');
   preload('post3');


  const [
    { src: herosrc1, blurData: heroblurData1 },
    { src: herosrc2, blurData: heroblurData2 },
    { src: herosrc3, blurData: heroblurData3 },
    { src: aboutsrc1, blurData: aboutblurData1 },
    { src: aboutsrc2, blurData: aboutblurData2 },
    { src: contributesrc1, blurData: contributeblurData1 },
    { src: improvesrc1, blurData: improveblurData1 },
    { src: improvesrc2, blurData: improveblurData2 },
    { src: improvesrc3, blurData: improveblurData3 },
    { src: updatesrc1, blurData: updateblurData1 },
    { src: updatesrc2, blurData: updateblurData2 },
    { src: updatesrc3, blurData: updateblurData3 },
] = await Promise.all([
    fetchImageWithPlaceholder('bg1'),
    fetchImageWithPlaceholder('bg2'),
    fetchImageWithPlaceholder('bg3'),
    fetchImageWithPlaceholder('yellow'),
    fetchImageWithPlaceholder('yellow2'),
    fetchImageWithPlaceholder('kero'),
    fetchImageWithPlaceholder('love1'),
    fetchImageWithPlaceholder('love2'),
    fetchImageWithPlaceholder('love3'),
    fetchImageWithPlaceholder('post1'),
    fetchImageWithPlaceholder('post2'),
    fetchImageWithPlaceholder('post3'),
  ]);

  return (
    <div className="relative w-full bg-[#ffe76a]">
      <Hero 
      herosrc1={herosrc1}
      herosrc2={herosrc2}
      herosrc3={herosrc3}
      heroblurData1={heroblurData1}
      heroblurData2={heroblurData2}
      heroblurData3={heroblurData3}
      />
      <About
       aboutsrc1={aboutsrc1}
       aboutsrc2={aboutsrc2}
       aboutblurData1={aboutblurData1}
       aboutblurData2={aboutblurData2}

      />
      <Mission/>
      <Impact/>
      <Contribute
       contributesrc1={contributesrc1}
       contributeblurData1={contributeblurData1}
      />
      <PageText2/>
      <Improve
       improvesrc1={improvesrc1}
       improvesrc2={improvesrc2}
       improvesrc3={improvesrc3}
       improveblurData1={improveblurData1}
       improveblurData2={improveblurData2}
       improveblurData3={improveblurData3}
      
      />
      <Update
      updatesrc1={updatesrc1}
      updatesrc2={updatesrc2}
      updatesrc3={updatesrc3}
      updateblurData1={updateblurData1}
      updateblurData2={updateblurData2}
      updateblurData3={updateblurData3}
      />
    </div>
  );
}