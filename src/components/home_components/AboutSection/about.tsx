"use client"
import React from 'react';
import Image from 'next/image';
import styles from './about.module.css';
import Link from 'next/link';
import { Suspense } from "react"

import Default from '@/assets/default.jpg'


export const experimental_ppr = true





export const customLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
    return `${src}?w=${width}&q=${quality || 100}`;
};
interface aboutProps{
    aboutsrc1?: string; 
    aboutsrc2?: string; 
    aboutblurData1?:string;
    aboutblurData2?:string;
  
  }

export default function About({ aboutsrc1, aboutsrc2, aboutblurData1, aboutblurData2 }:aboutProps) {

    const handleStoryClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (window.location.pathname === "/about") {
            e.preventDefault(); // Prevent default link behavior
            const storyElement = document.getElementById("our-story");
            if (storyElement) {
                storyElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

  return (
    <div className={styles.main_container}>
        <div className={styles.div1}>
            <h2>Who We Are</h2>
            <p>At Luminous Life Foundation, we focus on delivering solar energy solutions to rural communities</p>
            <p>Our goal is to provide sustainable, renewable energy that empowers people, improves their quality of life, and fosters environmental stewardship.</p>
        </div>

        <div className={styles.styleDiv}>
            <div className={styles.imageDiv}>
            <Suspense>
                <Image src={aboutsrc1 ? aboutsrc1 : Default} alt="Yellow" fill quality={100} style={{objectFit: 'cover', objectPosition: 'center'}} loader={customLoader} placeholder='blur' blurDataURL={aboutblurData1 ? aboutblurData1 : ""} /> </Suspense>
            </div>
            <div className={styles.imageDiv}>
            <Suspense>
                <Image src={aboutsrc2 ? aboutsrc2 : Default} alt="Yellow" fill quality={100} style={{objectFit: 'cover', objectPosition: 'center'}} loader={customLoader} placeholder='blur' blurDataURL={aboutblurData2 ? aboutblurData2 : ""} /> </Suspense>
            </div>
            <div className={styles.get}>
                <div className={styles._div}>
                    <h2>Get to Know Us</h2>
                    <p>Discover how we started and the journey that drives our mission to light up lives with solar energy.</p>
                    <Link href="/about" className={styles.link}>About Us</Link>
                </div>
                <div className={styles.div2}>
                    <div className={styles.story_div}>
                        <Link href="/about#story" className={styles.story} onClick={handleStoryClick}>Know Our Story</Link>
                        <Image src="/assets/discover.svg" alt="Arrow" width={30} height={20}></Image>
                    </div>
                    <Image src="/assets/wheat.jpg" alt="Wheat field" fill quality={100} style={{objectFit: 'cover', objectPosition: 'center'}} />
                </div>
            </div>
        </div>
    </div>
  );
}
