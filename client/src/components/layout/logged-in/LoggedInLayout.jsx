import styles from "./logged-in-layout.module.css";

const LoggedInLayout = ({ children }) => {
    return <section className={styles.layout}>{children}</section>;
};

export default LoggedInLayout;
