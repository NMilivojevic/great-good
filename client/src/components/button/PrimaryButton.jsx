import styles from "./primary-button.module.css";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";

const PrimaryButton = ({ label, onClick, style, disabled, tooltipText }) => {
    return tooltipText ? (
        <Tooltip
            placement="top"
            overlay={tooltipText}
            overlayClassName={styles.customTooltip}
            showArrow={false}
            trigger={["hover"]}
        >
            <button
                className={styles.button}
                onClick={onClick}
                style={style}
                disabled={disabled}
            >
                {label}
            </button>
        </Tooltip>
    ) : (
        <button
            className={styles.button}
            onClick={onClick}
            style={style}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default PrimaryButton;
