'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import styles from './text1.module.css';
import Link from 'next/link';

function Text1() {
    const [highlightIndex, setHighlightIndex] = useState<number | null>(null);
    const imgRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [selectedImage, setSelectedImage] = useState<string | null>(null); 
    const [showOverlay, setShowOverlay] = useState(false); 


    const handleHighlight = (index: number) => {
        // Highlight and scroll only if within the .pic_slide > div
        if (index >= 0 && index < imgRefs.current.length) {
            const imgElement = imgRefs.current[index];
            if (imgElement) {
                imgElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setHighlightIndex(index);
                setTimeout(() => {
                    setHighlightIndex(null);
                }, 2000); // Remove the overlay after 2 seconds
            }
        }
    };

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, index: number) => {
        event.preventDefault();
        handleHighlight(index);
    };

    const handleGoBack = () => {
        window.history.back(); // Navigate back using browser's history
    };

    
    const pics = [
        "/assets/story3.jpg",
        "/assets/story4.jpg",
        "/assets/story5.jpg",
        "/assets/story8.mp4",
        "/assets/story1.jpg",
        "/assets/story6.mp4",
        "/assets/story2.jpg",
        "/assets/story7.mp4",
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
        <div className={`bg-[#fafafa] pt-[60px] pb-[80px] relative ${styles.main}`}>
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
                    <h1>Our Story: The Journey Into The Dark</h1>
                    <div className={`${styles.pic_container} shadow-2xl`}>
                        <Image src="/assets/journey.jpg" alt="Journey" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
                    </div>

                    <div className={styles.text_div}>
                        <p>In the remote villages of rural Nigeria, where darkness descends with the setting sun, lives are defined by the absence of light. Imagine a world where children struggle to study after dusk, where healthcare is limited by the setting of the sun, and where economic opportunities fade into obscurity with each passing hour of darkness. Economic opportunities, crucial for livelihoods, fade into obscurity with each passing hour after sunset, leaving communities trapped in a cycle of dependency on unpredictable energy sources.In these forgotten corners of Nigeria, the night brings not restful peace, but a stark reminder of the disparities faced by those without reliable electricity. Yet amidst these challenges, hope flickers faintly.</p>
                        <div className={styles.outline}>
                            <h3 className={styles.outline_into}>Outline:</h3>
                            <h2><Link href="#introduction" className='font-normal text-[15px] hover:text-[#24527a]'>1. Introduction</Link></h2>
                            <h2><Link href="#problem" className='font-normal text-[15px] hover:text-[#24527a]'>2. <span className='font-semibold'>The Problem:</span> Life Without Light</Link></h2>
                            <h2><Link href="#inspiration" className='font-normal text-[15px] hover:text-[#24527a]'>3. <span className='font-semibold'>The Inspiration:</span> Why We Started</Link></h2>
                            <h2><Link href="#approach" className='font-normal text-[15px] hover:text-[#24527a]'>4. <span className='font-semibold'>Our Approach:</span> Sustainable Solar Solutions</Link></h2>
                            <h2><Link href="#challenges" className='font-normal text-[15px] hover:text-[#24527a]'>5. Challenges and Learnings</Link></h2>
                            <h2><Link href="#future-vision" className='font-normal text-[15px] hover:text-[#24527a]'>6. Our Future Vision</Link></h2>
                            <h2><Link href="#conclusion" className='font-normal text-[15px] hover:text-[#24527a]'>7. Conclusion</Link></h2>
                        </div>
                        <p id='introduction'>
                            <h3>Introduction:</h3>
                            <p>Enter the Luminous Life Foundation, an organization committed to addressing the critical issue of energy poverty in rural Nigeria. With a focus on sustainable solar energy solutions, our mission is clear: to provide reliable electricity where it is desperately needed.Our efforts extend beyond the provision of light; we aim to empower communities by enabling longer study hours for children, facilitating better healthcare access through illuminated clinics, and fostering economic growth through increased productivity after sunset. Through partnerships and grassroots initiatives, we're forging a practical path toward sustainable development, where each day brings tangible improvements in quality of life and opportunities for growth.</p>
                        </p>

                        <div id="problem">
                            <h3>The Problem: </h3>
                            <p>In rural Nigeria, the absence of electricity poses multifaceted challenges that affect every aspect of daily life:</p>
                            <ul>
                                <li>
                                    <span className='font-semibold'>Impact on Daily Life: </span>Without electricity, basic tasks such as cooking, studying, and accessing healthcare become arduous. Families rely on inefficient and often hazardous alternatives like kerosene lamps or firewood, compromising health and safety.
                                </li>
                                <li>
                                    <span className='font-semibold'>Economic Consequences: </span>Productivity is severely limited after sundown, hindering economic activities crucial for livelihoods. Small businesses struggle to operate beyond daylight hours, perpetuating cycles of poverty and dependency.
                                </li>
                                <li>
                                    <span className='font-semibold'>Environmental Impact: </span>Traditional energy sources contribute to deforestation and indoor air pollution, exacerbating environmental degradation and public health risks.
                                </li>
                                <li>
                                    <span className='font-semibold'>Electrification Rate: </span>Nigeria has the lowest access to electricity globally, with about 92 million persons out of the country’s 200 million population lacking access to power, the Energy Progress Report 2022 released by Tracking SDG 7, has revealed.
                                </li>
                                <li>
                                    <span className='font-semibold'>Educational Impact: </span>A significant number of school-age children in unelectrified regions face challenges in studying after dark, impacting their academic performance and future opportunities.
                                </li>
                                <li>
                                    <span className='font-semibold'>Case study: </span><p>Nestled deep in rural Nigeria, the communities of Gberefu and Yovolan in Gbadagry, Lagos, have long endured life without electricity. Generations have relied on dim candlelight and intermittent diesel-powered generators for essential needs. In 2024, the Luminous Life Foundation intervened with a transformative initiative.</p>
                                </li>
                            </ul>
                        </div>

                        <div id="inspiration">
                            <h3>The Inspiration:</h3>
                            <div className='flex flex-col gap-3'>
                                <p>The Luminous Life Foundation was born from a vision rooted in firsthand experiences and a deep-seated commitment to social justice. <Link href="" className={styles.link_ref} onClick={(e) => handleClick(e, 2)}>Favour Oguibe</Link>, having witnessed the debilitating effects of energy poverty in rural Nigeria, envisioned an organization that could bridge the gap between technological advances and underserved communities. Inspired by the belief that access to electricity is not a privilege but a fundamental right, the foundation was established to bring sustainable energy solutions to regions where the absence of light perpetuates cycles of poverty and limits opportunities for growth.</p>
                                <p>Driven by a passion to improve living conditions and empower individuals, the foundation's mission transcends mere electrification. It encompasses the broader goal of fostering community resilience, enabling educational advancement, enhancing healthcare delivery, and catalyzing economic development. This vision has been the guiding force behind every initiative undertaken by the Luminous Life Foundation.</p>
                            </div>
                        </div>

                        <div id="approach">
                            <h3>Approach Taken</h3>
                            <div className='flex flex-col gap-3'>
                                <p>Our approach to alleviating the repercussions of electricity poverty in Lagos communities involved several strategic steps:</p>
                                <ul>
                                    <li><span className='font-semibold'>Raising Awareness and Fundraising:</span>
                                    We began by raising awareness about the challenges faced due to electricity poverty in these communities. Through advocacy and outreach efforts, we highlighted the urgent need for reliable energy solutions. Simultaneously, we solicited funds from various sources to support our initiative.</li>
                                    <li>
                                    <span className='font-semibold'>Procurement of Solar Lamps:</span>
                                    With the funds secured, we purchased 100 solar lamps from <Link href="" className={styles.link_ref} onClick={(e) => handleClick(e, 0)}>Holsten Boseen</Link>, a reputable company in China specializing in solar technology. Their commitment to quality and efficiency aligned perfectly with our mission to provide sustainable solutions.
                                    </li>
                                    <li>
                                    <span className='font-semibold'>Community Engagement in Gbadagry:</span>
                                    Understanding the importance of community involvement, we visited Gberefu and Yovoyan communities in Gbadagry: <Link href="" className={styles.link_ref} onClick={(e) => handleClick(e, 3)}>Video1</Link>, <Link href="" className={styles.link_ref} onClick={(e) => handleClick(e, 4)}>Picture4</Link>, <Link href="" className={styles.link_ref} onClick={(e) => handleClick(e, 7)}>Video3</Link>. This initial visit was crucial in building trust and understanding the specific needs of the residents. We shared our vision to bring light to their homes using solar lamps, which resonated deeply with the community members.
                                    </li>
                                    <li>
                                    <span className='font-semibold'>Distribution and Impact:</span>
                                    Upon the arrival of the <Link href="" className={styles.link_ref} onClick={(e) => handleClick(e, 1)}>solar lamps</Link>, we meticulously planned and executed their distribution within the communities. Each lamp was strategically allocated to students, ensuring they had adequate lighting to study at night. This distribution not only addressed immediate needs but also laid the groundwork for sustainable educational development.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div id="challenges">
                            <h3>Challenges and Learnings</h3>
                            <div className='mt-3'>
                                <h4>Challenges</h4>
                                <p>During our journey to alleviate electricity poverty, we encountered several formidable obstacles:</p>
                                <ul>
                                    <li>
                                        <span className='font-semibold'>Logistics: </span>Navigating the logistical complexities of transporting solar lamps from overseas suppliers to remote communities posed significant challenges. Issues such as shipping delays, customs clearance, and last-mile delivery logistics required careful planning and coordination.
                                    </li>
                                    <li>
                                        <span className='font-semibold'>Funding: </span>Securing adequate funding to purchase solar lamps and sustain our initiatives proved to be a continual challenge. We relied heavily on fundraising efforts and partnerships with donors to finance our projects effectively.
                                    </li>
                                    <li>
                                        <span className='font-semibold'>Community Trust:</span>A significant challenge was overcoming the communities’ skepticism about our motives. Past traumas involving conmen who promised aid but instead exploited and robbed them made it difficult for the residents to trust new initiatives. This necessitated a careful approach to build genuine relationships and demonstrate our commitment to their well-being.
                                    </li>
                                </ul>
                            </div>
                            <div className='mt-3'>
                                <h4>Learnings</h4>
                                <ul>
                                    <li>
                                        <span className='font-semibold'>Building Trust: </span>
                                        To address the community's skepticism, we invested time in establishing trust through consistent and transparent communication. Engaging in honest dialogues, addressing concerns openly, and demonstrating a genuine commitment to the communities' welfare were crucial in overcoming initial mistrust.
                                    </li>
                                    <li>
                                        <span className='font-semibold'>Community Involvement: </span>
                                        We involved local leaders and respected members of the community in our planning and implementation processes. Their endorsement and participation were instrumental in building credibility and fostering a collaborative spirit.
                                    </li>
                                    <li>
                                        <span className='font-semibold'>Visible Impact: </span>
                                        <p> Showing tangible results early on was key to building confidence. We emphasized quick wins, such as the immediate benefits of solar lamps for students' nighttime study, to visibly demonstrate our positive impact and reinforce our commitment to their development.</p>
                                    </li>
                                    <li>
                                        <span className='font-semibold'>Long-Term Engagement: </span>
                                        Recognizing the importance of long-term relationships, we maintained ongoing engagement with the communities through regular follow-ups and support. This sustained interaction reinforced trust and ensured the continuous success of our initiatives.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div id="future-vision" className='flex flex-col gap-3'>
                            <h3>Our Future Vision:</h3>
                            <p>
                            Looking ahead, the Luminous Life Foundation is dedicated to expanding our reach to more underserved communities. We plan to scale our successful model beyond Gbadagry to other regions in Nigeria, enhancing our logistics infrastructure to increase the volume and efficiency of solar lamp distributions. By strengthening community networks and integrating feedback, we aim to tailor our interventions more effectively. Additionally, we are committed to introducing advanced solar solutions and smart energy management systems to provide comprehensive and resilient energy access, further optimizing our impact.
                            </p>
                            <p>
                            Beyond addressing immediate energy needs, our vision encompasses holistic community development. We plan to expand educational programs, integrating renewable energy training with vocational and entrepreneurial skills to foster sustainable livelihoods. By collaborating with healthcare providers to power medical facilities and supporting local economic development through micro-enterprises and cooperatives, we aim to promote broader socio-economic growth. Through these integrated strategies, we aspire to empower communities, enhance quality of life, and create a foundation for sustainable development.
                            </p>
                        </div>

                        <div id='conclusion' className='flex flex-col gap-3'>
                            <h3>Conclusion</h3>
                            <p>
                                The journey of the Luminous Life Foundation from its inception to our current achievements has been one of commitment, resilience, and profound impact. From navigating logistical hurdles to building trust within communities, we have successfully distributed solar lamps to the Gberefu and Yovoyan communities, providing reliable lighting to students and transforming lives in the process. Our efforts have not only illuminated homes but also sparked hope, empowered education, and set the stage for economic opportunities. The challenges we faced taught us the importance of trust, community engagement, and sustainable development, shaping our strategies and reinforcing our mission to combat electricity poverty.
                            </p>
                            <p>
                                As we move forward, we invite you to join us in this vital cause. Whether through donations, volunteering, or spreading awareness, your involvement can make a significant difference. Together, we can continue to light up more lives, extend our reach to new communities, and pave the way for a brighter, more sustainable future for all. Support the Luminous Life Foundation and be a part of this transformative journey, where every contribution helps illuminate another path out of darkness.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.pic_slide}>
                <p><span>Gallery: </span>Picture references found here</p>
    <div>
        {[
            "/assets/story3.jpg",
            "/assets/story4.jpg",
            "/assets/story5.jpg",
            "/assets/story8.mp4",
            "/assets/story1.jpg",
            "/assets/story6.mp4",
            "/assets/story2.jpg",
            "/assets/story7.mp4",
        ].map((src, index) => (
            <div
                key={index}
                ref={(el) => {
                    imgRefs.current[index] = el;
                }}
                className={`${styles.imgDiv} ${highlightIndex === index ? styles.highlight : ''}`}
            >
                {index === 0 ? (
                    <Link href="http://holstenbossen.com/" passHref>
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
                                />
                            )}
                    </Link>
                ) : (
                    <>
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
                                onClick={() => handleImageClick(index)} 
                                className='cursor-pointer'
                            />
                        )}
                    </>
                )}
            </div>
        ))}
    </div>
</div>
            </div>
        </div>
    );
}

export default Text1;