# nft-smart-contract-hardhat

This is my first project with solidity. I have been inspired by some tutorials of course since this is a new world for me. The goal of this project is to deploy a simple NFT smart contract on Ethereum testnet. I have created a pipeline that manage my this deployment, the idea is focus more about coding smart contract and tests.

# Requirements
- npm
- nodejs

# Usage 

Please clone the repo and go to the project folder.

```bash
git clone https://git@github.com:amine7777/nft-smart-contract-hardhat.git
cd nft-smart-contract-hardhat
```
Once you are inside the project folder you can install all the Hardhat dependencies.
Use this command:

```bash
npm install --no-fund --save-dev dotenv @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers @nomiclabs/hardhat-etherscan ethers
```
You can check if Hardhat is installed by running this command:

```bash
npx hardhat --version
```

Now let's create a local node and compile the smart contract

```bash
npx hardhat node
npx hardhat compile --network localhost
```
Now you will see two new folders that apear artifacts and cache. You will need these folders later.

Let's test our NFT smart contract

```bash
npx hardhat test --network localhost
```

Now we can deploy the smart contract 

```bash
npx hardhat run scripts/deploy.js --network localhost
```
