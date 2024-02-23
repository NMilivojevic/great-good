import { useAppContext } from "../../context/Context";
import styles from "./info.module.css";

const Info = () => {
    const { state } = useAppContext();
    const { balance, totalSupply } = state;
    return (
        <div className={styles.infoContainer}>
            <div className={styles.box}>
                <p>Your balance:</p> <p>{balance} MATIC</p>
            </div>
            <div className={styles.box}>
                <p>Total supply:</p> <p>{totalSupply} MATIC</p>
            </div>
        </div>
    );
};

export default Info;
