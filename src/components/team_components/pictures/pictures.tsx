"use client";
// Import necessary modules and components
import React, { useEffect, useRef } from 'react';
import styles from './pictures.module.css';
import Image from 'next/image';
import Link from 'next/link';

// Define interface for team members
interface TeamMember {
    name: string;
    role: string;
    image: string;
    bgPosition?: string;
    socials: { name: string; url: string; icon: string; }[];
}

// Define component Picture as a functional component
const Picture: React.FC = () => {
    // Initialize useRef to store references to details elements
    const detailsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const currentRefs = detailsRef.current; // Store the current value in a local variable
    
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.fadeIn);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );
    
        currentRefs.forEach((div) => {
            observer.observe(div);
        });
    
        // Clean up by unobserving each details element
        return () => {
            currentRefs.forEach((div) => {
                observer.unobserve(div);
            });
        };
    }, []); // Dependency array ensures useEffect runs only once    

    // Define arrays for managerial and operational teams
    const managerialTeam: TeamMember[] = [
        {
            name: 'Favour Oguibe',
            role: 'Founder',
            image: '/assets/Favour.jpg',
            bgPosition: 'center bottom -140px',
            socials: [
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/favour-oguibe-0a4081195/', icon: '/assets/_linkedin.svg' },
                { name: 'Instagram', url: 'https://www.instagram.com/_oguibe?igsh=MWc4aTQ3cG5kdXpnNg==', icon: '/assets/_instagram.svg' },
            ],
        },
        {
            name: 'David OJ',
            role: 'Co-Founder',
            image: '/assets/OJ.jpg',
            bgPosition: 'center bottom -140px',
            socials: [
                { name: 'LinkedIn', url: '', icon: '/assets/_linkedin.svg' },
            ],
        },
        {
            name: 'Nelson Elijah',
            role: 'Administrative Head',
            image: '/assets/Nelson.jpg',
            bgPosition: 'center bottom -170px',
            socials: [
                { name: 'LinkedIn', url: 'http://www.linkedin.com/in/nelson-elijah', icon: '/assets/_linkedin.svg' },
            ],
        },
        // Add other members as needed
    ];

    const operationalTeam: TeamMember[] = [
        {
            name: 'Stephanie Nwangwu',
            role: 'General Secretary',
            image: '/assets/Stephanie.jpg',
            socials: [
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/stephanie-adaeze-nwangwu-703ba5195', icon: '/assets/_linkedin.svg' },
                { name: 'Instagram', url: 'https://www.instagram.com/s.wangwu?igsh=cGlhb29mbGQ3YTE2&utm_source=qr', icon: '/assets/_instagram.svg' },
            ],
        },
        {
            name: 'Joba',
            role: 'Financial Secretary',
            image: '/assets/Joba.jpg',
            socials: [
                { name: 'LinkedIn', url: 'http://linkedin.com/in/elisalome-oyefusi', icon: '/assets/_linkedin.svg' },
            ],
        },
        {
            name: 'Ola',
            role: 'Social Media Manager',
            image: '/assets/Ola.jpg',
            bgPosition: 'center bottom -120px',
            socials: [
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ola-oluwa-salami-55a9911a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', icon: '/assets/_linkedin.svg' },
                { name: 'Instagram', url: 'https://www.instagram.com/olaxart?igsh=MTh6dDY5ZXNvdWYyZw==', icon: '/assets/_instagram.svg' },
            ],
        },
        // Add other members as needed
    ];

    const technicalTeam: TeamMember[] = [
        {
            name: 'Joseph Henry',
            role: 'Software Engineer',
            image: '/assets/Joseph.jpg',
            socials: [
                { name: 'LinkedIn', url: "https://www.linkedin.com/in/joseph-c-henry/" , icon: '/assets/_linkedin.svg' },
            ],
        },
        {
            name: 'Fortune Oguibe',
            role: 'Software Developer',
            image: '/assets/Fortune.jpg',
            bgPosition: 'center bottom -170px',
            socials: [
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/fortune-oguibe-024a5a198/', icon: '/assets/_linkedin.svg' },
            ],
        },
        {
            name: 'Priestly',
            role: 'Product Designer',
            image: '/assets/Priestly.jpg',
            socials: [
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/priestly-chukwu-77632118a/', icon: '/assets/_linkedin.svg' },
                { name: 'Instagram', url: 'https://www.instagram.com/c.h.i.nonso?igsh=MTBsZ3FzYTJ0MHZnaw==', icon: '/assets/_instagram.svg' },
            ],
        },

        {
            name: 'Onyinye Anene',
            role: 'Product Designer',
            image: '/assets/Onyinye.jpg',
            socials: [
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/onyinye-anene-547628221', icon: '/assets/_linkedin.svg' },
                { name: 'Instagram', url: 'https://www.instagram.com/__michelle_o?igsh=MWU1bno2cWV4ZnhreA==', icon: '/assets/_instagram.svg' },
                { name: 'Twitter', url: 'https://twitter.com/onyinye__a', icon: '/assets/_twitter.svg' },
            ],
        },
        // Add other members as needed
    ];

    const trusteeTeam: TeamMember[] = [
        {
            name: 'Gabriel Obiefule',
            role: 'Senior Training Specialist',
            image: '/assets/Gabriel.jpg',
            socials: [
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/chidiebere-obiefule-2967061b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', icon: '/assets/_linkedin.svg' },
            ],
        },
        {
            name: 'Wale',
            role: 'Trustee',
            image: '/assets/Wale.jpg',
            socials: [
                { name: 'LinkedIn', url: '', icon: '/assets/_linkedin.svg' },
            ],
        },
        // Add other members as needed
    ];

    const foundingMembers: TeamMember[] = [
        {
            name: 'David Olanisikan',
            role: 'Robotics Engineer',
            image: '/assets/Djones.jpg',
            bgPosition: 'center bottom -145px',
            socials: [
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/olonisakin-david/', icon: '/assets/_linkedin.svg' },
                { name: 'Instagram', url: 'https://www.instagram.com/djonesplays/', icon: '/assets/_instagram.svg' },
                { name: 'Twitter', url: 'https://x.com/DjonesEarns', icon: '/assets/_twitter.svg' },
            ],
        },
        {
            name: 'Kibe Ume',
            role: 'Data Analyst',
            image: '/assets/Kibe.jpg',
            bgPosition: 'center bottom -140px',
            socials: [
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kibe-ume-0bb26a199', icon: '/assets/_linkedin.svg' },
            ],
        },
        {
            name: 'Babalola Johnson',
            role: 'Founding Member',
            image: '/assets/Johnson.jpg',
            bgPosition: 'center bottom 20px',
            socials: [
                { name: 'LinkedIn', url: '', icon: '/assets/_linkedin.svg' },
            ],
        },
        // Add other members as needed
    ];

    // Return JSX representing the component
    return (
        <div className={styles.container}>
            <div className={styles.team_div}>
                {/* Render managerial team */}
                <div>
                    <h2>Our Team (Managerial)</h2>
                    <div className={styles.team}>
                        {managerialTeam.map((member, index) => (
                            <div className={styles.pic} key={index}>
                                <div className={styles.details} ref={(el) => {
                                    if (el) detailsRef.current[index] = el;
                                }}>
                                    <div
                                        style={{
                                            width: '400px',
                                            height: '400px',
                                            marginBottom: '20px',
                                            backgroundImage: `url(${member.image})`,
                                            backgroundPosition: member.bgPosition || 'center',
                                            backgroundSize: 'cover',
                                            borderTopLeftRadius: '3px',
                                            borderTopRightRadius: '3px',
                                            backgroundRepeat: 'no-repeat',
                                        }}
                                    ></div>
                                    <div className={styles.info}>
                                        <div className={styles.name}>
                                            <h3>{member.role}</h3>
                                            <p>{member.name}</p>
                                        </div>
                                        <div className={styles.socials}>
                                            {member.socials.map((social, socialIndex) => (
                                                <Link href={social.url} key={socialIndex}>
                                                    <Image src={social.icon} alt={`${social.name} Icon`} width={23} height={23} />
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Render operational team */}
                <div>
                    <h2>Our Team (Operational)</h2>
                    <div className={styles.team}>
                        {operationalTeam.map((member, index) => (
                            <div className={styles.pic} key={index}>
                                <div className={styles.details} ref={(el) => {
                                    if (el) detailsRef.current[index + managerialTeam.length] = el;
                                }}>
                                    <div
                                        style={{
                                            width: '400px',
                                            height: '400px',
                                            marginBottom: '20px',
                                            backgroundImage: `url(${member.image})`,
                                            backgroundPosition: member.bgPosition || 'center',
                                            backgroundSize: 'cover',
                                            borderTopLeftRadius: '3px',
                                            borderTopRightRadius: '3px',
                                            backgroundRepeat: 'no-repeat',
                                        }}
                                    ></div>
                                    <div className={styles.info}>
                                        <div className={styles.name}>
                                            <h3>{member.role}</h3>
                                            <p>{member.name}</p>
                                        </div>
                                        <div className={styles.socials}>
                                            {member.socials.map((social, socialIndex) => (
                                                <Link href={social.url} key={socialIndex}>
                                                    <Image src={social.icon} alt={`${social.name} Icon`} width={23} height={23} />
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Render technical team */}
                <div>
                    <h2>Our Team (Technical)</h2>
                    <div className={styles.team}>
                        {technicalTeam.map((member, index) => (
                            <div className={styles.pic} key={index}>
                                <div className={styles.details} ref={(el) => {
                                    if (el) detailsRef.current[index + managerialTeam.length + operationalTeam.length] = el;
                                }}>
                                    <div
                                        style={{
                                            width: '400px',
                                            height: '400px',
                                            marginBottom: '20px',
                                            backgroundImage: `url(${member.image})`,
                                            backgroundPosition: member.bgPosition || 'center',
                                            backgroundSize: 'cover',
                                            borderTopLeftRadius: '3px',
                                            borderTopRightRadius: '3px',
                                            backgroundRepeat: 'no-repeat',
                                        }}
                                    ></div>
                                    <div className={styles.info}>
                                        <div className={styles.name}>
                                            <h3>{member.role}</h3>
                                            <p>{member.name}</p>
                                        </div>
                                        <div className={styles.socials}>
                                            {member.socials.map((social, socialIndex) => (
                                                <Link href={social.url} key={socialIndex}>
                                                    <Image src={social.icon} alt={`${social.name} Icon`} width={23} height={23} />
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Render Trustee team */}
                <div>
                    <h2>Our Team (Trustees)</h2>
                    <div className={styles.team}>
                        {trusteeTeam.map((member, index) => (
                            <div className={styles.pic} key={index}>
                                <div className={styles.details} ref={(el) => {
                                    if (el) detailsRef.current[index + managerialTeam.length + operationalTeam.length + technicalTeam.length] = el;
                                }}>
                                    <div
                                        style={{
                                            width: '400px',
                                            height: '400px',
                                            marginBottom: '20px',
                                            backgroundImage: `url(${member.image})`,
                                            backgroundPosition: member.bgPosition || 'center',
                                            backgroundSize: 'cover',
                                            borderTopLeftRadius: '3px',
                                            borderTopRightRadius: '3px',
                                            backgroundRepeat: 'no-repeat',
                                        }}
                                    ></div>
                                    <div className={styles.info}>
                                        <div className={styles.name}>
                                            <h3>{member.role}</h3>
                                            <p>{member.name}</p>
                                        </div>
                                        <div className={styles.socials}>
                                            {member.socials.map((social, socialIndex) => (
                                                <Link href={social.url} key={socialIndex}>
                                                    <Image src={social.icon} alt={`${social.name} Icon`} width={23} height={23} />
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Render Founding Members */}
                <div>
                    <h2>Our Team (Founding Members)</h2>
                    <div className={styles.team}>
                        {foundingMembers.map((member, index) => (
                            <div className={styles.pic} key={index}>
                                <div className={styles.details} ref={(el) => {
                                    if (el) detailsRef.current[index + managerialTeam.length + operationalTeam.length + technicalTeam.length + trusteeTeam.length] = el;
                                }}>
                                    <div
                                        style={{
                                            width: '400px',
                                            height: '400px',
                                            marginBottom: '20px',
                                            backgroundImage: `url(${member.image})`,
                                            backgroundPosition: member.bgPosition || 'center',
                                            backgroundSize: 'cover',
                                            borderTopLeftRadius: '3px',
                                            borderTopRightRadius: '3px',
                                            backgroundRepeat: 'no-repeat',
                                        }}
                                    ></div>
                                    <div className={styles.info}>
                                        <div className={styles.name}>
                                            <h3>{member.role}</h3>
                                            <p>{member.name}</p>
                                        </div>
                                        <div className={styles.socials}>
                                            {member.socials.map((social, socialIndex) => (
                                                <Link href={social.url} key={socialIndex}>
                                                    <Image src={social.icon} alt={`${social.name} Icon`} width={23} height={23} />
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Export the component as default
export default Picture;
