"use client";
import React from 'react';
import Image from 'next/image';
import styles from './update.module.css';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import { Suspense } from "react"

import Default from '@/assets/default.jpg'


export const experimental_ppr = true






export const customLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};


interface updateProps{
 updatesrc1?: string; 
 updateblurData1?:string;
 updatesrc2?: string; 
 updateblurData2?:string;
 updatesrc3?: string; 
 updateblurData3?:string;
}

export default function Update({updatesrc1, updatesrc2, updatesrc3, updateblurData1,updateblurData2,updateblurData3}: updateProps) {
  return (
    <div className="relative w-full mt-[35px] pb-[100px]">
        <h2 className={styles.text}>
            <Typewriter
            options={{
            strings: ['Keeping up with Solar!!!'],
            autoStart: true,
            loop: true,
            }}
            />
        </h2>
      <div className={styles.wrapper}>
        <h2>Stay updated with posts from our team!</h2>
        <div className={styles.postDiv}>

          <div>
              <div className={styles.div}>
              <Suspense>
                <Image src={updatesrc1 ? updatesrc1 : Default} alt="Post" fill quality={100} style={{objectFit: 'cover', objectPosition: 'center'}} loader={customLoader} placeholder='blur' blurDataURL={updateblurData1 ? updateblurData1 : ''} ></Image>  </Suspense>
              </div>
              <h3>INSTAGRAM POST</h3>
              <p>This post highlights some key info regarding electricity.</p>
              <Link href="https://www.instagram.com/p/C7zu9fjNVFY/?igsh=bm96M2x5c20xejJ6" className={styles.link}>View Post</Link>
          </div>

          <div>
            <div className={`${styles.div} ${styles.pop}`}>
            <Suspense>
                <Image src={updatesrc2 ? updatesrc2 : Default} alt="Post" fill quality={100} style={{objectFit: 'cover', objectPosition: 'center'}} loader={customLoader} placeholder='blur' blurDataURL={updateblurData2 ? updateblurData2 : ''}></Image>  </Suspense>
              </div>
              <h3>LINKEDIN POST</h3>
              <p>Did you know? There are currently 28 power generating plants connected to the national grid, of which 25 are gas-fired plants...</p>
              <Link href="https://www.linkedin.com/posts/favour-oguibe-0a4081195_did-you-know-there-are-currently-28-activity-7109549264250310656-5wAy?utm_source=share&utm_medium=member_ios" className={styles.link}>Read More</Link>
          </div>

          <div>
            <div className={styles.div}>
            <Suspense>
                <Image src={updatesrc3 ? updatesrc3 : Default} alt="Post" fill quality={100} style={{objectFit: 'cover', objectPosition: 'center'}} loader={customLoader} placeholder='blur' blurDataURL={updateblurData3 ? updateblurData3 : ''}></Image>  </Suspense>
              </div>
              <h3>YOUTUBE VIDEO</h3>
              <p>Our first youtube video!</p>
              <Link href="https://youtube.com/shorts/2vsJfwSK97o?si=zzsyxttOjnAJ6owH" className={styles.link}>Watch Video</Link>
          </div>

        </div>
      </div>
    </div>
  );
}
