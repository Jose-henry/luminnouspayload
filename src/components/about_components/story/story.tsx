import Link from 'next/link';
import styles from './story.module.css';
import { Suspense } from "react"


export const experimental_ppr = true


const Story = () => {
    return (
        <div className={styles.main_container}>
            <div className={styles.div1}>
                <h2>Our Origin Story</h2>
                <p>At Luminous Life Foundation, every great endeavor has a humble beginning. We invite you to journey with us to the roots of our mission, where a small yet determined group set out with a vision to light up lives and empower communities. Click below to discover the inspiring story of how we turned a single step into a movement for change.</p>
                <Link href="/projects/article1" className={styles.read}>Read Our Story</Link>
            </div>
            <Suspense>
            <iframe
                width="100%"
                height="100%"
                className={styles.youtube}
                src="https://www.youtube.com/embed/od5yWB5aE0c?si=Ju0OeslLZVtquyf8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe> </Suspense>
        </div>
    );
};

export default Story;
