const { Web3 } = require("web3");
require("dotenv").config();
const TestContract = require("../contracts/build/TestContract.json");
const contractAddress = process.env.CONTRACT_ADDRESS;
const infuraUrl = process.env.INFURA_URL + process.env.INFURA_KEY;

const web3 = new Web3(infuraUrl);
const contract = new web3.eth.Contract(TestContract.abi, contractAddress);

const getBalance = async (account) => {
    const balance = await contract.methods.balanceOf(account).call();
    const parsedBalance = parseFloat(balance) / 10 ** 18;

    // Define a tolerance for the comparison
    const tolerance = 1e-10;

    // Check if the absolute difference between the parsed balance and 1e-7 is within the tolerance
    if (Math.abs(parsedBalance - 1e-7) < tolerance) {
        return 0;
    }

    // Otherwise, return the parsed balance
    return parsedBalance;
};

const getMinStakeAmount = async () => {
    const minStakeAmount = await contract.methods.minStakeAmount().call();
    return parseFloat(minStakeAmount) / 10 ** 18;
};

const getTotalSupply = async () => {
    const totalSupply = await contract.methods.totalSupply().call();
    return parseFloat(totalSupply) / 10 ** 18;
};

module.exports = { getBalance, getMinStakeAmount, getTotalSupply };
