import styles from "../../styles/layout/layout.module.css";

const LoggedInLayout = ({ children }) => {
    return <section className={styles.loggedInLayout}>{children}</section>;
};

export default LoggedInLayout;
