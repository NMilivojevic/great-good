import { serializeError } from "eth-rpc-errors";
import { ethers } from "ethers";
import { ACTIONS, useAppContext } from "../context/Context";
import useBalance from "./use-balance";
import useTotalSupply from "./use-total-supply";

const useWithdraw = () => {
    const { state, dispatch } = useAppContext();
    const { fetchBalance } = useBalance();
    const { fetchTotalSupply } = useTotalSupply();
    const { amount, balance, contract } = state;

    const handleWithdraw = async () => {
        if (amount <= 0 || amount >= balance) {
            dispatch({ type: ACTIONS.SET_ERROR, payload: true });
            dispatch({ type: ACTIONS.SET_TOAST, payload: true });
            dispatch({
                type: ACTIONS.SET_MESSAGE,
                payload: "Invalid withdrawal amount.",
            });
            return;
        }
        dispatch({ type: ACTIONS.SET_LOADING, payload: true });
        try {
            const tx = await contract.withdraw(
                ethers.utils.parseUnits(amount.toString(), 18)
            );

            const response = await tx.wait();

            if (response) {
                fetchBalance();
                fetchTotalSupply();
                dispatch({ type: ACTIONS.SET_SUCCESS, payload: true });
                dispatch({ type: ACTIONS.SET_ERROR, payload: false });
                dispatch({ type: ACTIONS.SET_TOAST, payload: true });
                dispatch({
                    type: ACTIONS.SET_MESSAGE,
                    payload: "Withdrawal Successful!",
                });
            }
        } catch (error) {
            const err = serializeError(error);
            if (err.data.originalError.code === "ACTION_REJECTED") {
                dispatch({ type: ACTIONS.SET_ERROR, payload: true });
                dispatch({ type: ACTIONS.SET_SUCCESS, payload: false });
                dispatch({ type: ACTIONS.SET_TOAST, payload: true });
                dispatch({
                    type: ACTIONS.SET_MESSAGE,
                    payload: "User rejected the transaction.",
                });
                return;
            }
            dispatch({ type: ACTIONS.SET_ERROR, payload: true });
            dispatch({ type: ACTIONS.SET_SUCCESS, payload: false });
            dispatch({ type: ACTIONS.SET_TOAST, payload: true });
            dispatch({
                type: ACTIONS.SET_MESSAGE,
                payload: "Withdrawal Failed!",
            });
        } finally {
            dispatch({ type: ACTIONS.SET_LOADING, payload: false });
            dispatch({ type: ACTIONS.SET_AMOUNT, payload: "" });
        }
    };

    return { handleWithdraw };
};

export default useWithdraw;
