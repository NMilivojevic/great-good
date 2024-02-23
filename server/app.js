const express = require("express");
const cors = require("cors");
const balanceRoutes = require("./routes/balanceRoutes");
const minStakeAmountRoutes = require("./routes/minStakeAmountRoutes");
const totalSupplyRoutes = require("./routes/totalSupplyRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/balance", balanceRoutes);
app.use("/minStakeAmount", minStakeAmountRoutes);
app.use("/totalSupply", totalSupplyRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
