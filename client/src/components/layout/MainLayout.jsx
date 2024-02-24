import styles from "../../styles/layout/layout.module.css";

const MainLayout = ({ children }) => {
    return <div className={styles.mainLayout}>{children}</div>;
};

export default MainLayout;
