"use client";
import { useState, useEffect, useMemo, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./hero.module.css";

import Default from '@/assets/default.jpg'

export const experimental_ppr = true;

export const customLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
    return `${src}?w=${width}&q=${quality || 100}`;
};

interface HeroProps {
    herosrc1?: string;
    herosrc2?: string;
    herosrc3?: string;
    heroblurData1?: string;
    heroblurData2?: string;
    heroblurData3?: string;
}

const Hero: React.FC<HeroProps> = ({ herosrc1, herosrc2, herosrc3, heroblurData1, heroblurData2, heroblurData3 }) => {
    const images = useMemo(() => [
        { src: herosrc1, blurData: heroblurData1 },
        { src: herosrc2, blurData: heroblurData2 },
        { src: herosrc3, blurData: heroblurData3 },
    ], [herosrc1, herosrc2, herosrc3, heroblurData1, heroblurData2, heroblurData3]);

    const [currentImage, setCurrentImage] = useState(images[0]);
    const [nextImage, setNextImage] = useState(images[1]);
    const [fadeIn, setFadeIn] = useState(false);
    const [initialFadeIn, setInitialFadeIn] = useState(false);
    const [animateHeader, setAnimateHeader] = useState(false);

    useEffect(() => {
        setInitialFadeIn(true); // Trigger initial fade-in
        setAnimateHeader(true); // Trigger header slide-in

        const interval = setInterval(() => {
            setFadeIn(true);

            setTimeout(() => {
                setCurrentImage(nextImage);
                setNextImage((prevImage) => {
                    const currentIndex = images.indexOf(prevImage);
                    return images[(currentIndex + 1) % images.length];
                });
                setFadeIn(false);
            }, 1000); // Duration of the fade transition

        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, [nextImage, images]);

    return (
        <div className={`${styles.heroContainer}`}>
            <div className="absolute w-full h-full top-0 left-0"></div>
            <div className={styles.main}>
                <h1 className={`${animateHeader ? styles.slideIn : ""}`}>
                    Empowering Communities with Solar Energy.
                </h1>
                <Link href="/about" className={styles.link}>LEARN MORE ABOUT US</Link>
                <p>Harnessing the power of the sun to light up lives. At Luminous Life Foundation, we are dedicated to driving sustainable solar solutions, bringing reliable electricity to communities, and fostering a brighter, self-sufficient future.</p>
                <div className="bg-[#ffe76a;] border-t-[4px] border-t-[white] w-[80%] h-[40px] flex items-center pl-[60px] relative">
                    <div className="w-[50px] h-[3px] bg-[#622D25] absolute left-0"></div>
                    <p className="text-[#402a23] font-bold"> <span className="font-bold">MOTTO: </span>Lighting up the dark places!</p>
                </div>
            </div>
            <div className={`${styles.bgImg} ${fadeIn ? styles.fadeIn : ""}`}>
            <Suspense>
                <Image
                    loader={customLoader}
                    src={currentImage.src ? currentImage.src : Default}
                    alt="Background"
                    fill
                    quality={100}
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    placeholder="blur"
                    blurDataURL={currentImage.blurData ? currentImage.blurData : ''}
                    
                /> </Suspense>
            </div>
            <div className={`${styles.bgImg} ${!fadeIn ? styles.fadeOut : ""}`}>
            <Suspense>
                <Image
                    loader={customLoader}
                    src={nextImage.src ? nextImage.src : Default}
                    alt="Background"
                    fill
                    quality={100}
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    placeholder="blur"
                    blurDataURL={nextImage.blurData ? nextImage.blurData : ''}
                /> </Suspense>
            </div>
        </div>
    );
};

export default Hero;
