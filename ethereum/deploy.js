require('dotenv').config();

const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');

const { abi, evm } = require('../ethereum/build/Factory.json');

const provider = new HDWalletProvider(
  process.env.PNEUMONIC_PRHASE,
  // instead of using an ethereum local machine,
  // we use Infura which is free service
  process.env.NETWORK_LINK
);

const web3 = new Web3(provider);

(async () => {
  try {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const gasEstimate = await web3.eth.estimateGas({
      data: evm.bytecode.object,
    });

    console.log('estimated gas:', gasEstimate);

    const result = await new web3.eth.Contract(abi)
      .deploy({ data: evm.bytecode.object })
      .send({ gas: gasEstimate, from: accounts[0] });

    console.log('Contract deployed to', result.options.address);

    provider.engine.stop();
  } catch (error) {
    console.log(error);
  }
})();
