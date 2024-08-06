"use client";
import React, { useState } from 'react';
import styles from './team_text.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Join: React.FC = () => {

    return (
        <div className={styles.container}>
            <h3>Would you love to join our vibrant team?</h3>
            <Link href="https://forms.gle/xzP3CLSgd9cAS2EQ9" className={styles.volunteer}>Volunteer Now</Link>
        </div>
    );
}

export default Join;
