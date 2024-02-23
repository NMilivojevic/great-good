const cors = require("cors");
const express = require("express");
const { Web3 } = require("web3");
const TestContract = require("../contracts/build/TestContract.json");
const contractAddress = "0xdD08C4f14475D419ebe6C9f31865bf3730f7EF92";

const web3 = new Web3(
    "https://polygon-mumbai.infura.io/v3/7dca142182e54feabf04bacfd87732d7"
);

const app = express();

app.use(cors());
app.use(express.json());
const contract = new web3.eth.Contract(TestContract.abi, contractAddress);

app.get("/balance/:account", async (req, res) => {
    const { account } = req.params;
    try {
        const balance = await contract.methods.balanceOf(account).call();
        const balanceInDecimals = parseFloat(balance) / 10 ** 18;
        const formattedBalance = balanceInDecimals.toLocaleString();
        res.json({ balance: formattedBalance });
    } catch (error) {
        console.error("Error fetching balance:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get("/minStakeAmount", async (req, res) => {
    try {
        const minStakeAmount = await contract.methods.minStakeAmount().call();
        const minStakeAmountInDecimals = parseFloat(minStakeAmount) / 10 ** 18;
        const formattedMinStakeAmount =
            minStakeAmountInDecimals.toLocaleString();
        res.json({ minStakeAmount: formattedMinStakeAmount });
    } catch (error) {
        console.error("Error fetching minStakeAmount:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get("/totalSupply", async (req, res) => {
    try {
        const totalSupply = await contract.methods.totalSupply().call();
        const totalSupplyInDecimals = parseFloat(totalSupply) / 10 ** 18;
        const formattedTotalSupply = totalSupplyInDecimals.toLocaleString();
        res.json({ totalSupply: formattedTotalSupply });
    } catch (error) {
        console.error("Error fetching totalSupply:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
