const express = require("express");
const { getTotalSupply } = require("../controllers/totalSupplyController");

const router = express.Router();

router.get("/", getTotalSupply);

module.exports = router;
