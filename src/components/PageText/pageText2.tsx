"use client"
import styles from "./pageText2.module.css"; // Import CSS module
import Typewriter from 'typewriter-effect';

const PageText2: React.FC = () => {
    return (
        <h2 className={styles.text}>

              <Typewriter
        options={{
          strings: ['Power Up with Solar!!!'],
          autoStart: true,
          loop: true,
        }}
      />
      </h2>
    );
}

export default PageText2;
