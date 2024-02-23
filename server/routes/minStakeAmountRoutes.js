const express = require("express");
const {
    getMinStakeAmount,
} = require("../controllers/minStakeAmountController");

const router = express.Router();

router.get("/", getMinStakeAmount);

module.exports = router;
