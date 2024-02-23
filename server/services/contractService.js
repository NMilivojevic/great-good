const { Web3 } = require("web3");
require("dotenv").config();
const TestContract = require("../contracts/build/TestContract.json");
const contractAddress = process.env.CONTRACT_ADDRESS;
const infuraUrl = process.env.INFURA_URL + process.env.INFURA_KEY;

const web3 = new Web3(infuraUrl);
const contract = new web3.eth.Contract(TestContract.abi, contractAddress);

const getBalance = async (account) => {
    const balance = await contract.methods.balanceOf(account).call();
    return (parseFloat(balance) / 10 ** 18).toLocaleString();
};

const getMinStakeAmount = async () => {
    const minStakeAmount = await contract.methods.minStakeAmount().call();
    return (parseFloat(minStakeAmount) / 10 ** 18).toLocaleString();
};

const getTotalSupply = async () => {
    const totalSupply = await contract.methods.totalSupply().call();
    return (parseFloat(totalSupply) / 10 ** 18).toLocaleString();
};

module.exports = { getBalance, getMinStakeAmount, getTotalSupply };
