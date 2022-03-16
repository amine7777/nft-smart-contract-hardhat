const { hexStripZeros } = require('@ethersproject/bytes');
const { expect } = require('chai');

describe("AmineContract", function(){
    it("should return correct name", async function() {
        const AmineContract = await hre.ethers.getContractFactory("AmineContract");
        const AmineContractDeployed = await AmineContract.deploy("AmineContractName", "AKA");

        await AmineContractDeployed.deployed();

        expect(await AmineContractDeployed.name()).to.equal("AmineContractName");
        expect(await AmineContractDeployed.symbol()).to.equal("AKA");

    });
});