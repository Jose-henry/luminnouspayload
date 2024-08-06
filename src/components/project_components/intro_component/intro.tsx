'use client'    
import styles from "./intro.module.css";

export default function Intro() {
  return (
    <div className={styles.main_container}>
      <div>
        <h2>
          Projects Driving <span>Solar Solutions!</span>
        </h2>
        <div>
          <p>
            At Luminous Life Foundation, we believe in the transformative power of solar energy. Our projects are dedicated to bringing sustainable,
            sun-powered solutions to communities in need, illuminating lives and fostering progress. Explore how we&apos;re harnessing the sun&apos;s potential to drive development
            and create brighter futures for everyone.
          </p>
          <div className={styles.container}>
            <div className={styles.color}>
              <p>The gallery slideshow highlights locations we aim to impact with our solar solutions.</p>
            </div>
            <div className={styles.line}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
