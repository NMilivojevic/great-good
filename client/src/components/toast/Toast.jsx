import React, { useEffect } from "react";
import styles from "./toast.module.css";
import { ACTIONS, useAppContext } from "../../context/Context";

const Toast = ({ status, message }) => {
    const { dispatch } = useAppContext();
    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch({ type: ACTIONS.SET_TOAST, payload: null });
        }, 6000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className={styles.toastContainer}>
            <div
                className={styles.toast}
                style={{
                    background:
                        status === "success"
                            ? "#28a745"
                            : status === "error"
                            ? "#dc3545"
                            : "rgba(88, 125, 255, 0.5)",
                }}
            >
                <p
                    style={{
                        color: "white",
                        fontWeight: "bold",
                    }}
                >
                    {message}
                </p>
            </div>
        </div>
    );
};

export default Toast;
