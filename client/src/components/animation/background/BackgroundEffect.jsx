import React from "react";
import styles from "./background.module.css"; // Import CSS module for StyledBackground

const BackgroundEffect = ({ children, loggedIn }) => {
    return (
        <div className={styles.main}>
            {loggedIn && <div className={styles.background} />}
            {children}
        </div>
    );
};

export default BackgroundEffect;
