import styles from "./primary-heading.module.css";

const PrimaryHeading = ({ label }) => {
    return <h1 className={styles.heading}>{label}</h1>;
};

export default PrimaryHeading;
