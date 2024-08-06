"use client";
import Image from 'next/image';
import styles from './mission.module.css'
import Link from 'next/link';

export default function Mission() {
    const handleProjectClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (window.location.pathname === "/projects") {
            e.preventDefault(); // Prevent default link behavior
            const projectElement = document.getElementById("project-outline");
            if (projectElement) {
                projectElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

  return (
    <div className="relative w-full mt-[80px]  pb-[80px]">
        <div className={styles.wrapper}>
            <div className={styles.missionDiv}>
                <div>
                    <h2>Our Mission</h2>
                    <p>Empowering underserved communities in Nigeria through sustainable energy solutions and fostering overall well-being. 
                        Our mission is to bring reliable, clean, and affordable energy to those in need, enabling socio-economic development and improving quality of life. 
                        We are dedicated to sustainable practices that not only provide immediate benefits but also ensure long-term impact and resilience in the communities we serve. 
                        By addressing energy poverty, we aim to support education, healthcare, and economic opportunities, contributing to a brighter and more equitable future for all.
                    </p>
                </div>
                <div>
                    <p>See the steps we are taking to achieve these goals.</p>
                    <Link href="/projects#project" className={styles.link}  onClick={handleProjectClick}>View Projects</Link>
                </div>
            </div>
            <div>
                <h2>Our Values</h2>
                <div className={`${styles.valueDiv}`}>
                    <div className={styles.div}>
                        <Image src="/assets/scale.svg" alt="Equity Logo" width={22} height={22}></Image>
                        <p>Equity</p>
                    </div>
                    <div className={styles.div}>
                        <Image src="/assets/empowerment.svg" alt="Empowerment Logo" width={20} height={20}></Image>
                        <p>Empowerment</p>
                    </div>
                    <div className={styles.div}>
                        <Image src="/assets/transparency.svg" alt="Transparency Logo" width={20} height={20}></Image>
                        <p>Transparency</p>
                    </div>
                    <div className={styles.div}>
                        <Image src="/assets/sustainability.svg" alt="Sustainability Logo" width={20} height={20}></Image>
                        <p>Sustainability</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
