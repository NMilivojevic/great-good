const totalSupplyService = require("../services/totalSupplyService");

const getTotalSupply = async (req, res) => {
    try {
        const totalSupply = await totalSupplyService.getTotalSupply();
        res.json({ totalSupply });
    } catch (error) {
        console.error("Error fetching totalSupply:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { getTotalSupply };
