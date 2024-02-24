const { contract } = require("./contractService");

const getTotalSupply = async () => {
    const totalSupply = await contract.methods.totalSupply().call();
    return (parseFloat(totalSupply) / 10 ** 18).toLocaleString();
};

module.exports = { getTotalSupply };
