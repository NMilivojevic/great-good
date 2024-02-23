import { serializeError } from "eth-rpc-errors";
import { ethers } from "ethers";
import { useAppContext, ACTIONS } from "../context/Context";
import useBalance from "./use-balance";
import useTotalSupply from "./use-total-supply";

const useStake = () => {
    const { state, dispatch } = useAppContext();
    const { fetchBalance } = useBalance();
    const { fetchTotalSupply } = useTotalSupply();
    const { amount, minStakeAmount, contract } = state;

    const handleStake = async () => {
        if (!amount || amount < minStakeAmount) {
            dispatch({ type: ACTIONS.SET_ERROR, payload: true });
            dispatch({ type: ACTIONS.SET_TOAST, payload: true });
            dispatch({
                type: ACTIONS.SET_MESSAGE,
                payload: "Amount is less than minimum stake amount!",
            });
            return;
        }

        dispatch({ type: ACTIONS.SET_LOADING, payload: true });

        try {
            const tx = await contract.stake({
                value: ethers.utils.parseUnits(amount.toString(), 18),
            });
            const response = await tx.wait();

            if (response) {
                fetchBalance();
                fetchTotalSupply();
                dispatch({ type: ACTIONS.SET_SUCCESS, payload: true });
                dispatch({ type: ACTIONS.SET_ERROR, payload: false });
                dispatch({ type: ACTIONS.SET_TOAST, payload: true });
                dispatch({
                    type: ACTIONS.SET_MESSAGE,
                    payload: "Staking Successful!",
                });
            }
        } catch (error) {
            const err = serializeError(error);
            if (err.data.code === -32000) {
                dispatch({ type: ACTIONS.SET_ERROR, payload: true });
                dispatch({ type: ACTIONS.SET_SUCCESS, payload: false });
                dispatch({ type: ACTIONS.SET_TOAST, payload: true });
                dispatch({
                    type: ACTIONS.SET_MESSAGE,
                    payload: "Insufficient funds.",
                });
                return;
            }
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
                payload: "Staking Failed!",
            });
        } finally {
            dispatch({ type: ACTIONS.SET_LOADING, payload: false });
            dispatch({ type: ACTIONS.SET_AMOUNT, payload: "" });
        }
    };

    return { handleStake };
};

export default useStake;
