import React from "react";
import styles from "./loading.module.css";

const Loading = () => {
    return (
        <div className={styles["loading-overlay"]}>
            <div className={styles["loading-spinner"]} />
        </div>
    );
};

export default Loading;
