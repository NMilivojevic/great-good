const { contract } = require("./contractService");

const getBalance = async (account) => {
    const balance = await contract.methods.balanceOf(account).call();
    const parsedBalance = parseFloat(balance) / 10 ** 18;

    // Define a tolerance for the comparison
    const tolerance = 1e-10;

    // Check if the absolute difference between the parsed balance and 1e-7 is within the tolerance
    if (Math.abs(parsedBalance - 1e-7) < tolerance) {
        return 0;
    }

    // Otherwise, return the parsed balance
    return parsedBalance;
};

module.exports = { getBalance };
