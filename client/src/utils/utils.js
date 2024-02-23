const baseUrl = import.meta.env.VITE_BASE_URL;
const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;

const isMetaMaskInstalled = () => {
    return window.ethereum && window.ethereum.isMetaMask;
};

export { baseUrl, contractAddress, isMetaMaskInstalled };
