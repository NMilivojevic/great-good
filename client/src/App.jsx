import { useEffect, useState } from "react";
import { serializeError } from "eth-rpc-errors";
import { ethers } from "ethers";
import TestContract from "../contracts/build/TestContract.json";
import logoHeaderSrc from "./assets/logo-header.webp";
import logoFooterSrc from "./assets/logo-footer.webp";

const baseUrl = import.meta.env.VITE_BASE_URL;
const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;

function App() {
    const [contract, setContract] = useState(null);
    const [account, setAccount] = useState(null);
    const [totalSupply, setTotalSupply] = useState(null);
    const [minStakeAmount, setMinStakeAmount] = useState(null);
    const [balance, setBalance] = useState(null);
    const [amount, setAmount] = useState("");
    const [notification, setNotification] = useState({
        status: "",
        message: "",
        toast: false,
        inputError: false,
    });
    const [loading, setLoading] = useState(false);

    const isMetamask = window.ethereum && window.ethereum.isMetaMask;

    const handleConnect = async () => {
        if (!isMetamask) {
            setNotification({
                status: "info",
                message: "Metamask is not installed.",
                toast: true,
                inputError: false,
            });
            return;
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);

        try {
            const accounts = await provider.send("eth_requestAccounts", []);
            setAccount(accounts[0]);
        } catch (error) {
            console.log("Error connecting Metamask:", error);
        }
    };

    const handleDisconnect = () => {
        setAccount(null);
    };

    const fetchContract = async () => {
        setLoading(true);
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const abi = TestContract.abi;
            const signer = provider.getSigner();
            const contract = new ethers.Contract(contractAddress, abi, signer);
            setContract(contract);
        } catch (error) {
            console.error("Error fetching contract:", error);
        } finally {
            setLoading(false);
        }
    };

    const fetchTotalSupply = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${baseUrl}/totalSupply`);
            const data = await response.json();
            setTotalSupply(data.payload);
        } catch (error) {
            console.error("Error fetching balance:", error);
        } finally {
            setLoading(false);
        }
    };

    const fetchBalance = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${baseUrl}/balance/${account}`);
            const data = await response.json();
            setBalance(data.payload);
        } catch (error) {
            console.error("Error fetching balance:", error);
        } finally {
            setLoading(false);
        }
    };

    const fetchMinStakeAmount = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${baseUrl}/minStakeAmount`);
            const data = await response.json();
            setMinStakeAmount(data.payload);
        } catch (error) {
            console.error("Error fetching balance:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleAccountChange = (accounts) => setAccount(accounts[0]);
    useEffect(() => {
        if (account) {
            window.ethereum.on("accountsChanged", handleAccountChange);
            fetchContract();
            fetchTotalSupply();
            fetchBalance();
            fetchMinStakeAmount();
        }

        return () => {
            window.ethereum.removeListener(
                "accountsChanged",
                handleAccountChange
            );
        };
    }, [account]);

    const handleStake = async () => {
        setLoading(true);
        try {
            const tx = await contract.stake({
                value: ethers.utils.parseUnits(amount.toString(), 18),
            });
            const response = await tx.wait();

            if (response) {
                fetchBalance();
                fetchTotalSupply();
                setNotification({
                    status: "success",
                    message: "Staking successful!",
                    toast: true,
                    inputError: false,
                });
            }
        } catch (error) {
            const err = serializeError(error);
            if (err.data.code === -32000) {
                setNotification({
                    status: "error",
                    message: "Insufficient funds.",
                    toast: true,
                    inputError: false,
                });
                return;
            }
            if (err.data.originalError.code === "ACTION_REJECTED") {
                setNotification({
                    status: "error",
                    message: "User rejected the transaction.",
                    toast: true,
                    inputError: false,
                });
                return;
            }
            setNotification({
                status: "error",
                message: "Staking failed!",
                toast: true,
                inputError: false,
            });
        } finally {
            setLoading(false);
            setAmount("");
        }
    };

    const handleWithdraw = async () => {
        setLoading(true);
        try {
            const tx = await contract.withdraw(
                ethers.utils.parseUnits(amount.toString(), 18)
            );
            const response = await tx.wait();

            if (response) {
                fetchBalance();
                fetchTotalSupply();
                setNotification({
                    status: "success",
                    message: "Withdrawal successful!",
                    toast: true,
                    inputError: false,
                });
            }
        } catch (error) {
            const err = serializeError(error);
            if (err.data.originalError.code === "ACTION_REJECTED") {
                setNotification({
                    status: "error",
                    message: "User rejected the transaction.",
                    toast: true,
                    inputError: false,
                });

                return;
            }
            setNotification({
                status: "error",
                message: "Withdrawal failed!",
                toast: true,
                inputError: false,
            });
        } finally {
            setLoading(false);
            setAmount("");
        }
    };

    const handleOnChange = (e) => {
        const input = e.target.value;
        const regex = /^[0-9.]*$/;

        if (regex.test(input)) {
            setAmount(input);
            setNotification({
                status: "",
                message: "",
                toast: false,
                inputError: false,
            });
        } else {
            setNotification({
                status: "error",
                message: "Please enter a valid number.",
                toast: false,
                inputError: true,
            });
        }
    };

    useEffect(() => {
        if (notification.toast) {
            const timeoutId = setTimeout(() => {
                setNotification({
                    status: "",
                    message: "",
                    toast: false,
                    inputError: false,
                });
            }, 3000);
            return () => clearTimeout(timeoutId);
        }
    }, [notification.toast]);

    return (
        <div className="container">
            <header>
                <nav>
                    <img src={logoHeaderSrc} />
                    <div>
                        {account ? (
                            <div>
                                <p>{`${account.slice(0, 7)}...${account.slice(
                                    -5
                                )}`}</p>
                                <button onClick={handleDisconnect}>
                                    Disconnect
                                </button>
                            </div>
                        ) : (
                            <button onClick={handleConnect}>
                                Connect wallet
                            </button>
                        )}
                    </div>
                </nav>
            </header>
            <div className="background-effect-wrapper">
                {account ? (
                    <>
                        <div className="background-effect" />
                        <section className="connected">
                            <h2>Input your amount</h2>
                            <div className="form-control">
                                <input
                                    placeholder="Enter amount"
                                    value={amount}
                                    onChange={handleOnChange}
                                    className={
                                        notification.inputError
                                            ? "input-error"
                                            : ""
                                    }
                                />
                                {notification.inputError ? (
                                    <span className="input-error">
                                        {notification.message}
                                    </span>
                                ) : (
                                    <span>
                                        Minimum stake amount is {minStakeAmount}{" "}
                                        MATIC
                                    </span>
                                )}
                            </div>
                            <div className="form-cta">
                                <button
                                    onClick={handleStake}
                                    disabled={
                                        amount === "" || amount < minStakeAmount
                                    }
                                >
                                    Stake
                                </button>
                                <button
                                    onClick={handleWithdraw}
                                    disabled={
                                        amount === "" || amount >= balance
                                    }
                                >
                                    Withdraw
                                </button>
                            </div>
                            <div className="info">
                                <div>
                                    <p>Your balance:</p>
                                    <p>{balance} MATIC</p>
                                </div>
                                <div>
                                    <p>Total supply:</p>
                                    <p>{totalSupply} MATIC</p>
                                </div>
                            </div>
                            {loading && (
                                <div className="loading-overlay">
                                    <div className="loading-spinner" />
                                </div>
                            )}
                        </section>
                    </>
                ) : (
                    <section className="public">
                        <h1>Please connect your wallet.</h1>
                    </section>
                )}
            </div>
            <footer>
                <img src={logoFooterSrc} />
            </footer>
            {notification.toast && (
                <div className="toast">
                    <div className={`toast-${notification.status}`}>
                        <p>{notification.message}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
