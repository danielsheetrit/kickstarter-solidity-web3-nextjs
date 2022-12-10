const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { NETWORK_LINK, PNEUMONIC_PRHASE } = require('../credentials');

const { abi, evm } = require('../ethereum/build/Factory.json');

const provider = new HDWalletProvider(
  PNEUMONIC_PRHASE,
  // instead of using an ethereum local machine,
  // we use Infura which is free service
  NETWORK_LINK
);

const web3 = new Web3(provider);

(async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const gasEstimate = await web3.eth.estimateGas({
    data: evm.bytecode.object,
  });

  const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object })
    .send({ gas: gasEstimate, from: accounts[0] });

  console.log('Contract deployed to', result.options.address);

  provider.engine.stop();
})();
