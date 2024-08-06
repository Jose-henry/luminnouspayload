'use client'
import Link from 'next/link';
import styles from './contact_about.module.css';

const Final = () => { 
  return (
    <div className={styles.container}>
        <p>Ready to make a difference? Learn more! <Link href="/about" className={styles.link}>About us</Link></p>
    </div>
  );
}

export default Final;
