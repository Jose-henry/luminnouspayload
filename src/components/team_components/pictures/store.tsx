"use client";
import React, { useState } from 'react';
import styles from './pictures.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Picture: React.FC = () => {

    return (
        <div className={styles.container}>

            <div className={styles.team_div}>
                <div>
                    <h2>Our Team (Managerial)</h2>
                    <div className={styles.team}>

                        <div className={styles.pic1}>
                            <div className={styles.details}>
                            <div style={{
                                width: '400px',
                                height: '400px',
                                marginBottom: '20px',
                                backgroundImage: 'url("/assets/Favour.jpg")',
                                backgroundPosition: 'center bottom -140px',
                                backgroundSize: 'cover',
                                borderTopLeftRadius: '3px',
                                borderTopRightRadius: '3px',
                                backgroundRepeat: 'no-repeat',
                            }}></div>
                                <div className={styles.info}>
                                    <div className={styles.name}>
                                        <h3>Founder</h3>
                                        <p>Favour Oguibe</p>
                                    </div>
                                    <div className={styles.socials}>
                                        <Link href="https://www.linkedin.com/in/favour-oguibe-0a4081195/">
                                            <Image src="/assets/_linkedin.svg" alt="Linkedin Icon" width={23} height={23}></Image>
                                        </Link>
                                        <Link href="https://www.instagram.com/_oguibe?igsh=MWc4aTQ3cG5kdXpnNg==">
                                            <Image src="/assets/_instagram.svg" alt="Instagram Icon" width={20} height={20}></Image>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.pic1}>
                            <div className={styles.details}>
                            <div style={{
                                width: '400px',
                                height: '400px',
                                marginBottom: '20px',
                                backgroundImage: 'url("/assets/OJ.jpg")',
                                backgroundPosition: 'center bottom -140px',
                                backgroundSize: 'cover',
                                borderTopLeftRadius: '3px',
                                borderTopRightRadius: '3px',
                                backgroundRepeat: 'no-repeat',
                            }}></div>
                                <div className={styles.info}>
                                    <div className={styles.name}>
                                        <h3>Co-Founder</h3>
                                        <p>David OJ</p>
                                    </div>
                                    <div className={styles.socials}>
                                        <Link href="">
                                            <Image src="/assets/_linkedin.svg" alt="Linkedin Icon" width={23} height={23}></Image>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.pic1}>
                            <div className={styles.details}>
                            <div style={{
                                width: '400px',
                                height: '400px',
                                marginBottom: '20px',
                                backgroundImage: 'url("/assets/Nelson.jpg")',
                                backgroundPosition: 'center bottom -170px',
                                backgroundSize: 'cover',
                                borderTopLeftRadius: '3px',
                                borderTopRightRadius: '3px',
                                backgroundRepeat: 'no-repeat',
                            }}></div>
                                <div className={styles.info}>
                                    <div className={styles.name}>
                                        <h3>Administrative Head</h3>
                                        <p>Nelson Elijah</p>
                                    </div>
                                    <div className={styles.socials}>
                                        <Link href="http://www.linkedin.com/in/nelson-elijah">
                                            <Image src="/assets/_linkedin.svg" alt="Linkedin Icon" width={23} height={23}></Image>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>


                <div>
                    <h2>Our Team (Operational)</h2>
                    <div className={styles.team}>

                        <div className={styles.pic4}>
                                <div className={styles.details}>
                                <div style={{
                                    width: '400px',
                                    height: '400px',
                                    marginBottom: '20px',
                                    backgroundImage: 'url("/assets/Stephanie.jpg")',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    borderTopLeftRadius: '3px',
                                    borderTopRightRadius: '3px',
                                    backgroundRepeat: 'no-repeat',
                                }}></div>
                                <div className={styles.info}>
                                    <div className={styles.name}>
                                        <h3>General Secretary</h3>
                                        <p>Stephanie Nwangwu</p>
                                    </div>
                                    <div className={styles.socials}>
                                        <Link href="https://www.linkedin.com/in/stephanie-adaeze-nwangwu-703ba5195">
                                            <Image src="/assets/_linkedin.svg" alt="Linkedin Icon" width={23} height={23}></Image>
                                        </Link>
                                        <Link href="https://www.instagram.com/s.wangwu?igsh=cGlhb29mbGQ3YTE2&utm_source=qr">
                                            <Image src="/assets/_instagram.svg" alt="Instagram Icon" width={20} height={20}></Image>
                                        </Link>
                                    </div>
                                </div>
                                </div>
                        </div>

                        <div className={styles.pic5}>
                            <div className={styles.details}>
                            <div style={{
                                width: '400px',
                                height: '400px',
                                marginBottom: '20px',
                                backgroundImage: 'url("/assets/Joba.jpg")',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                borderTopLeftRadius: '3px',
                                borderTopRightRadius: '3px',
                                backgroundRepeat: 'no-repeat',
                            }}></div>
                                <div className={styles.info}>
                                    <div className={styles.name}>
                                        <h3>Financial Secretary</h3>
                                        <p>Joba</p>
                                    </div>
                                    <div className={styles.socials}>
                                        <Link href="http://linkedin.com/in/elisalome-oyefusi">
                                            <Image src="/assets/_linkedin.svg" alt="Linkedin Icon" width={23} height={23}></Image>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.pic11}>
                            <div className={styles.details}>
                            <div style={{
                                width: '400px',
                                height: '400px',
                                marginBottom: '20px',
                                backgroundImage: 'url("/assets/Ola.jpg")',
                                backgroundPosition: 'center bottom -120px',
                                backgroundSize: 'cover',
                                borderTopLeftRadius: '3px',
                                borderTopRightRadius: '3px',
                                backgroundRepeat: 'no-repeat',
                            }}></div>
                                <div className={styles.info}>
                                    <div className={styles.name}>
                                        <h3>Social Media Manager</h3>
                                        <p>Ola</p>
                                    </div>
                                    <div className={styles.socials}>
                                        <Link href="https://www.linkedin.com/in/ola-oluwa-salami-55a9911a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                                            <Image src="/assets/_linkedin.svg" alt="Linkedin Icon" width={23} height={23}></Image>
                                        </Link>
                                        <Link href="https://www.instagram.com/olaxart?igsh=MTh6dDY5ZXNvdWYyZw==">
                                            <Image src="/assets/_instagram.svg" alt="Instagram Icon" width={20} height={20}></Image>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div>
                    <h2>Our Team (Technical)</h2>
                    <div className={styles.team}>


                        <div className={styles.pic6}>
                                    <div className={styles.details}>
                                    <div style={{
                                        width: '400px',
                                        height: '400px',
                                        marginBottom: '20px',
                                        backgroundImage: 'url("/assets/Joseph.jpg")',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        borderTopLeftRadius: '3px',
                                        borderTopRightRadius: '3px',
                                        backgroundRepeat: 'no-repeat',
                                    }}></div>
                                <div className={styles.info}>
                                    <div className={styles.name}>
                                        <h3>Software Engineer</h3>
                                        <p>Joseph Henry</p>
                                    </div>
                                    <div className={styles.socials}>
                                        <Link href="https://www.linkedin.com/in/joseph-c-henry/">
                                            <Image src="/assets/_linkedin.svg" alt="Linkedin Icon" width={23} height={23}></Image>
                                        </Link>
                                    </div>
                                </div>
                                    </div>
                        </div>

                        <div className={styles.pic7}>
                                <div className={styles.details}>
                                <div style={{
                                    width: '400px',
                                    height: '400px',
                                    marginBottom: '20px',
                                    backgroundImage: 'url("/assets/Fortune.jpg")',
                                    backgroundPosition: 'center bottom -170px',
                                    backgroundSize: 'cover',
                                    borderTopLeftRadius: '3px',
                                    borderTopRightRadius: '3px',
                                    backgroundRepeat: 'no-repeat',
                                }}></div>
                                <div className={styles.info}>
                                    <div className={styles.name}>
                                        <h3>IT Specialist</h3>
                                        <p>Fortune Oguibe</p>
                                    </div>
                                    <div className={styles.socials}>
                                        <Link href="https://www.linkedin.com/in/fortune-oguibe-024a5a198/">
                                            <Image src="/assets/_linkedin.svg" alt="Linkedin Icon" width={23} height={23}></Image>
                                        </Link>
                                    </div>
                                </div>
                                </div>
                        </div>


                        <div className={styles.pic8}>
                                <div className={styles.details}>
                                <div style={{
                                    width: '400px',
                                    height: '400px',
                                    marginBottom: '20px',
                                    backgroundImage: 'url("/assets/Priestly.jpg")',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    borderTopLeftRadius: '3px',
                                    borderTopRightRadius: '3px',
                                    backgroundRepeat: 'no-repeat',
                                }}></div>
                                <div className={styles.info}>
                                    <div className={styles.name}>
                                        <h3>Product Designer</h3>
                                        <p>Priestly</p>
                                    </div>
                                    <div className={styles.socials}>
                                        <Link href="https://www.linkedin.com/in/priestly-chukwu-77632118a/">
                                            <Image src="/assets/_linkedin.svg" alt="Linkedin Icon" width={23} height={23}></Image>
                                        </Link>
                                        <Link href="https://www.instagram.com/c.h.i.nonso?igsh=MTBsZ3FzYTJ0MHZnaw==">
                                            <Image src="/assets/_instagram.svg" alt="Instagram Icon" width={20} height={20}></Image>
                                        </Link>
                                    </div>
                                </div>
                                </div>
                        </div>

                        <div className={styles.pic9}>
                                <div className={styles.details}>
                                <div style={{
                                    width: '400px',
                                    height: '400px',
                                    marginBottom: '20px',
                                    backgroundImage: 'url("/assets/Onyinye.jpg")',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    borderTopLeftRadius: '3px',
                                    borderTopRightRadius: '3px',
                                    backgroundRepeat: 'no-repeat',
                                }}></div>
                                <div className={styles.info}>
                                    <div className={styles.name}>
                                        <h3>Product Designer</h3>
                                        <p>Onyinye Anene</p>
                                    </div>
                                    <div className={styles.socials}>
                                        <Link href="https://www.linkedin.com/in/onyinye-anene-547628221">
                                            <Image src="/assets/_linkedin.svg" alt="Linkedin Icon" width={23} height={23}></Image>
                                        </Link>
                                        <Link href="https://www.instagram.com/__michelle_o?igsh=MWU1bno2cWV4ZnhreA==">
                                            <Image src="/assets/_instagram.svg" alt="Instagram Icon" width={20} height={20}></Image>
                                        </Link>
                                        <Link href="https://twitter.com/onyinye__a">
                                            <Image src="/assets/_twitter.svg" alt="Twitter Icon" width={20} height={20}></Image>
                                        </Link>
                                    </div>
                                </div>
                                </div>
                        </div>

                    </div>
                </div>

                <div>
                    <h2>Our Team (Trustees)</h2>
                    <div className={styles.team}>

                        <div className={styles.pic1}>
                            <div className={styles.details}>
                            <div style={{
                                width: '400px',
                                height: '400px',
                                marginBottom: '20px',
                                backgroundImage: 'url("/assets/Gabriel.jpg")',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                borderTopLeftRadius: '3px',
                                borderTopRightRadius: '3px',
                                backgroundRepeat: 'no-repeat',
                            }}></div>
                                <div className={styles.info}>
                                    <div className={styles.name}>
                                        <h3>Senior Training Specialist</h3>
                                        <p>Gabriel Obiefule</p>
                                    </div>
                                    <div className={styles.socials}>
                                        <Link href="https://www.linkedin.com/in/chidiebere-obiefule-2967061b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                                            <Image src="/assets/_linkedin.svg" alt="Linkedin Icon" width={23} height={23}></Image>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.pic1}>
                            <div className={styles.details}>
                            <div style={{
                                width: '400px',
                                height: '400px',
                                marginBottom: '20px',
                                backgroundImage: 'url("/assets/Wale.jpg")',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                borderTopLeftRadius: '3px',
                                borderTopRightRadius: '3px',
                                backgroundRepeat: 'no-repeat',
                            }}></div>
                                <div className={styles.info}>
                                    <div className={styles.name}>
                                        <h3>Trustee</h3>
                                        <p>Wale</p>
                                    </div>
                                    <div className={styles.socials}>
                                        <Link href="">
                                            <Image src="/assets/_linkedin.svg" alt="Linkedin Icon" width={23} height={23}></Image>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div>
                    <h2>Our Team (Founding Members)</h2>
                    <div className={styles.team}>

                        <div className={styles.pic10}>
                            <div className={styles.details}>
                            <div style={{
                                width: '400px',
                                height: '400px',
                                marginBottom: '20px',
                                backgroundImage: 'url("/assets/Djones.jpg")',
                                backgroundPosition: 'center bottom -145px',
                                backgroundSize: 'cover',
                                borderTopLeftRadius: '3px',
                                borderTopRightRadius: '3px',
                                backgroundRepeat: 'no-repeat',
                            }}></div>
                                <div className={styles.info}>
                                    <div className={styles.name}>
                                        <h3>Robotics Engineer</h3>
                                        <p>David</p>
                                    </div>
                                    <div className={styles.socials}>
                                        <Link href="https://www.linkedin.com/in/olonisakin-david/">
                                            <Image src="/assets/_linkedin.svg" alt="Linkedin Icon" width={23} height={23}></Image>
                                        </Link>
                                        <Link href="https://www.instagram.com/djonesplays/">
                                            <Image src="/assets/_instagram.svg" alt="Instagram Icon" width={20} height={20}></Image>
                                        </Link>
                                        <Link href="https://x.com/DjonesEarns">
                                            <Image src="/assets/_twitter.svg" alt="Twitter Icon" width={20} height={20}></Image>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.pic11}>
                            <div className={styles.details}>
                            <div style={{
                                width: '400px',
                                height: '400px',
                                marginBottom: '20px',
                                backgroundImage: 'url("/assets/Kibe.jpg")',
                                backgroundPosition: 'center bottom -140px',
                                backgroundSize: 'cover',
                                borderTopLeftRadius: '3px',
                                borderTopRightRadius: '3px',
                                backgroundRepeat: 'no-repeat',
                            }}></div>
                                <div className={styles.info}>
                                    <div className={styles.name}>
                                        <h3>Data Analyst</h3>
                                        <p>Kibe Ume</p>
                                    </div>
                                    <div className={styles.socials}>
                                        <Link href="https://www.linkedin.com/in/kibe-ume-0bb26a199">
                                            <Image src="/assets/_linkedin.svg" alt="Linkedin Icon" width={23} height={23}></Image>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.pic11}>
                            <div className={styles.details}>
                            <div style={{
                                width: '400px',
                                height: '400px',
                                marginBottom: '20px',
                                backgroundImage: 'url("/assets/Johnson.jpg")',
                                backgroundPosition: 'center bottom 10px',
                                backgroundSize: 'cover',
                                borderTopLeftRadius: '3px',
                                borderTopRightRadius: '3px',
                                backgroundRepeat: 'no-repeat',
                            }}></div>
                                <div className={styles.info}>
                                    <div className={styles.name}>
                                        <h3>Founding Member</h3>
                                        <p>Babalola Johnson</p>
                                    </div>
                                    <div className={styles.socials}>
                                        <Link href="">
                                            <Image src="/assets/_linkedin.svg" alt="Linkedin Icon" width={23} height={23}></Image>
                                        </Link>
                                        <Link href="">
                                            <Image src="/assets/_instagram.svg" alt="Instagram Icon" width={20} height={20}></Image>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
}

export default Picture;
