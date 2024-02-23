import styles from "./main-layout.module.css"; // Import the CSS module

const MainLayout = ({ children }) => {
    return <div className={styles.layout}>{children}</div>;
};

export default MainLayout;
