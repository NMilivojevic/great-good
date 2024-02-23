import { useCallback } from "react";
import { ACTIONS, useAppContext } from "../context/Context";
import { baseUrl } from "../utils/utils";

const useTotalSupply = () => {
    const { state, dispatch } = useAppContext();
    const { account } = state;

    const fetchTotalSupply = useCallback(async () => {
        dispatch({ type: ACTIONS.SET_LOADING, payload: true });
        try {
            const response = await fetch(`${baseUrl}/totalSupply`);
            const data = await response.json();
            dispatch({
                type: ACTIONS.SET_TOTAL_SUPPLY,
                payload: data.totalSupply,
            });
        } catch (error) {
            console.error("Error fetching balance:", error);
        } finally {
            dispatch({ type: ACTIONS.SET_LOADING, payload: false });
        }
    }, [account, dispatch]);

    return { fetchTotalSupply };
};

export default useTotalSupply;
