import { useEffect } from "react";
import FormControl from "../components/form/form-control/FormControl";
import PrimaryHeading from "../components/heading/PrimaryHeading";
import Info from "../components/info/Info";
import LoggedInLayout from "../components/layout/logged-in/LoggedInLayout";
import Loading from "../components/loading/Loading";
import useContract from "../hooks/use-contract";
import useBalance from "../hooks/use-balance";
import useTotalSupply from "../hooks/use-total-supply";
import { ACTIONS, useAppContext } from "../context/Context";
import useMinStakeAmount from "../hooks/use-min-stake";
import { isMetaMaskInstalled } from "../utils/utils";
import Toast from "../components/toast/Toast";

const LoggedInPage = () => {
    const { state, dispatch } = useAppContext();
    const { fetchContract } = useContract();
    const { fetchBalance } = useBalance();
    const { fetchTotalSupply } = useTotalSupply();
    const { fetchMinStakeAmount } = useMinStakeAmount();
    const isMetaMask = isMetaMaskInstalled();

    const { isLoading, loggedIn, account, toast, isSuccess, isError, message } =
        state;

    const status = isSuccess ? "success" : isError ? "error" : null;

    useEffect(() => {
        if (isMetaMask && loggedIn) {
            window.ethereum.on("accountsChanged", (accounts) =>
                dispatch({ type: ACTIONS.SET_ACCOUNT, payload: accounts[0] })
            );
            fetchContract();
            fetchTotalSupply();
            fetchMinStakeAmount();
        }
    }, [loggedIn]);

    useEffect(() => {
        if (isMetaMask && loggedIn) {
            fetchBalance();
        }
    }, [account]);

    return (
        <>
            <LoggedInLayout>
                <PrimaryHeading label="Input your amount" />
                <FormControl />
                <Info />
            </LoggedInLayout>
            {isLoading && <Loading />}
            {toast && <Toast status={status} message={message} />}
        </>
    );
};

export default LoggedInPage;
