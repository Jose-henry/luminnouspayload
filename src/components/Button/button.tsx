"use client";
import Link from "next/link";
import styles from "./button.module.css"; // Import CSS module

interface Props {
    btnText: string;
}

const StyledButton: React.FC<Props> = ({ btnText }) => {
    return (
        <div className={styles.a}>
            <button className={`${styles.btn} ${styles.btn1}`}>{btnText}</button>
            <button className={`${styles.btn} ${styles.btn2}`}></button>
        </div>
    );
}

export default StyledButton;
