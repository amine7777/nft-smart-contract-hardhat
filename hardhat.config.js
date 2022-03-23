/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('dotenv').config()
require('@nomiclabs/hardhat-ethers');

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const endpoint = process.env.URL;
const etherscanKey = process.env.ETHERSCAN_KEY;


module.exports = {
  solidity: {
    version: "0.8.10",
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
    },
    rinkeby: {
      url: endpoint,
      accounts: [`0x${PRIVATE_KEY}`],
    }
  },
  etherscan: {
    apiKey: etherscanKey,
  }
} 
