import styles from "../../styles/animations/animations.module.css";

const WelcomeText = ({ label }) => {
    return <h1 className={styles.welcomeText}>{label}</h1>;
};

export default WelcomeText;
