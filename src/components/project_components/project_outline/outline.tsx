"use client"
import Image from 'next/image';
import styles from './outline.module.css';
import Link from 'next/link';
import React, { Suspense } from "react"
import Default from '@/assets/default.jpg'


export const experimental_ppr = true




export const customLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
};

interface OutlineProps {
    outlinesrc1?: string; 
    outlineblurData1?: string;
    outlinesrc2?: string; 
    outlineblurData2?: string;
    outlinesrc3?: string; 
    outlineblurData3?: string;
    outlinesrc4?: string; 
    outlineblurData4?: string;
}

export default function Outline({
    outlinesrc1,
    outlineblurData1,
    outlinesrc2,
    outlineblurData2,
    outlinesrc3,
    outlineblurData3,
    outlinesrc4,
    outlineblurData4}
    : OutlineProps) {
  return (
      <div className="w-full pt-[60px] bg-[#f6eedf] pb-[80px]">
        <div className={styles.main_container}>
            <div className={styles.text}>
                <h2>Project Outline</h2>
                <p>Discover how Luminous Life Foundation is illuminating communities with sustainable solar solutions. </p>
            </div>
            <div className={styles.the_projects}>
                <div className={styles.project}>
                    <div className={styles.div1}>
                        <div>
                        <h3 className={styles.projectText}>1: Gebrefu in the Dark: Two Decades Without Electricity</h3>
                        <p>Nestled in the heart of Badagry, the Gebrefu Community has endured an astonishing 24 years without access to electricity. Yet, amidst the darkness, there is a growing spark of hope.</p>
                        <h4><span className='font-bold'>Category</span>: Community</h4>
                        </div>
                        <Link href="/projects/article2" className={styles.btn}>
                            Learn more
                        </Link>
                    </div>
                    <div className={`${styles.div2} ${styles.style1}`}>
                    <Suspense>
                        <Image src={ outlinesrc1 ? outlinesrc1 : Default} alt="Test" quality={100} fill style={{objectFit: 'cover', objectPosition: 'center'}} 
                        loader={customLoader} placeholder='blur' blurDataURL={ outlineblurData1 ? outlineblurData1 : ''}></Image>
                    </Suspense>
                    </div>
                    <div className={`${styles.div3} ${styles.style2}`}>
                    <Suspense>
                        <Image src={ outlinesrc2 ? outlinesrc2 : Default} alt="Test" quality={100} fill style={{objectFit: 'cover', objectPosition: 'center'}} loader={customLoader} placeholder='blur' blurDataURL={ outlineblurData2 ? outlineblurData2 : ''}></Image>
                        </Suspense>
                    </div>
                </div>

                <div className={styles.project}>
                    <div className={styles.div1}>
                        <div>
                        <h3 className={styles.projectText}>2: Empowering Young Minds on Solar Energy</h3>
                        <p>This program is dedicated to educating young children and students about the transformative power of solar energy.</p>
                        <h4><span className='font-bold'>Category</span>: Education</h4>
                        </div>
                        <Link href="/projects/article3" className={styles.btn}>Learn more</Link>
                    </div>
                    <div className={`${styles.div2} ${styles.style3}`}>
                    <Suspense>
                        <Image src={ outlinesrc3 ? outlinesrc3 : Default} alt="Test" quality={100} fill style={{objectFit: 'cover', objectPosition: 'center'}} loader={customLoader} placeholder='blur' blurDataURL={ outlineblurData3 ? outlineblurData3 : ''}></Image></Suspense>
                    </div>
                    <div className={`${styles.div3} ${styles.style4}`}>
                    <Suspense>
                        <Image src={ outlinesrc4 ? outlinesrc4 : Default} alt="Test" quality={100} fill style={{objectFit: 'cover', objectPosition: 'center'}} loader={customLoader} placeholder='blur' blurDataURL={ outlineblurData4 ? outlineblurData4 : ''}></Image></Suspense>
                    </div>
                </div>
            </div>
        </div>
      </div>
  );
}
