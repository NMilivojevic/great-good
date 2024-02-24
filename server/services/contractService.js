// contractService.js

const { Web3 } = require("web3");
require("dotenv").config();
const TestContract = require("../contracts/build/TestContract.json");

const contractAddress = process.env.CONTRACT_ADDRESS;
const infuraUrl = process.env.INFURA_URL + process.env.INFURA_KEY;

const web3 = new Web3(infuraUrl);
const contract = new web3.eth.Contract(TestContract.abi, contractAddress);

module.exports = { web3, contract };
