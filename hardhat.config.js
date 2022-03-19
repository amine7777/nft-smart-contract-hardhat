/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomiclabs/hardhat-ethers');

const privateKey = process.env.PRIVATE_KEY;
const endpoint = process.env.URL;
const etherscanKey = process.env.ETHERSCAN_KEY;


module.exports = {
  solidity: {
    version: "0.8.10",
  },
  networks: {
    loclahost: {
      url: "http://127.0.0.1:8545/",
    }/*,
    rinkeby: {
      url: endpoint,
      accounts: [privateKey],
    }
  },
  etherscan: {
    apiKey: etherscanKey,
  }*/
} 
