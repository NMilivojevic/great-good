import { ethers } from "ethers";
import { useAppContext, ACTIONS } from "../context/Context";
import { isMetaMaskInstalled } from "../utils/utils";

const useLogin = () => {
    const { state, dispatch } = useAppContext();
    const isMetaMask = isMetaMaskInstalled();
    const handleLogin = async () => {
        if (!isMetaMask) {
            dispatch({ type: ACTIONS.SET_TOAST, payload: true });
            dispatch({
                type: ACTIONS.SET_MESSAGE,
                payload: "MetaMask is missing. Please install it.",
            });
            return;
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);

        try {
            const accounts = await provider.send("eth_requestAccounts", []);
            dispatch({ type: ACTIONS.SET_ACCOUNT, payload: accounts[0] });
            dispatch({ type: ACTIONS.LOGIN });
        } catch (error) {
            console.log("Error connecting Metamask:", error);
        }
    };

    return {
        loggedIn: state.loggedIn,
        account: state.account,
        handleLogin,
    };
};

export default useLogin;
