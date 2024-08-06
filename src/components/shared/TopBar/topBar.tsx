'use client';
import Image from "next/image";
import styles from "./topBar.module.css"; // Import CSS module
import NavBar from "@/components/shared/Navbar/navbar";
import Link from "next/link";

const Topbar: React.FC = () => {
    return (
        <div className={styles.topbarContainer}>
            <Link href="/">
            <div className={styles.logoContainer}>
                <div className="flex items-center gap-[10px] relative">
                    <Image
                        src="/assets/try.svg"
                        width={35}
                        height={35}
                        quality={100}
                        alt="Logo icon"
                        className="rounded-[3px] absolute"
                    />
                    <h3 className="text-[#622D25] font-bold text-[18px] leading-5 pl-[44px]">Luminous Life Foundation</h3>
                </div>
            </div>
            </Link>
            <NavBar/>
        </div>
    );
}

export default Topbar;
