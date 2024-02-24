import styles from "../../styles/layout/layout.module.css";

const PublicLayout = ({ children }) => {
    return <section className={styles.publicLayout}>{children}</section>;
};

export default PublicLayout;
