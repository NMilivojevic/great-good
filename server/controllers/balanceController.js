const balanceService = require("../services/balanceService");

const getBalance = async (req, res) => {
    const { account } = req.params;
    try {
        const balance = await balanceService.getBalance(account);
        res.json({ balance });
    } catch (error) {
        console.error("Error fetching balance:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { getBalance };
