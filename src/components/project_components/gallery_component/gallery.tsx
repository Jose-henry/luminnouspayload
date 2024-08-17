'use client';
import Image from "next/image";
import styles from "./gallery.module.css";
import React, { Suspense } from "react"
import Default from '@/assets/default.jpg'
export const experimental_ppr = true



export const customLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
};

interface GalleryProps {
    gallerysrc1?: string; 
    galleryblurData1?: string;
    gallerysrc2?: string; 
    galleryblurData2?: string;
    gallerysrc3?: string; 
    galleryblurData3?: string;
    gallerysrc4?: string; 
    galleryblurData4?: string;
    gallerysrc5?: string; 
    galleryblurData5?: string;
    gallerysrc6?: string; 
    galleryblurData6?: string;
    gallerysrc7?: string; 
    galleryblurData7?: string;
    gallerysrc8?: string; 
    galleryblurData8?: string;
    gallerysrc9?: string; 
    galleryblurData9?: string;
    gallerysrc10?: string; 
    galleryblurData10?: string;
    gallerysrc11?: string; 
    galleryblurData11?: string;
    gallerysrc12?: string; 
    galleryblurData12?: string;
}

const Gallery: React.FC<GalleryProps> = ({
    gallerysrc1,
    galleryblurData1,
    gallerysrc2,
    galleryblurData2,
    gallerysrc3,
    galleryblurData3,
    gallerysrc4,
    galleryblurData4,
    gallerysrc5,
    galleryblurData5,
    gallerysrc6,
    galleryblurData6,
    gallerysrc7,
    galleryblurData7,
    gallerysrc8,
    galleryblurData8,
    gallerysrc9,
    galleryblurData9,
    gallerysrc10,
    galleryblurData10,
    gallerysrc11,
    galleryblurData11,
    gallerysrc12,
    galleryblurData12,
}) => {
    const images = [
        { src: gallerysrc1, blurData: galleryblurData1 },
        { src: gallerysrc2, blurData: galleryblurData2 },
        { src: gallerysrc3, blurData: galleryblurData3 },
        { src: gallerysrc4, blurData: galleryblurData4 },
        { src: gallerysrc5, blurData: galleryblurData5 },
        { src: gallerysrc6, blurData: galleryblurData6 },
        { src: gallerysrc7, blurData: galleryblurData7 },
        { src: gallerysrc8, blurData: galleryblurData8 },
        { src: gallerysrc9, blurData: galleryblurData9 },
        { src: gallerysrc10, blurData: galleryblurData10 },
        { src: gallerysrc11, blurData: galleryblurData11 },
        { src: gallerysrc12, blurData: galleryblurData12 },
    ];

    const captions = [
        "Education",
        "Farming",
        "Clean Water",
        "Fishing",
        "Good Roads",
        "Improved Market Life",
        "Education",
        "Farming",
        "Clean Water",
        "Fishing",
        "Good Roads",
        "Improved Market Life",
    ];

    return (
        <div className={styles.main_container}>
            <h3>Lighting up the Dark Places!!!</h3>
            <div className={styles.slide}>
                {images.map((image, index) => (
                    <div className={styles.pic} key={index}>
                        <div style={{ position: 'relative' }}>
                        <Suspense>
                            <Image 
                                src={image.src ? image.src : ""} 
                                alt={captions[index]} 
                                fill 
                                quality={100} 
                                style={{ objectFit: 'cover', objectPosition: 'center' }} 
                                loader={customLoader} 
                                placeholder='blur' 
                                blurDataURL={image.blurData ? image.blurData : ''} 
                            /> </Suspense>
                        </div>
                        <p>{captions[index]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
