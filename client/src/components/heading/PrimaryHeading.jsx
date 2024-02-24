import styles from "../../styles/text/text.module.css";

const PrimaryHeading = ({ label }) => {
    return <h1 className={styles.primaryHeading}>{label}</h1>;
};

export default PrimaryHeading;
