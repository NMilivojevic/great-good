import React from "react";
import styles from "./form.module.css";
import Input from "../input/Input";
import PrimaryButton from "../../button/PrimaryButton";
import useStake from "../../../hooks/use-stake";
import { useAppContext, ACTIONS } from "../../../context/Context";
import useWithdraw from "../../../hooks/use-withdraw";

const FormControl = () => {
    const { state, dispatch } = useAppContext();
    const { handleStake } = useStake();
    const { handleWithdraw } = useWithdraw();

    const { amount, minStakeAmount, balance } = state;

    const stakeButtonDisabled =
        amount === "" || (amount !== "" && amount < minStakeAmount);
    const withdrawButtonDisabled = amount >= balance || amount === "";

    return (
        <>
            <div className={styles.container}>
                <Input
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) =>
                        dispatch({
                            type: ACTIONS.SET_AMOUNT,
                            payload: e.target.value,
                        })
                    }
                />
                <span className={styles.helperText}>
                    Minimum stake amount is {minStakeAmount} MATIC
                </span>
            </div>
            <div className={styles.buttonContainer}>
                <PrimaryButton
                    onClick={handleStake}
                    label="Stake"
                    style={{ width: "100px" }}
                    disabled={stakeButtonDisabled}
                    tooltipText={
                        stakeButtonDisabled && amount !== ""
                            ? "Stake amount must be greater than minimum stake amount."
                            : null
                    }
                />
                <PrimaryButton
                    onClick={handleWithdraw}
                    label="Withdraw"
                    style={{ width: "100px" }}
                    disabled={withdrawButtonDisabled}
                    tooltipText={
                        withdrawButtonDisabled && amount !== ""
                            ? "Insufficient balance."
                            : null
                    }
                />
            </div>
        </>
    );
};

export default FormControl;
