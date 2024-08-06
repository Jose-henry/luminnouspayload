"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Form from "@/components/contact_components/contact_form/conatct_form";
import Final from "@/components/contact_components/contact_about/contact_about";
import styles from './ClientPicture.module.css';
import { Suspense } from "react"
import Default from '@/assets/default.jpg'


export const experimental_ppr = true


export const customLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
    return `${src}?w=${width}&q=${quality || 100}`;
};

export default function ClientContact({ src, blurData }: { src?: string, blurData?: string }) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash === "#contact") {
                const contactElement = document.getElementById("contact-form");
                if (contactElement) {
                    contactElement.scrollIntoView({ behavior: "smooth" });
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

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div>
            <div 
                className={styles['fade-in']}
                style={{ 
                    position: 'relative',
                    width: '100%',
                    height: '500px', 
                    borderBottom: '2px solid white',
                    marginTop: '73px',
                    opacity: isLoaded ? 1 : 0, // Ensure opacity is 0 until the fade-in effect starts
                }}
            >
                <Suspense>
                <Image 
                    src={src ? src : Default} 
                    alt="Office" 
                    quality={100} 
                    fill 
                    style={{ objectFit: 'cover', objectPosition: 'center' }} 
                    placeholder='blur' 
                    blurDataURL={blurData ? blurData : ''} 
                    loader={customLoader} 
                /></Suspense>
            </div>
            <div id="contact-form">
                <Form />
            </div>
            <Final />
        </div>
    );
}
