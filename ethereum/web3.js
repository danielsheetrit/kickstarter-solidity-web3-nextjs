// require('dotenv').config();

import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: 'eth_requestAccounts' });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://goerli.infura.io/v3/e9a4ce1ec2b74c6cabbdef776c848ad1'
  );
  web3 = new Web3(provider);
  // provider.engine.stop();
}


export default web3;
