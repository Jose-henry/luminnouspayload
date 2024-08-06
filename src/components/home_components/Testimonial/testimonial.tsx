"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./testimonial.module.css"; // Import CSS module
import TestimonialProp from "./testimonialProp";


const Testimonial: React.FC = () => {

    // State to manage the current testimonial index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Array of testimonial data
    const testimonials = [
        {
            name: "Joseph Henry",
            position: "Community Leader",
            location: "Lagos",
            testimony: '"Thanks to the solar panels provided by Luminous Life Foundation, our community now has reliable electricity. Children can study at night, and our health clinic operates smoothly even after dark."'
        },
        {
            name: "Sarah Adebayo",
            position: "Teacher",
            location: "Abuja",
            testimony: '"The new water pumps have transformed our school. Students can stay hydrated, and the school garden is flourishing. We are so grateful for this support."'
        },
        {
            name: "David Okafor",
            position: "Farmer",
            location: "Kano",
            testimony: '"With the irrigation system funded by Luminous Life Foundation, our crop yields have increased significantly. Our community is more food secure and our incomes have improved."'
        },
        {
            name: "Grace Eze",
            position: "Healthcare Worker",
            location: "Enugu",
            testimony: '"The medical supplies and training provided have greatly improved our clinic’s capacity to care for patients. We can now handle emergencies more effectively and save more lives."'
        }
    ];

    // Function to handle navigation to the previous testimonial
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    // Function to handle navigation to the next testimonial
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div 
        className={styles.main_container}>
            <Image src="/assets/testimonial-bg.svg" alt="testimonial background" width={450} height={450} className={styles.testimonial_bg} />
            <div className={styles.carousel_container}>
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className={`${styles.carousel_item} ${index === currentIndex ? styles.active : styles.inactive}`}
                    >
                        <TestimonialProp 
                            name={testimonial.name} 
                            position={testimonial.position} 
                            location={testimonial.location} 
                            testimony={testimonial.testimony}
                        />
                    </div>
                ))}
            </div>
            <div className={styles.navigation}>
                <div className={styles.dots}>
                    {testimonials.map((_, index) => (
                        <div
                            key={index}
                            className={`w-[12px] h-[12px] rounded-full border-[1px] border-[#622D25] ${index === currentIndex ? styles.dot_active : ""}`}
                        ></div>
                    ))}
                </div>
                <div className={styles.buttons}>
                    <div className={styles.btn} onClick={handlePrev}>
                        <Image src="/assets/left-arrow.svg" alt="Arrow" width={24} height={24} className={styles.leftBtn} />
                    </div>
                    <div className={styles.btn} onClick={handleNext}>
                        <Image src="/assets/right-arrow.svg" alt="Arrow" width={24} height={24} className={styles.rightBtn} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
