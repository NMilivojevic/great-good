import styles from "../../styles/button/button.module.css";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";

const PrimaryButton = ({
    label,
    onClick,
    style,
    disabled,
    tooltipText,
    hasTooltip,
}) => {
    return hasTooltip ? (
        <Tooltip
            placement="top"
            overlay={tooltipText}
            showArrow={false}
            trigger={["hover"]}
        >
            <div>
                <button
                    className={styles.primaryButton}
                    onClick={onClick}
                    style={style}
                    disabled={disabled}
                >
                    {label}
                </button>
            </div>
        </Tooltip>
    ) : (
        <button
            className={styles.primaryButton}
            onClick={onClick}
            style={style}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default PrimaryButton;
