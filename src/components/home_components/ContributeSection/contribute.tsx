"use client";
import Image from 'next/image';
import styles from './contribute.module.css';
import Link from 'next/link';
import { Suspense } from "react"

import Default from '@/assets/default.jpg'


export const experimental_ppr = true


export const customLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
    return `${src}?w=${width}&q=${quality || 100}`;
  };
  

interface contributeProps{
    contributesrc1?: string; 
    contributeblurData1?:string;
  }

export default function Contribute({contributesrc1, contributeblurData1, }: contributeProps) {

    const handleDonateClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (window.location.pathname === "/about") {
            e.preventDefault(); // Prevent default link behavior
            const donateElement = document.getElementById("donate-section");
            if (donateElement) {
                donateElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    };
    
  return (
    <div className={`relative w-full ${styles.main_container}`}>
        <div className={styles.wrapper}>
            <div className={styles.intro}>
                <h2>Together, we can light up the dark places</h2>
                <p>This is how how you can help us!</p>
            </div>
            <div className={styles.picDiv}>
                <div className={styles.textDiv}>
                        <div>
                            <Image src="/assets/bulb.jpg" alt="Logo" height={50} width={50} className='mx-auto' ></Image>
                            <h3>From Kerosene to Solar</h3>
                            <p>
                                Your donation helps rural communities transition from costly and harmful kerosene to affordable, clean solar energy. Solar lights reduce household expenses, improve health, and brighten lives, making sustainable living a reality.
                            </p>
                        </div>
                        <p>Your donation can provide solar-powered lights to a family, transforming their nights and enabling a brighter future.</p>
                        <div className={styles.linkDiv}>
                            <Link href="/about#donate" className={styles.link} onClick={handleDonateClick}>Donate</Link>
                            <Link href="https://forms.gle/xzP3CLSgd9cAS2EQ9" className={styles.link}>Volunteer</Link>
                        </div>
                        <p>100% of your donation brings solar energy to homes in need.</p>
                </div>
                <div className={styles.ImgDiv}>
                <Suspense>
                    <Image src={contributesrc1 ? contributesrc1 : Default} alt="Lamp" fill quality={100} style={{objectFit: 'cover', objectPosition: 'center'}} loader={customLoader} placeholder='blur' blurDataURL={contributeblurData1 ? contributeblurData1 : ""} ></Image> </Suspense>
                </div>
            </div>
        </div>
    </div>
  );
}
