const express = require("express");
const { getBalance } = require("../controllers/balanceController");

const router = express.Router();

router.get("/:account", getBalance);

module.exports = router;
