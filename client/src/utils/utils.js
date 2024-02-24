const baseUrl = import.meta.env.VITE_BASE_URL;
const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;

const REGEX_ONLY_DOTS_AND_NUMBERS = /^[0-9.]*$/;

const isMetaMaskInstalled = () => {
    return window.ethereum && window.ethereum.isMetaMask;
};

export {
    baseUrl,
    contractAddress,
    isMetaMaskInstalled,
    REGEX_ONLY_DOTS_AND_NUMBERS,
};
