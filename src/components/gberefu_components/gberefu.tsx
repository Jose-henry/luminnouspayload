'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import styles from './gberefu.module.css';
import Link from 'next/link';


function GberefuVisit() {
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
        "/assets/gberefu1.jpeg",
        "/assets/gberefu2.jpg",
        "/assets/gberefu4.mp4",
        "/assets/gberefu5.jpg",
        "/assets/broken-school.mp4",
        "/assets/gberefu7.jpeg",
        "/assets/gberefu8.JPG",
        "/assets/gberefu9.jpeg",
        "/assets/gberefu10.jpg",
        "/assets/gberefu11.jpeg",
        "/assets/gberefu12.jpg",
        "/assets/gberefu13.jpeg",
        "/assets/gberefu14.JPG",
        "/assets/gberefu15.jpg",
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
                    <h1>Gberefu In the Dark: Two Decades Without Electricity</h1>
                    <div className={`${styles.pic_container} shadow-2xl`}>
                        <Image src="/assets/blackout.jpg" alt="Journey" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
                    </div>

                    <div className={styles.text_div}>
                        <p>Electricity is a cornerstone of modern life, powering homes, schools, hospitals, and businesses. For many, the flick of a switch or the glow of a light bulb is taken for granted. However, for the Gebrefu Community in Badagry, Lagos, this basic amenity has been out of reach for an astonishing 24 years. This article delves into the heart of Gebrefu, a community that has endured the hardships of living without electricity, highlighting the challenges faced and the resilience shown. It also brings to light the hope sparked by the efforts of the Luminous Life Foundation, an NGO dedicated to empowering underserved communities through sustainable energy solutions. Through personal stories, community engagement, and sustainable initiatives, we explore how the introduction of solar energy is transforming lives and providing a beacon of hope for a brighter future.</p>
                        <div className={styles.outline}>
                            <h3 className={styles.outline_into}>Outline:</h3>
                            <h2><Link href="#introduction" className='font-normal text-[15px] hover:text-[#24527a]'>1. Introduction</Link></h2>
                            <h2><Link href="#background" className='font-normal text-[15px] hover:text-[#24527a]'>2. Historical Background</Link></h2>
                            <h2><Link href="#stories" className='font-normal text-[15px] hover:text-[#24527a]'>3. Personal Stories</Link></h2>
                            <h2><Link href="#hope" className='font-normal text-[15px] hover:text-[#24527a]'>4. The Spark of Hope</Link></h2>
                            <h2><Link href="#solutions" className='font-normal text-[15px] hover:text-[#24527a]'>5. Implementing Sustainable Solutions</Link></h2>
                            <h2><Link href="#future" className='font-normal text-[15px] hover:text-[#24527a]'>6. Future Prospects</Link></h2>
                            <h2><Link href="#conclusion" className='font-normal text-[15px] hover:text-[#24527a]'>7. Conclusion</Link></h2>
                        </div>
                        <p id='introduction'>
                            <h3>Introduction:</h3>
                            <div className='flex flex-col gap-3'>
                                <div>
                                    <p>Nestled in the heart of Badagry, Lagos, the Gebrefu Community stands as a stark reminder of the inequalities that persist in access to basic amenities. For 24 long years, the people of Gebrefu have lived without electricity, a reality that is almost unimaginable in the modern world. This prolonged period of darkness has cast a shadow over the community, affecting every aspect of daily life and hindering progress and development.</p>
                                </div>
                                <div>
                                    <h4>i.  Importance of Electricity</h4>
                                    <p>Electricity is more than just a convenience; it is a fundamental necessity that powers the wheels of modern life. It is essential for:</p>
                                    <ul>
                                        <li><span className='font-semibold'>Daily Life: </span>From lighting homes to powering appliances, electricity makes daily tasks easier and more efficient.</li>
                                        <li><span className='font-semibold'>Health: </span>Health facilities rely on electricity for essential equipment, refrigeration of medicines, and maintaining sanitary conditions.</li>
                                        <li><span className='font-semibold'>Education: </span>Students need light to study after dark and schools need electricity to access modern educational resources.</li>
                                        <li><span className='font-semibold'>Economic Activities: </span>Businesses and industries depend on a stable power supply to operate, create jobs, and drive economic growth.</li>
                                    </ul>
                                    <p>In Gebrefu, the absence of electricity has hindered these crucial aspects, leaving the community in a state of perpetual disadvantage.</p>
                                </div>
                                <div>
                                    <h4>ii.  Purpose of the Article</h4>
                                    <p>The purpose of this article is to shed light on the immense challenges faced by the Gebrefu Community due to the lack of electricity. It aims to highlight the day-to-day struggles and the long-term impact on health, education, and economic activities. More importantly, it seeks to bring attention to the efforts being made by the Luminous Life Foundation to ignite a spark of hope in Gebrefu. By showcasing these efforts and the resilience of the community, this article hopes to inspire action and support for sustainable solutions that can transform the lives of the people of Gebrefu.</p>
                                </div>
                            </div>
                        </p>

                        <div id="background">
                            <h3>Historical Background: </h3>
                            <div className='flex flex-col gap-3'>
                                <div>
                                    <div className='flex flex-col gap-2'>
                                        <p>Gberefu Island, also known as the Point of No Return, is a populated historical island located in Badagry, a town and local government area of Lagos State, South-Western Nigeria. Symbolized by two poles slightly slanted towards each other and facing the Atlantic Ocean, the island was a major slave port after it was opened in 1473 during the Trans-Atlantic Slave Trade era. According to Nigerian historians, as many as 3 million slaves were believed to have been shipped to the Caribbean and Americas between 1518 and 1880 from the island.</p>
                                        <p>The island is headed by two chiefs, both crowned by the Akran of Badagry Kingdom: Chief Yovoyan (The Duheto of Badagry Yovoyan/Gbragada) and the late Chief Najeemu (The Numeto of Badagry Gberefu). The first settlers and real landlords of the island are two Ewe communities, Gbragada and Kofeganme (Yovoyan). The Ewes were originally salt merchants and seasoned fishermen from Keta, but by the late 18th and early 19th centuries, the majority had become fishermen and farmers. The island also hosts other ethnic groups, including the Egun (Ogu) and Ilajes, living in harmony with their Ewe landlords.</p>
                                    </div>
                                </div>
                                <div>
                                    <h4>i.  Timeline of Darkness</h4>
                                    <div className='flex flex-col gap-2'>
                                        <p>Despite its historical significance and vibrant community, Gberefu Island has endured an extended period without electricity. For over two decades, the community has been plunged into darkness due to a combination of factors including inadequate infrastructure development, neglect by governmental authorities, and logistical challenges associated with providing electricity to an island community.</p>
                                        <p>The lack of electricity in Gberefu can be traced back to the late 1990s when infrastructural developments in surrounding areas did not extend to the island. Over the years, attempts to bring electricity to the island have been sporadic and often unsuccessful due to bureaucratic hurdles and the high costs involved in laying underwater cables or setting up alternative power sources.</p>
                                    </div>
                                </div>
                                <div>
                                    <h4>ii.  Impact on the Commuity</h4>
                                    <p>The absence of electricity has had profound effects on various aspects of life in Gberefu:</p>
                                    <ul>
                                        <li><span className='font-semibold'>Health: </span>The lack of electricity means health facilities on the island cannot store vaccines and medicines that require refrigeration, nor can they operate essential medical equipment reliably. This has led to higher rates of preventable diseases and complications during medical emergencies.</li>
                                        <li><span className='font-semibold'>Education: </span>Students in Gberefu struggle to study after dark, relying on candlelight or kerosene lamps, which are not only inadequate but also pose health risks due to fumes. Schools lack the ability to use modern educational tools and resources that require electricity, putting students at a significant disadvantage compared to their peers in electrified areas.</li>
                                        <li><span className='font-semibold'>Local Economy: </span>The economic activities on the island, primarily fishing and farming, are severely hampered by the lack of electricity. Preservation of fish and agricultural produce is challenging without refrigeration, leading to high levels of spoilage and economic losses. Additionally, the absence of power discourages new businesses from setting up on the island, limiting economic growth and employment opportunities.</li>
                                        <li><span className='font-semibold'>Daily Life: </span>Daily tasks that require electricity, such as charging phones, powering household appliances, and lighting homes, are a constant struggle. Residents often rely on expensive and environmentally unfriendly alternatives like generators, which further strain their limited resources.</li>
                                    </ul>
                                </div>
                                <p>Despite these challenges, the people of Gberefu have shown remarkable resilience. Their enduring spirit and the recent interventions by organizations like the Luminous Life Foundation are beginning to kindle a spark of hope in this community long shrouded in darkness.</p>
                            </div>
                        </div>

                        <div id="stories">
                            <h3>Personal Stories:</h3>
                        </div>

                        <div id="hope">
                            <h3>The Spark of Hope:</h3>
                            <div className='flex flex-col gap-2'>
                                <p>The Luminous Life Foundation became aware of the dire situation in Gberefu through an article written by a journalist, which highlighted the state of electricity in the community. The stories of hardship and resilience from this historical island resonated deeply with our mission. We learned about the daily struggles faced by the residents, from the health risks of using kerosene lamps to the educational challenges of studying by candlelight. Determined to make a difference, we began to explore ways to bring sustainable energy solutions to Gberefu.</p>
                                <p>Our initial engagement involved several visits to the island to understand the specific needs of the community and the challenges they faced. We conducted surveys and held discussions with community leaders, residents, and local authorities to gather detailed information. These interactions provided valuable insights into the immediate and long-term needs of the community, helping us tailor our approach to effectively address their energy poverty.</p>
                            </div>
                        </div>

                        <div id="solutions">
                            <h3>Implementing Sustainable Solutions:</h3>
                            <div className='flex flex-col gap-3'>
                                <div>
                                    <div className='flex flex-col gap-2'>
                                        <p>Solar energy is an abundant and renewable resource that offers a viable solution for addressing the energy challenges faced by the Gberefu community. Given the island’s geographical location and climatic conditions, solar power is an ideal choice for sustainable energy generation. It harnesses the power of the sun, which is a reliable and inexhaustible source of energy, to provide electricity without the need for extensive infrastructure or reliance on fossil fuels. This not only reduces carbon emissions but also minimizes the environmental impact, making it a clean and green energy solution.</p>
                                        <p>Moreover, solar energy systems are modular and scalable, allowing for tailored solutions that meet the specific needs of different households and community facilities. With minimal maintenance requirements and long operational lifespans, solar energy systems offer a cost-effective and sustainable way to bring light and power to Gberefu.</p>
                                    </div>
                                </div>
                                <div className='mb-2'>
                                    <h4>i.  Project Details</h4>
                                    <p>The solar project for Gberefu was meticulously planned to ensure its success and sustainability. The project involved two main phases: planning and funding.</p>
                                    <ul className='flex flex-col gap-2'>
                                        <li><span>Planning Phase: </span>During the planning phase, the Luminous Life Foundation conducted a thorough assessment of the energy needs of the Gberefu community. This involved a visitation to the island to engage with community leaders and residents, ensuring that the project would be tailored to their specific needs. Detailed surveys and discussions provided valuable insights into the most effective locations for solar installations and the scale of the energy requirements. The planning phase also included the development of a comprehensive project plan that outlined the design and specifications of the solar energy systems, ensuring all necessary components and suppliers were identified. Additionally, the Foundation secured all required permits and approvals from local authorities, ensuring compliance with regulatory and safety standards to facilitate a smooth implementation process.</li>
                                        <li><span>Funding: </span>The funding phase was crucial for the realization of the solar project. The Luminous Life Foundation launched a series of fundraising campaigns aimed at securing financial support from donors, sponsors, and partners. These efforts were supplemented by allocating a portion of the Foundation’s budget to support the project. Establishing partnerships played a significant role in this phase; collaborations with organizations like Holstenbossen allowed the Foundation to procure solar lamps and other essential equipment at discounted rates. Local businesses and volunteers also provided logistical and technical support, contributing to the overall funding and resource pool necessary for the project's success. Through these combined efforts, the Foundation successfully raised the required funds to move forward with the project.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4>ii.  Distribution of Solar Lamps</h4>
                                    <p>The distribution of the 100 solar lamps was a critical component of the project and was carefully planned and executed to ensure fair and efficient distribution. Due to the limited number of solar lamps, priority was given to students in the community to aid their studies. The process involved organizing the transportation of solar lamps from Holstenbossen to Gberefu, coordinating with local volunteers and community leaders, and establishing distribution points at accessible locations. Community meetings were held to inform residents about the distribution process and usage of the solar lamps. The response from the community was overwhelmingly positive, with residents expressing gratitude for the new source of light that transformed their daily lives. The successful distribution of solar lamps not only provided immediate relief but also boosted community morale and fostered a sense of hope and optimism for the future.</p>
                                </div>
                            </div>
                        </div>

                        <div id="future">
                            <h3>Future Prospects:</h3>
                            <p>Recognizing the impact of the solar project in Gberefu, the Luminous Life Foundation sees potential for replicating this initiative in other communities facing similar challenges. We plan to conduct assessments in other underserved areas to identify those in need of sustainable energy solutions. By leveraging the experience and insights gained from the Gberefu project, we aim to develop scalable models that can be adapted to different contexts. Our goal is to create a network of empowered communities with access to clean and reliable energy, thereby contributing to broader efforts to alleviate energy poverty and promote sustainable development.</p>
                        </div>

                        <div id='conclusion'>
                            <h3>Conclusion</h3>
                            <div className='flex flex-col gap-2'>
                                <p>The journey of the Gberefu community from darkness to light is a testament to resilience, hope, and the transformative power of sustainable energy. Overcoming 24 years without electricity, the community has embraced solar energy solutions, significantly improving their quality of life. The Luminous Life Foundation's efforts have not only provided immediate relief but have also laid the groundwork for long-term sustainable development.</p>
                                <p>We encourage readers to support this cause, whether through donations, volunteering, or spreading awareness. Your contributions can help extend the reach of this initiative, bringing light and hope to more communities in need.</p>
                                <p>Reflecting on Gberefu's story highlights the importance of community resilience and the pivotal role that sustainable energy plays in transforming lives. By empowering communities with clean and reliable energy, we can pave the way for a brighter and more sustainable future for all.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.pic_slide}>
                <p><span>Gallery: </span>Picture references found here</p>
    <div>
        {[
            "/assets/gberefu1.jpeg",
            "/assets/gberefu2.jpg",
            "/assets/gberefu4.mp4",
            "/assets/gberefu5.jpg",
            "/assets/broken-school.mp4",
            "/assets/gberefu7.jpeg",
            "/assets/gberefu8.JPG",
            "/assets/gberefu9.jpeg",
            "/assets/gberefu10.jpg",
            "/assets/gberefu11.jpeg",
            "/assets/gberefu12.jpg",
            "/assets/gberefu13.jpeg",
            "/assets/gberefu14.JPG",
            "/assets/gberefu15.jpg",
        ].map((src, index) => (
            <div
                key={index}
                ref={(el) => {
                    imgRefs.current[index] = el;
                }}
                className={`${styles.imgDiv} ${highlightIndex === index ? styles.highlight : ''}`}
                onClick={() => handleImageClick(index)} 
            >
                {(
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

export default GberefuVisit;