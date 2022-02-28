const GearToken = artifacts.require("GearToken");

module.exports = function (deployer) {
    deployer.deploy(GearToken, "GearTokens", "GEAR"); // Name, symbol
};
