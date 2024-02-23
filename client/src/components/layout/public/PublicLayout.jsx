import React from "react";
import styles from "./public-layout.module.css";

const PublicLayout = ({ children }) => {
    return <section className={styles.layout}>{children}</section>;
};

export default PublicLayout;
