import styles from "../../styles/animations/animations.module.css"; // Import CSS module for StyledBackground

const WelcomeText = ({ label }) => {
    return <h1 className={styles.welcomeText}>{label}</h1>;
};

export default WelcomeText;
