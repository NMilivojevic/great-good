import { useCallback } from "react";
import { ACTIONS, useAppContext } from "../context/Context";
import { baseUrl } from "../utils/utils";

const useBalance = () => {
    const { state, dispatch } = useAppContext();
    const { account } = state;

    const fetchBalance = useCallback(async () => {
        dispatch({ type: ACTIONS.SET_LOADING, payload: true });
        try {
            const response = await fetch(`${baseUrl}/balance/${account}`);
            const data = await response.json();
            dispatch({ type: ACTIONS.SET_BALANCE, payload: data.balance });
        } catch (error) {
            console.error("Error fetching balance:", error);
        } finally {
            dispatch({ type: ACTIONS.SET_LOADING, payload: false });
        }
    }, [account, dispatch]);

    return { fetchBalance };
};

export default useBalance;
