const contractService = require("../services/contractService");

const getBalance = async (req, res) => {
    const { account } = req.params;
    try {
        const balance = await contractService.getBalance(account);
        res.json({ balance });
    } catch (error) {
        console.error("Error fetching balance:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { getBalance };
