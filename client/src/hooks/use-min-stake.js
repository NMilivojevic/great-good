import { useCallback } from "react";
import { ACTIONS, useAppContext } from "../context/Context";
import { baseUrl } from "../utils/utils";

const useMinStakeAmount = () => {
    const { state, dispatch } = useAppContext();
    const { account, minStakeAmount } = state;

    const fetchMinStakeAmount = useCallback(async () => {
        dispatch({ type: ACTIONS.SET_LOADING, payload: true });
        try {
            const response = await fetch(`${baseUrl}/minStakeAmount`);
            const data = await response.json();
            dispatch({
                type: ACTIONS.SET_MIN_STAKE_AMOUNT,
                payload: data.minStakeAmount,
            });
        } catch (error) {
            console.error("Error fetching balance:", error);
        } finally {
            dispatch({ type: ACTIONS.SET_LOADING, payload: false });
        }
    }, [account, dispatch]);

    return { fetchMinStakeAmount };
};

export default useMinStakeAmount;
