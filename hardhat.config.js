/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('dotenv').config()
require('@nomiclabs/hardhat-ethers');

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ENDPOINT = process.env.URL;
const ETHERSCAN_KEY = process.env.ETHERSCAN_KEY;

module.exports = {
  solidity: {
    version: "0.8.10",
  },
 // defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    rinkeby: {
      url: `${ENDPOINT}`,
      accounts: [`0x${PRIVATE_KEY}`],
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_KEY,
  }
} 
