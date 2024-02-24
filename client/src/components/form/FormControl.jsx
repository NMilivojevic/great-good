import styles from "../../styles/form/form.module.css";
import Input from "./Input";
import PrimaryButton from "../button/PrimaryButton";
import useStake from "../../hooks/use-stake";
import { useAppContext, ACTIONS } from "../../context/Context";
import useWithdraw from "../../hooks/use-withdraw";
import { REGEX_ONLY_DOTS_AND_NUMBERS } from "../../utils/utils";

const FormControl = () => {
    const { state, dispatch } = useAppContext();
    const { handleStake } = useStake();
    const { handleWithdraw } = useWithdraw();

    const { amount, minStakeAmount, balance, inputError, message } = state;

    const stakeButtonDisabled =
        amount === "" || (amount !== "" && amount < minStakeAmount);
    const withdrawButtonDisabled = amount >= balance || amount === "";

    const handleOnChange = (e) => {
        const input = e.target.value;
        const regex = REGEX_ONLY_DOTS_AND_NUMBERS;

        if (regex.test(input)) {
            dispatch({
                type: ACTIONS.SET_AMOUNT,
                payload: input,
            });
            dispatch({
                type: ACTIONS.SET_INPUT_ERROR,
                payload: false,
            });
            return;
        }
        if (amount === "") {
            dispatch({
                type: ACTIONS.SET_INPUT_ERROR,
                payload: true,
            });
            dispatch({
                type: ACTIONS.SET_MESSAGE,
                payload: "Please enter a valid number.",
            });
            return;
        }
    };

    return (
        <>
            <div className={styles.formContainer}>
                <Input
                    placeholder="Enter amount"
                    additionalClass={inputError}
                    value={amount}
                    onChange={handleOnChange}
                />
                {inputError ? (
                    <span className={styles.formErrorText}>{message}</span>
                ) : (
                    <span className={styles.formHelperText}>
                        Minimum stake amount is {minStakeAmount} MATIC
                    </span>
                )}
            </div>
            <div className={styles.formCtaContainer}>
                <PrimaryButton
                    onClick={handleStake}
                    label="Stake"
                    style={{ width: "6.25rem" }}
                    disabled={stakeButtonDisabled}
                    tooltipText="Stake amount must be greater than minimum stake amount."
                    hasTooltip={stakeButtonDisabled && amount !== ""}
                />
                <PrimaryButton
                    onClick={handleWithdraw}
                    label="Withdraw"
                    style={{ width: "6.25rem" }}
                    disabled={withdrawButtonDisabled}
                    tooltipText="Insufficient balance."
                    hasTooltip={withdrawButtonDisabled && amount !== ""}
                />
            </div>
        </>
    );
};

export default FormControl;
