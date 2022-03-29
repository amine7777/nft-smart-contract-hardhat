
async function main() {
    const AmineContract  = await hre.ethers.getContractFactory("AmineContract");
    const AmineContractDeployed = await AmineContract.deploy("AmineContractName", "AKA");
    
    await AmineContractDeployed.deployed();

    console.log("Deployed AmineContract to", AmineContractDeployed.address);
    
    export const CONTRACT_ADDRESS = AmineContractDeployed.address;

}

main()
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });
