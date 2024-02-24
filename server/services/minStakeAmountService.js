const { contract } = require("./contractService");

const getMinStakeAmount = async () => {
    const minStakeAmount = await contract.methods.minStakeAmount().call();
    return (parseFloat(minStakeAmount) / 10 ** 18).toLocaleString();
};

module.exports = { getMinStakeAmount };
