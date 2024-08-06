import styles from "./testimonial.module.css"; // Import CSS module

interface Props {
    name: string;
    position: string;
    location: string;
    testimony: string;
}

const TestimonialProp: React.FC<Props> = ({name, position, location, testimony}) => {
    return (
        <div className={styles.testimonyProp}>
            <div className={styles.name_info}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.info}>{position}, {location}</p>
            </div>
            <p className={styles.testimony}>{testimony}</p>
        </div>
    );
}

export default TestimonialProp;
