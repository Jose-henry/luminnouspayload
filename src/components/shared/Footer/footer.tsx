// src/components/footer/FooterDiv.tsx
'use client';
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";
import React, { useState, ChangeEvent, FormEvent } from 'react';

export default function FooterDiv() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus(result.message);
        setEmail('');
      } else {
        handleErrorResponse(result.error || 'Subscription failed');
      }

      // Clear the status message after 5 seconds
      setTimeout(() => {
        setStatus('');
        setEmail('');
      }, 5000);
    } catch (error: any) {
      handleErrorResponse(error.message);
    }
  };

  const handleErrorResponse = (message: string) => {
    if (message === 'Email already subscribed') {
      setStatus('This email is already subscribed.');
    } else if (message === 'Invalid email address') {
      setStatus('Please provide a valid email address.');
    } else if (message === 'Unauthorized: Invalid API key') {
      setStatus('Unauthorized. Please check the API key.');
    } else {
      setStatus(message || 'Subscription failed.');
    }
  };

  const clearStatus = () => {
    setStatus('');
    setEmail('');
  };

  return (
    <div className={styles.footer_container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <div className="flex items-center gap-[10px] relative">
            <Image
              src="/assets/try.svg"
              width={33}
              height={33}
              quality={100}
              alt="Logo icon"
              className="rounded-[3px] absolute"
            />
            <h3 className="text-[#622D25] font-bold text-[16px] leading-5 pl-[44px]">
              Luminous Life Foundation
            </h3>
          </div>
          <div className={styles.socials}>
            <Link href="https://www.instagram.com/luminous_life_foundation?igsh=MzBpaWVrODV4Nmxs">
              <Image src="/assets/icon2.svg" alt="Instagram" width={20} height={20} />
            </Link>
            <Link href="https://x.com/luminous_life_f?s=11">
              <Image src="/assets/icon4.svg" alt="Twitter" width={20} height={20} />
            </Link>
            <Link href="https://www.linkedin.com/company/luminous-life-foundation/">
              <Image src="/assets/icon3.svg" alt="Linkedin" width={20} height={20} />
            </Link>
            <Link href="https://youtube.com/@luminouslife_foundation?si=IMNqUNZDf1ZckxgO">
              <Image src="/assets/icon5.svg" alt="Youtube" width={20} height={20} />
            </Link>
            <a href="mailto:luminouslifefoundation@gmail.com?subject=MESSAGE%20TO%20LUMINOUS%20LIFE&body=Hello%20Luminous%20Life!">
              <Image src="/assets/icon1.svg" alt="Email" width={20} height={20} />
            </a>
          </div>
        </div>

        <div className={styles.nav}>
          <div className={styles.theLinks}>
            <Link href="/" className={styles.link}>HOME</Link>
            <Link href="/about" className={styles.link}>ABOUT</Link>
            <Link href="/team" className={styles.link}>TEAMS</Link>
            <Link href="/projects" className={styles.link}>PROJECTS</Link>
            <Link href="/contact" className={styles.link}>CONTACT</Link>
          </div>
          <p>&copy;2024 Luminous Life Foundation. All rights reserved.</p>
        </div>

        <div className={styles.newsletter}>
          <p>Subscribe to our newsletter to get our latest updates!</p>
          <form className={styles.input} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <button type="submit" className={styles.subscribe}>Subscribe</button>
          </form>
          {status && (
            <div className={styles.status_container}>
              <h4 className={styles.status}>{status}</h4>
              <button onClick={clearStatus} className={styles.clear_status}>
                ok
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
