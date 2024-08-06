// src/components/about/ab.tsx
"use client";
import React, { useState, useEffect } from 'react';
import styles from './ab.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from "react"
import Default from '@/assets/default.jpg'


export const experimental_ppr = true





export const customLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
    return `${src}?w=${width}&q=${quality || 100}`;
  };
  
interface ABProps {
    absrc1?: string;
    absrc2?: string;
    absrc3?: string;
    absrc4?: string;
    abblurData1?: string;
    abblurData2?: string;
    abblurData3?: string;
    abblurData4?: string;
}

const AB: React.FC<ABProps> = ({ absrc1, absrc2, absrc3, absrc4, abblurData1, abblurData2, abblurData3, abblurData4 }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentBackground, setCurrentBackground] = useState(0);

    const slides = [
        { content: "At The Luminous Life Foundation, we are dedicated to providing solar energy solutions that illuminate the future of rural communities. Our mission transcends merely delivering power; we aim to foster an environment where sustainable and renewable energy becomes a cornerstone for empowering individuals and enhancing their quality of life." },
        { content: "In many rural areas, access to reliable and affordable energy remains a significant challenge. Conventional energy sources are often unavailable, unreliable, or environmentally damaging, leaving communities without the necessary power for basic needs and development. At The Luminous Life Foundation, we aim to bridge this gap by deploying advanced solar technologies tailored to the specific needs of each community we serve." },
        { content: "We envision a transformative world where every rural community thrives through access to clean, reliable, and affordable solar energy. Our vision is a future where solar energy solutions bridge the energy divide, illuminating lives and unlocking the potential of every individual, home, and enterprise. In this future, every rural community, no matter how remote, enjoys the benefits of sustainable and renewable energy. Schools are well-lit and equipped to provide quality education, healthcare facilities operate with essential medical equipment, and households have access to modern amenities that enhance quality of life." },
        { content: "Ultimately, our vision is to be a beacon of light and hope, driving transformative change through solar energy. We strive to create a world where energy poverty is a relic of the past, where every community can harness the power of the sun to achieve their aspirations, foster development, and improve the overall quality of life. Our mission is to ensure that no one is left in the dark and that the benefits of solar energy are accessible to all, paving the way for a brighter, more sustainable, and equitable future for rural communities across the globe." }
    ];

    const backgrounds = [
        { src: absrc1, blurData: abblurData1 },
        { src: absrc2, blurData: abblurData2 },
        { src: absrc3, blurData: abblurData3 },
        { src: absrc4, blurData: abblurData4 },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [backgrounds.length]);

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={`${styles.change} ${styles.fade}`}>
                <Suspense>
                    <Image
                        src={backgrounds[currentBackground].src ? backgrounds[currentBackground].src : Default}
                        alt={`rural${currentBackground}`}
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                        quality={100}
                        className={`${styles.change} ${styles.fade}`}
                        placeholder='blur'
                        blurDataURL={backgrounds[currentBackground].blurData ? backgrounds[currentBackground].blurData : ''}
                        loader={customLoader}
                    /> </Suspense>
                </div>
                <div className={styles.about}>
                    <h2>About Luminous Life Foundation</h2>
                    <div className={styles.slideContainer}>
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
                            >
                                <p>{slide.content}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.navigate}>
                        {currentSlide > 0 && (
                            <Image
                                src="/assets/back.svg"
                                alt="back icon"
                                width={50}
                                height={50}
                                className={styles.prev}
                                onClick={handlePrev}
                            />
                        )}
                        <Link href="/projects" className={styles.view_projects}>View Our Projects</Link>
                        <Image
                            src="/assets/next.svg"
                            alt="next icon"
                            width={50}
                                height={50}
                                className={styles.next}
                                onClick={handleNext}
                            />
                    </div>
                </div>
            </div>

            <div className={styles.values}>
                <h2>Our Values</h2>
                <div className={styles.value_container}>
                    <div className={styles.div}>
                        <h3>Equity</h3>
                        <p>Access to reliable electricity is a fundamental right essential for healthcare, education, and economic empowerment, regardless of socio-economic status. 
                        </p>
                    </div>
                    <div className={styles.div}>
                        <h3>Empowerment</h3>
                        <p>We are committed to empowering communities by equipping them with the tools and resources needed to enhance their quality of life and take charge of their own development. 
                        </p>
                    </div>
                    <div className={styles.div}>
                        <h3>Sustainability</h3>
                        <p>Our commitment to sustainable energy solutions ensures lasting benefits for communities and the environment. 
                        By prioritizing renewable energy, we empower communities to thrive in a cleaner, more sustainable future.</p>
                    </div>
                    <div className={styles.div}>
                        <h3>Transparency</h3>
                        <p>Transparency and accountability are core principles that guide our actions and relationships. We uphold transparency by openly sharing information and making decisions based on integrity.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AB;
