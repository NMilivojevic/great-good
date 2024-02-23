import React from "react";
import styles from "./welcome-text.module.css";

const WelcomeText = ({ label }) => {
    return <h1 className={styles.welcomeText}>{label}</h1>;
};

export default WelcomeText;
