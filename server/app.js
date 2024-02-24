const express = require("express");
const cors = require("cors");
const balanceRoutes = require("./routes/balanceRoutes");
const minStakeAmountRoutes = require("./routes/minStakeAmountRoutes");
const totalSupplyRoutes = require("./routes/totalSupplyRoutes");
const routes = require("./utils/routeList");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/balance", balanceRoutes);
app.use("/minStakeAmount", minStakeAmountRoutes);
app.use("/totalSupply", totalSupplyRoutes);

// Route to list all routes
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
