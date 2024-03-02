const express = require("express");
const cors = require("cors");
const { Web3 } = require("web3");
const TestContract = require("./contracts/build/TestContract.json");
require("dotenv").config();

const infuraUrl = process.env.INFURA_URL + process.env.INFURA_KEY;
const contractAddress = process.env.CONTRACT_ADDRESS;

const web3 = new Web3(infuraUrl);

const contract = new web3.eth.Contract(TestContract.abi, contractAddress);

const app = express();

app.use(cors());

app.use(express.json());

app.get("/balance/:account", async (req, res) => {
    const { account } = req.params;
    try {
        const balance = await contract.methods.balanceOf(account).call();
        const parsedBalance = (parseFloat(balance) / 10 ** 18).toFixed(18);
        res.json({ payload: parsedBalance });
    } catch (error) {
        console.error("Error fetching balance:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get("/minStakeAmount", async (req, res) => {
    try {
        const minStakeAmount = await contract.methods.minStakeAmount().call();
        const parseMinStakeAmount = parseFloat(minStakeAmount) / 10 ** 18;
        res.json({ payload: parseMinStakeAmount });
    } catch (error) {
        console.error("Error fetching minStakeAmount:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get("/totalSupply", async (req, res) => {
    try {
        const totalSupply = await contract.methods.totalSupply().call();
        const parsedTotalSupply = parseFloat(totalSupply) / 10 ** 18;
        res.json({ payload: parsedTotalSupply });
    } catch (error) {
        console.error("Error fetching totalSupply:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

const routes = [
    { path: "/balance/:account", description: "Get balance information" },
    {
        path: "/minStakeAmount",
        description: "Get minimum stake amount information",
    },
    { path: "/totalSupply", description: "Get total supply information" },
];

app.get("/", (req, res) => {
    let response = "Available Routes:<br>";
    routes.forEach((route) => {
        response += `${route.path}: ${route.description}<br>`;
    });

    res.send(response);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
