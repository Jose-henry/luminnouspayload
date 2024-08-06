"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./navbar.module.css"; // Import CSS module
import Image from "next/image";

const NavBar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false); // Add state for pop-up visibility

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const updateMedia = () => {
        setIsMobile(window.innerWidth <= 450);
    };

    useEffect(() => {
        updateMedia(); // Check initial window size
        window.addEventListener("resize", updateMedia); // Add event listener

        return () => window.removeEventListener("resize", updateMedia); // Clean up event listener
    }, []);

    const handleDonateClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (window.location.pathname === "/about") {
            e.preventDefault(); // Prevent default link behavior
            const donateElement = document.getElementById("donate-section");
            if (donateElement) {
                donateElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const handleFlagClick = () => {
        setPopupVisible(true); // Show the pop-up
    };

    const handleCloseClick = () => {
        setPopupVisible(false); // Hide the pop-up
    };

    return (
        <div className={styles.main_container}>
            {popupVisible && (
                <div className={`${styles.popUp} ${styles.slideIn}`}>
                    <div className="mb-2 flex items-center justify-between">
                        <p className={styles.p1}>Proudly Nigerian!</p>
                        <Image
                            src="/assets/white_close.svg"
                            width={20}
                            height={20}
                            alt="Close"
                            className="cursor-pointer"
                            onClick={handleCloseClick} // Add onClick to close the pop-up
                        />
                    </div>
                    <p className={styles.p2}>
                        We are a proud Nigerian-based NGO, dedicated to empowering rural communities with solar energy. We believe in the future of Nigeria and are committed to creating a brighter and more prosperous future for our beloved country.
                    </p>
                </div>
            )}
            <div className={styles.theLinks}>
                <Link href="/" className={styles.link}>HOME</Link>
                <Link href="/about" className={styles.link}>ABOUT</Link>
                <Link href="/team" className={styles.link}>TEAMS</Link>
                <Link href="/projects" className={styles.link}>PROJECTS</Link>
                <Link href="/contact" className={styles.link}>CONTACT</Link>
                <Link href="/about#donate" className={styles.donate} onClick={handleDonateClick}>DONATE</Link>
                <div className="w-[30px] h-[30px] rounded-full relative overflow-hidden shadow-md active:shadow-none cursor-pointer border-[1.5px] border-[#393e46]" onClick={handleFlagClick}>
                    <Image src="/assets/ng.svg" alt='Flag' quality={100} fill style={{objectFit: 'cover', objectPosition: 'center'}}></Image>
                </div>
            </div>
            {isMobile && (
                <div>
                    <div className="flex items-center">
                        <Image
                            src="/assets/menu-icon.svg"
                            alt="menu icon"
                            width={20}
                            height={20}
                            className={styles.menu}
                            style={{ display: menuOpen ? 'none' : 'block' }}
                            onClick={toggleMenu}
                        />
                        <Image
                            width="20"
                            height="20"
                            src="/assets/close.svg"
                            alt="multiply"
                            className={styles.close}
                            style={{ display: menuOpen ? 'block' : 'none' }}
                            onClick={toggleMenu}
                        />
                    </div>
                    <div className={`${styles.small} ${menuOpen ? styles.show : ''}`}>
                        <Link href="/" className={styles.design}>
                            <Link href="/" className={styles._link}>Home</Link>
                            <Image src="/assets/move.svg" alt="Go icon" height={13} width={13}></Image>
                        </Link>
                        <Link href="/about" className={styles.design}>
                            <Link href="/about" className={styles._link}>About</Link>
                            <Image src="/assets/move.svg" alt="Go icon" height={13} width={13}></Image>
                        </Link>
                        <Link href="/team" className={styles.design}>
                            <Link href="/team" className={styles._link}>Teams</Link>
                            <Image src="/assets/move.svg" alt="Go icon" height={13} width={13}></Image>
                        </Link>
                        <Link href="/projects" className={styles.design}>
                            <Link href="/projects" className={styles._link}>Projects</Link>
                            <Image src="/assets/move.svg" alt="Go icon" height={13} width={13}></Image>
                        </Link>
                        <Link href="/contact" className={styles.design}>
                            <Link href="/contact" className={styles._link}>Contact</Link>
                            <Image src="/assets/move.svg" alt="Go icon" height={13} width={13}></Image>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NavBar;
