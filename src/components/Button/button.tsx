"use client";
import React from "react";
import styles from "./button.module.css"; // Import CSS module

interface Props {
    btnText: string;
}

const StyledButton: React.FC<Props> = ({ btnText }) => {
    return (
        <div className={styles.a}>
            <button className={`${styles.btn} ${styles.btn1}`}>{btnText}</button>
            <button className={`${styles.btn} ${styles.btn2}`} title="button"></button>
        </div>
    );
}

export default StyledButton;
