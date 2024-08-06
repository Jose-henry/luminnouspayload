"use client";
import Link from 'next/link';
import styles from './project.module.css';
import Image from 'next/image';
import { Suspense } from "react"
import Default from '@/assets/default.jpg'


export const experimental_ppr = true



export const customLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};


interface projectProps{
  projectsrc1?: string; 
  projectsrc2?: string; 
  projectsrc3?: string; 
  projectblurData1?:string;
  projectblurData2?:string;
  projectblurData3?:string;

}

export default function Project({projectsrc1, projectsrc2, projectsrc3, projectblurData1, projectblurData2, projectblurData3,}: projectProps) {
  /* const [images, setImages] = useState<any[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchImages() {
      try {
        const fetchedImages = await projectImages();
        setImages(fetchedImages);
        setIsLoaded(true);
      } catch (err) {
        console.error('Error fetching project images:', err);
      }
    }
    fetchImages();
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>; // You can replace this with a proper loading spinner or placeholder
  } blackout', 'pretty', 'teach'
 */
  return (
    <div className={styles.main_container}>
      <div className={styles.line}></div>
      <div className={styles.text_div}>
        <h2>Our Projects</h2>
        <p className='text-center text-[#25161b] text-[17px]'>See the steps we are taking towards lighting up the dark places!</p>
        <Link href="/projects" className={styles.view}>See all projects</Link>
      </div>
      <div className={styles.card}>
        <div style={{ position: 'relative' }}>
        <Suspense>
          <Image
            src={projectsrc1 ? projectsrc1 : Default}
            alt="blackout"
            fill
            quality={100}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            placeholder='blur'
            blurDataURL={projectblurData1 ? projectblurData1 : ''}
            loader={customLoader}
          />  </Suspense>
        </div>
        <div className={styles.first_project}>
          <div>
            <h4>COMMUNITY</h4>
            <h3>Gebrefu in the Dark: Two Decades Without Electricity</h3>
            <p>Nestled in the heart of Badagry, the Gebrefu Community has endured an astonishing 24 years without access to electricity. 
              This prolonged blackout has cast long shadows over the lives of its residents, affecting education, 
              healthcare, and economic opportunities. Yet, amidst the darkness, there is a growing spark of hope.</p>
          </div>
          <Link href="/projects/article2" className={styles.project}>Read more</Link>
        </div>
      </div>
      <div className={`${styles.card} ${styles.card3}`}>
      <Suspense>
        <Image
          src={projectsrc2 ? projectsrc2 : Default}
          alt="pretty"
          fill
          quality={100}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          placeholder='blur'
          blurDataURL={projectblurData2 ? projectblurData2 : ''}
          loader={customLoader}
        />  </Suspense>
      </div>
      <div className={`${styles.card} ${styles.card4}`}>
        <div style={{ position: 'relative' }}>
        <Suspense>
          <Image
            src={projectsrc3 ? projectsrc3 : Default}
            alt="teach"
            fill
            quality={100}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            placeholder='blur'
            blurDataURL={projectblurData3 ? projectblurData3 : ''}
            loader={customLoader}
          />  </Suspense>
        </div>
        <div className={styles.second_project}>
          <div>
            <h4>EDUCATION</h4>
            <h3>Empowering Young Minds on Solar Energy</h3>
            <p>This program is dedicated to educating young children and students about the transformative power of solar energy. Through engaging workshops, hands-on activities, and innovative projects, we aim to inspire the next generation to embrace solar energy solutions.</p>
          </div>
          <Link href="/projects/article3" className={styles.project}>Read more</Link>
        </div>
      </div>
    </div>
  );
}
