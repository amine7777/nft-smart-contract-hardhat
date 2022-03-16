/**
 * @type import('hardhat/config').HardhatUserConfig
 */


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require('@nomiclabs/hardhat-ethers');
 module.exports = {
  solidity: "0.8.10",
};

/*
require('@nomiclabs/hardhat-ethers');

const privateKey = process.env.PRIVATE_KEY;
const endpoint = process.env.URL;
const etherscanKey = process.env.ETHERSCAN_KEY;


module.exports = {
  solidity: {
    version: "0.8.10",
  },
  networks: {
    rinkeby: {
      url: endpoint,
      accounts: [`0x${privateKey}`]
    }
  },
  etherscan: {
    apiKey: etherscanKey
  }
} */