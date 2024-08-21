'use client';

import Image from "next/image";
import React, { useState, useEffect } from "react";
import useMeasure from "react-use-measure";
import { animate, AnimatePresence, motion, useMotionValue } from "framer-motion";
export const experimental_ppr = true;

// Custom loader for Next.js Image component
export const customLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
};

interface CardProps {
    image: string;
    caption: string;
    blurData: string;
}

const Card: React.FC<CardProps> = ({ image, caption, blurData }) => {
    const [showOverlay, setShowOverlay] = useState(false);

    return (
        <motion.div
            className="relative overflow-hidden h-[300px] min-w-[300px] bg-slate-400 rounded-xl flex justify-center items-center"
            key={image}
            onHoverStart={() => setShowOverlay(true)}
            onHoverEnd={() => setShowOverlay(false)}
        >
            {/* Hover overlay */}
            <AnimatePresence>
                {showOverlay && (
                    <motion.div
                        className="absolute left-0 top-0 bottom-0 right-0 z-10 flex justify-center items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full" />
                        <motion.h1
                            className="bg-white font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch] hover:opacity-75"
                            initial={{ y: 10 }}
                            animate={{ y: 0 }}
                            exit={{ y: 10 }}
                        >
                            <span>{caption}</span>
                        </motion.h1>
                    </motion.div>
                )}
            </AnimatePresence>
            <Image
                src={image || ""}
                alt={caption}
                fill
                style={{ objectFit: "cover" }}
                loader={customLoader}
                placeholder="blur"
                blurDataURL={blurData || ""}
            />
        </motion.div>
    );
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

const FAST_DURATION = 10;
const SLOW_DURATION = 20;

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

    const [duration, setDuration] = useState(FAST_DURATION);
    const [ref, { width }] = useMeasure();
    const xTranslation = useMotionValue(0);
    const [mustFinish, setMustFinish] = useState(false);
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        let controls;
        const finalPosition = -width / 2 - 8;

        if (mustFinish) {
            controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
                ease: "linear",
                duration: duration * (1 - xTranslation.get() / finalPosition),
                onComplete: () => {
                    setMustFinish(false);
                    setRerender(!rerender);
                },
            });
        } else {
            controls = animate(xTranslation, [0, finalPosition], {
                ease: "linear",
                duration: duration,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0,
            });
        }
        return controls?.stop;
    }, [rerender, xTranslation, duration, width]);

    return (
        <main className="py-8">
            <div className="sticky top-[73px]">
                <motion.div
                    className="flex gap-4"
                    style={{ x: xTranslation }}
                    ref={ref}
                    onHoverStart={() => {
                        setMustFinish(true);
                        setDuration(SLOW_DURATION);
                    }}
                    onHoverEnd={() => {
                        setMustFinish(true);
                        setDuration(FAST_DURATION);
                    }}
                >
                    {[...images, ...images].map((item, idx) => (
                        <Card image={item.src || ""} caption={captions[idx]} blurData={item.blurData || ""} key={idx} />
                    ))}
                </motion.div>
            </div>
        </main>
    );
};

export default Gallery;
