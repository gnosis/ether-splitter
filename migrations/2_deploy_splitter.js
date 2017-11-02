const EtherSplitter = artifacts.require("EtherSplitter");

module.exports = function(deployer) {
  deployer.deploy(EtherSplitter)
}
