import { useEffect } from "react";
import { ethers } from "ethers";
import TestContract from "../../../contracts/build/TestContract.json";
import { useAppContext, ACTIONS } from "../context/Context";
import { contractAddress } from "../utils/utils";

const useContract = () => {
    const { dispatch } = useAppContext();

    const fetchContract = async () => {
        dispatch({ type: ACTIONS.SET_LOADING, payload: true });
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const abi = TestContract.abi;
            const signer = provider.getSigner();
            const contract = new ethers.Contract(contractAddress, abi, signer);
            dispatch({ type: ACTIONS.SET_CONTRACT, payload: contract });
        } catch (error) {
            console.error("Error fetching contract:", error);
        } finally {
            dispatch({ type: ACTIONS.SET_LOADING, payload: false });
        }
    };

    return { fetchContract };
};

export default useContract;
