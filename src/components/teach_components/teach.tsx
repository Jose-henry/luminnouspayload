'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import styles from './teach.module.css';
import Link from 'next/link';


function Teach() {
    const [highlightIndex, setHighlightIndex] = useState<number | null>(null);
    const imgRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [selectedImage, setSelectedImage] = useState<string | null>(null); 
    const [showOverlay, setShowOverlay] = useState(false); 


    const handleHighlight = (index: number) => {
        if (index >= 0 && index < imgRefs.current.length) {
            const imgElement = imgRefs.current[index];
            if (imgElement) {
                imgElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setHighlightIndex(index);
                setTimeout(() => {
                    setHighlightIndex(null);
                }, 2000); 
            }
        }
    };

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, index: number) => {
        event.preventDefault();
        handleHighlight(index);
    };
    

    const handleGoBack = () => {
        window.history.back(); 
    };

    const pics = [
        "/assets/teach1.jpg",
        "/assets/teach2.jpg",
        "/assets/teach3.jpg",
        "/assets/teach4.mp4",
        "/assets/teach5.mp4",
        "/assets/teach6.mp4",
        "/assets/teach7.jpg",
        "/assets/teach8.jpg",
        "/assets/teach9.JPG",
        "/assets/teach10.jpg",
        "/assets/teach11.jpg",
    ];

    const handleImageClick = (index: number) => {
        console.log(`Clicked image at index ${index}`);
        setSelectedImage(pics[index]); 
        setShowOverlay(true); 
    };
    
    const handleCloseClick = () => {
        setShowOverlay(false); 
        setSelectedImage(null); 
    };

    return (
        <div className={`bg-[#fcf8f3] pt-[60px] pb-[80px] relative ${styles.main}`}>
        <div className={styles.picOverlay} style={{ display: showOverlay ? 'block' : 'none' }}>
            <div className={styles.inside_container}>
                <Image src="/assets/white_close.svg" width={25} height={25} alt="close" className='ml-auto cursor-pointer shadow-2xl' onClick={handleCloseClick} />
                <div className={styles.overlayContent}>
                    {selectedImage && (
                        <Image
                            src={selectedImage}
                            alt="Image"
                            fill
                            quality={100}
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                            className={styles.image}
                        />
                    )}
                </div>
            </div>
        </div>
            <button onClick={handleGoBack} className={styles.navigate}>
                <Image src="/assets/back.png" alt="Go Back" width={40} height={40} className='shadow-md rounded-full active:shadow-none' />
                <p>Back</p>
            </button>

            <div className={styles.main_container}>
                <div className={styles.div1}>
                    <h1>Empowering Young Minds On Solar Energy</h1>
                    <div className={`${styles.pic_container} shadow-2xl`}>
                        <Image src="/assets/teach.jpg" alt="Journey" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
                    </div>

                    <div className={styles.text_div}>
                        <p>In the face of pressing environmental challenges and energy poverty, it is crucial to equip the next generation with the knowledge and tools to drive sustainable change. Luminous Life Foundation is dedicated to harnessing the power of solar energy to provide sustainable solutions to rural communities in Nigeria. By empowering young minds with an understanding of solar energy, we aim to cultivate a generation of environmentally conscious individuals who can contribute to a brighter, more sustainable future. This project focuses on educating and inspiring the youth, fostering their creativity and innovation, and providing them with practical skills to utilize solar energy effectively. Our comprehensive approach involves educational workshops, community outreach programs, training and mentorship, and hands-on projects, all designed to instill a deep appreciation for renewable energy and its potential to transform lives.</p>
                        <div className={styles.outline}>
                            <h3 className={styles.outline_into}>Outline:</h3>
                            <h2><Link href="#introduction" className='font-normal text-[15px] hover:text-[#24527a]'>1. Introduction</Link></h2>
                            <h2><Link href="#overview" className='font-normal text-[15px] hover:text-[#24527a]'>2. Project Overview</Link></h2>
                            <h2><Link href="#workshop" className='font-normal text-[15px] hover:text-[#24527a]'>3. Educational Workshops</Link></h2>
                            <h2><Link href="#outreach" className='font-normal text-[15px] hover:text-[#24527a]'>4. Community Outreach Programs</Link></h2>
                            <h2><Link href="#future" className='font-normal text-[15px] hover:text-[#24527a]'>5. Future Prospects</Link></h2>
                            <h2><Link href="#partnership" className='font-normal text-[15px] hover:text-[#24527a]'>6. Partnerships</Link></h2>
                            <h2><Link href="#conclusion" className='font-normal text-[15px] hover:text-[#24527a]'>7. Conclusion</Link></h2>
                        </div>
                        <p id='introduction'>
                            <h3>Introduction:</h3>
                            <p>The significance of educating young minds about solar energy cannot be overstated. By introducing the youth to solar energy concepts, we can foster a generation that is more aware of and committed to sustainable practices</p>
                            <div className='flex flex-col gap-3'>
                                <div>
                                    <h4>i.  Purpose</h4>
                                    <p>Educating young people about solar energy:</p>
                                    <ul>
                                        <li>Promotes environmental stewardship by reducing reliance on fossil fuels and lowering carbon footprints.</li>
                                        <li>Encourages innovative thinking and problem-solving skills related to renewable energy.</li>
                                        <li>Equips the next generation with the knowledge to advocate for and implement sustainable energy solutions in their communities.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4>ii.  Objectives</h4>
                                    <p>Our objective is to equip the youth with the knowledge and skills needed to utilize solar energy for sustainable development. This includes:</p>
                                    <ul>
                                        <li>Providing a foundational understanding of how solar energy works and its benefits.</li>
                                        <li>Inspiring young people to pursue careers or entrepreneurial ventures in the renewable energy sector.</li>
                                        <li>Empowering youth to lead solar energy projects within their communities, fostering a sense of ownership and responsibility towards sustainable development.</li>
                                    </ul>
                                </div>
                            </div>
                        </p>

                        <div id="overview">
                            <h3>Project Overview: </h3>
                            <p>The project will focus on:</p>
                            <ul>
                                <li><span className='font-semibold'>Students: </span>Engaging school and university students through structured educational programs.</li>
                                <li><span className='font-semibold'>Young Entrepreneurs: </span>Encouraging young innovators interested in starting solar energy businesses or projects.</li>
                                <li><span className='font-semibold'>Youth in Rural Communities: </span>Providing hands-on training and resources to youth living in underserved areas to promote the adoption of solar energy solutions.</li>
                            </ul>
                        </div>

                        <div id="workshop">
                            <h3>Educational Workshops:</h3>
                            <div className='flex flex-col gap-3'>
                                <div>
                                    <h4>i.  Content</h4>
                                    <ul>
                                        <li><span className='font-semibold'>Basics of Solar Energy: </span>Introduction to solar energy, its sources, and its role in the global energy landscape.</li>
                                        <li><span className='font-semibold'>Importance and Benefits of Solar Power: </span>Understanding the environmental, economic, and social benefits of solar energy, including reducing carbon footprints and providing cost-effective energy solutions.</li>
                                        <li><span className='font-semibold'>How Solar Panels Work: </span>Detailed explanation of the technology behind solar panels, including photovoltaic cells, energy conversion, and storage.</li>
                                    </ul>
                                    <p>Videos of our teaching sessions: <Link href="" className={styles.link_ref} onClick={(e) => handleClick(e, 4)}>Video2</Link>, <Link href="" className={styles.link_ref} onClick={(e) => handleClick(e, 5)}>Video 3</Link></p>
                                </div>
                                <div>
                                    <h4>ii.  Activities</h4>
                                    <ul>
                                        <li><span className='font-semibold'>Interactive Sessions and Presentations: </span>Engage participants with dynamic presentations, discussions, and interactive activities that encourage active learning and participation.</li>
                                        <li><span className='font-semibold'>Hands-on Experiments with Solar Kit: </span>Provide practical experience by allowing participants to assemble and experiment with solar kits, enhancing their understanding of solar technology and its applications.</li>
                                        <li><span className='font-semibold'>Q&A Sessions with Solar Energy Experts: </span>Organize sessions where participants can interact with experts in the field, ask questions, and gain insights into real-world applications and careers in solar energy.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4>iii.  Resources</h4>
                                    <ul>
                                        <li><span className='font-semibold'>Solar Energy Kits: </span>Provide kits that include small solar panels, batteries, and other components necessary for hands-on experiments and projects.</li>
                                        <li><span className='font-semibold'>Educational Materials</span>Distribute pamphlets, booklets, and videos that cover key concepts in solar energy, offering additional learning resources for participants.</li>
                                        <li><span className='font-semibold'>Guest Speakers and Trainers</span>Invite professionals from the solar energy industry to share their experiences, provide training, and inspire participants with their success stories and knowledge.</li>
                                    </ul>
                                </div>
                            </div>
                            <p>Venue used for teaching: <Link href="" className={styles.link_ref} onClick={(e) => handleClick(e, 6)}>Picture4</Link></p>
                        </div>

                        <div id="outreach">
                            <h3>Outreach Programs:</h3>
                            <div className='flex flex-col gap-3'>
                                <div>
                                    <h4>i.  School Visits</h4>
                                    <ul>
                                        <li>Collaborate with school administrators and teachers to integrate solar energy workshops into the curriculum.</li>
                                        <li>Tailor workshops to different age groups and educational levels to ensure appropriate and effective learning.</li>
                                        <li>Arrange visits to local solar farms or installations to provide students with firsthand experience of solar energy applications.</li>
                                        <li>Include guided tours and interactive sessions with technicians and engineers working at these sites.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4>ii.  Solar Fairs and Exhibitions</h4>
                                    <ul>
                                        <li>Organize solar fairs and exhibitions where various solar technologies, products, and innovations can be displayed.</li>
                                        <li>Invite companies, researchers, and inventors to demonstrate their solar solutions and engage with the youth.</li>
                                        <li>Create opportunities for youth to participate in solar energy projects and competitions.</li>
                                        <li>Facilitate mentorship and guidance for participants to develop and implement their projects.</li>
                                    </ul>
                                </div>
                                <p>A picture taken during one of our outreach programs: <Link href="" className={styles.link_ref} onClick={(e) => handleClick(e, 10)}>Picture 8</Link></p>
                            </div>
                        </div>

                        <div id="future">
                            <h3>Future Prospects:</h3>
                            <p>As we look towards the future, our vision for empowering young minds through solar energy education is brimming with exciting prospects and potential. While many of the initiatives outlined are in the planning stages, our commitment to making them a reality is unwavering. We are dedicated to transforming these ideas into impactful programs that will benefit communities and foster a new generation of solar energy advocates.</p>
                        </div>

                        <div id="partnership">
                            <h3>Partnership:</h3>
                            <div className='flex flex-col gap-3'>
                                <p>We are proud to partner with Naza Agape Foundation in our mission to empower young minds through solar energy education. NAF's commitment to providing quality education, good welfare, and entrepreneurial training to vulnerable children, especially girls and women, aligns seamlessly with our goals.</p>
                                <p>Together, we have already initiated several workshops and community outreach programs, and we will continue to collaborate closely to ensure equitable access to education and resources. By combining our efforts, we aim to eliminate barriers to education and empower the next generation of leaders with the knowledge and skills needed for sustainable development and future success.</p>
                                <p>A picture of our students with one of the memebers of Naz Agape Foundation: <Link href="" className={styles.link_ref} onClick={(e) => handleClick(e, 2)}>Picture 3</Link></p>
                            </div>
                        </div>

                        <div id='conclusion'>
                            <h3>Conclusion</h3>
                            <p>The road ahead is filled with opportunities to make a meaningful impact. By empowering young minds with the knowledge and skills to harness solar energy, we are not only promoting sustainable development but also fostering a sense of responsibility and innovation among the youth. We look forward to implementing these initiatives and witnessing the transformative effects they will have on our communities. Together, we can create a brighter, more sustainable future powered by solar energy.</p>
                            <p>Picture of our coordinators: <Link href="" className={styles.link_ref} onClick={(e) => handleClick(e, 0)}>Picture 1</Link>, <Link href="" className={styles.link_ref} onClick={(e) => handleClick(e, 9)}>Picture 10</Link>, <Link href="" className={styles.link_ref} onClick={(e) => handleClick(e, 7)}>Picture 8</Link></p>
                        </div>
                    </div>
                </div>

                <div className={styles.pic_slide}>
                <p><span>Gallery: </span>Picture references found here</p>
                <div>
    {[
        "/assets/teach1.jpg",
        "/assets/teach2.jpg",
        "/assets/teach3.jpg",
        "/assets/teach4.mp4",
        "/assets/teach5.mp4",
        "/assets/teach6.mp4",
        "/assets/teach7.jpg",
        "/assets/teach8.jpg",
        "/assets/teach9.JPG",
        "/assets/teach10.jpg",
        "/assets/teach11.jpg",
    ].map((src: string, index: number) => (
        <div
            key={index}
            ref={(el) => {
                imgRefs.current[index] = el;
            }}
            className={`${styles.imgDiv} ${highlightIndex === index ? styles.highlight : ''}`}
            onClick={() => handleImageClick(index)} 
        >
            {src.endsWith('.mp4') ? (
                <video
                    controls
                    className={styles.video}
                >
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <Image
                    src={src}
                    alt={`Picture ${index + 1}`}
                    fill
                    quality={100}
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    className='cursor-pointer'
                />
            )}
        </div>
    ))}
</div>

</div>
            </div>
        </div>
    );
}

export default Teach;