import styles from "../../styles/animations/animations.module.css"; // Import CSS module for StyledBackground

const BackgroundEffect = ({ children, loggedIn }) => {
    return (
        <div className={styles.mainWrapper}>
            {loggedIn && <div className={styles.backgroundEffect} />}
            {children}
        </div>
    );
};

export default BackgroundEffect;
