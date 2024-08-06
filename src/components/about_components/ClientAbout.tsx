'use client';
import React, { useEffect } from 'react';
import Project from "@/components/about_components/Projects/project";
import AB from "@/components/about_components/about_mission/ab";
import Donate from "@/components/about_components/donate/donate";
import Story from "@/components/about_components/story/story";
import Testimonial from "@/components/about_components/testimonial_section/testimonial";

interface aboutProps{
  projectsrc1: string; 
  projectsrc2: string; 
  projectsrc3: string; 
  projectblurData1:string;
  projectblurData2:string;
  projectblurData3:string;
  donatesrc: string;
  donateblurData:string;
  absrc1: string;
  absrc2: string;
  absrc3: string;
  absrc4: string;
  abblurData1: string;
  abblurData2: string;
  abblurData3: string;
  abblurData4: string;
}

export default function ClientAbout(
  {
     projectsrc1,  
     projectsrc2,  
     projectsrc3, 
     projectblurData1, 
     projectblurData2, 
     projectblurData3,
     donatesrc, 
     donateblurData,
     absrc1,
     absrc2,
     absrc3,
     absrc4,
     abblurData1,
     abblurData2,
     abblurData3,
     abblurData4,
     }: aboutProps) {

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#donate") {
        const donateElement = document.getElementById("donate-section");
        if (donateElement) {
          donateElement.scrollIntoView({ behavior: "smooth" });
        }
      }
      if (hash === "#story") {
        const storyElement = document.getElementById("our-story");
        if (storyElement) {
          storyElement.scrollIntoView({ behavior: "smooth" });
        }
      }
      if (hash === "#testimony") {
        const testimonialElement = document.getElementById("testimonial");
        if (testimonialElement) {
          testimonialElement.scrollIntoView({ behavior: "smooth" });
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
    <div className="w-full pt-[10px] mb-[40px]">
      <AB 
      absrc1={absrc1} 
      abblurData1={abblurData1}
      absrc2={absrc2} 
      abblurData2={abblurData2}
      absrc3={absrc3} 
      abblurData3={abblurData3}
      absrc4={absrc4} 
      abblurData4={abblurData4}  />
      <div id="our-story">
        <Story />
      </div>
      <div id="our-projects">
        <Project 
        projectsrc1={projectsrc1} 
        projectsrc2={projectsrc2} 
        projectsrc3={projectsrc3} 
        projectblurData1={projectblurData1} 
        projectblurData2={projectblurData2} 
        projectblurData3={projectblurData3} />
      </div>
      <div id="testimonial">
        <Testimonial />
      </div>
      <div id="donate-section">
        <Donate donatesrc={donatesrc} 
        donateblurData={donateblurData} />
      </div>
    </div>
  );
}