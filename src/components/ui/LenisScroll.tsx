'use client'

import { useEffect } from "react"
import Lenis from 'lenis';


export default function LenisScroll() {
    useEffect(() => {
        const lenis = new Lenis();

        lenis.on('scroll', (e: any) => {
            console.log(e);
        });

        function raf(time: any) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);
    return null;
}










