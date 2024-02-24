import styles from "../../styles/text/text.module.css";
import { useAppContext } from "../../context/Context";

const Info = () => {
    const { state } = useAppContext();
    const { balance, totalSupply } = state;
    return (
        <div className={styles.infoContainer}>
            <div className={styles.infoBox}>
                <p>Your balance:</p> <p>{balance} MATIC</p>
            </div>
            <div className={styles.infoBox}>
                <p>Total supply:</p> <p>{totalSupply} MATIC</p>
            </div>
        </div>
    );
};

export default Info;
