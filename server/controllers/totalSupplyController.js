const contractService = require("../services/contractService");

const getTotalSupply = async (req, res) => {
    try {
        const totalSupply = await contractService.getTotalSupply();
        res.json({ totalSupply });
    } catch (error) {
        console.error("Error fetching totalSupply:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { getTotalSupply };
