"use client";
import React from 'react';
import styles from './improve.module.css'
import Link from "next/link";
import Image from "next/image";
import Default from '@/assets/default.jpg'
import { Suspense } from "react"


export const experimental_ppr = true



export const customLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  

interface improveProps{
   improvesrc1?: string; 
   improveblurData1?:string;
   improvesrc2?: string; 
   improveblurData2?:string;
   improvesrc3?: string; 
   improveblurData3?:string;
  }


export default function Improve({improvesrc1, improvesrc2, improvesrc3, improveblurData1,improveblurData2,improveblurData3}: improveProps) {

    const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (window.location.pathname === "/contact") {
            e.preventDefault(); // Prevent default link behavior
            const donateElement = document.getElementById("contact-section");
            if (donateElement) {
                donateElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

  return (
    <div className="relative w-full pt-[80px] pb-[80px]">
        <div className={styles.wrapper}>
            <div className={styles.textDiv}>
                <h2>Help Us Improve!</h2>
                <p>We value your input! Your feedback is crucial in helping us enhance our efforts and make a greater impact. Please take a moment to share your thoughts, suggestions, or any areas where we can do better. Together, we can light up more lives!</p>
                <Link href="/contact#contact" className={styles.link} onClick={handleContactClick}>Give Your Input</Link>
            </div>
            <div className={styles.loveDiv}>
                <div className={styles.love}>
                <Suspense>
                    <Image src={improvesrc1 ? improvesrc1 : Default} alt="Love" fill quality={100} style={{objectFit: 'cover', objectPosition: 'center'}} loader={customLoader} placeholder='blur' blurDataURL={improveblurData1 ? improveblurData1 : ''}></Image>  </Suspense>
                </div>
                <div className={`${styles.love} ${styles.love2}`}>
                <Suspense>
                    <Image src={improvesrc2 ? improvesrc2 : Default} alt="Love" fill quality={100} style={{objectFit: 'cover', objectPosition: 'center'}} loader={customLoader} placeholder='blur' blurDataURL={improveblurData2 ? improveblurData2 : ''}></Image>  </Suspense>
                </div>
                <div className={styles.love}>
                <Suspense>
                    <Image src={improvesrc3 ? improvesrc3 : Default} alt="Love" fill quality={100} style={{objectFit: 'cover', objectPosition: 'center'}} loader={customLoader} placeholder='blur' blurDataURL={improveblurData3 ? improveblurData3 : ''}></Image>  </Suspense>
                </div>
            </div>
        </div>
    </div>
  );
}
