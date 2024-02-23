const contractService = require("../services/contractService");

const getMinStakeAmount = async (req, res) => {
    try {
        const minStakeAmount = await contractService.getMinStakeAmount();
        res.json({ minStakeAmount });
    } catch (error) {
        console.error("Error fetching minStakeAmount:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { getMinStakeAmount };
