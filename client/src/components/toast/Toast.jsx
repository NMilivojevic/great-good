import { useEffect } from "react";
import styles from "../../styles/toast/toast.module.css";
import { ACTIONS, useAppContext } from "../../context/Context";

const Toast = ({ status, message }) => {
    const { dispatch } = useAppContext();

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch({ type: ACTIONS.SET_TOAST, payload: null });
        }, 4000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className={styles.toastContainer}>
            <div
                className={`${styles.toast} ${
                    status === "error" && styles.toastError
                } ${status === "success" && styles.toastSuccess} ${
                    status === "info" && styles.toastInfo
                }`}
            >
                <p className={styles.toastMessage}>{message}</p>
            </div>
        </div>
    );
};

export default Toast;
