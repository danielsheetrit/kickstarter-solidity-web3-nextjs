import web3 from './web3';

import Campaign from './build/Campaign.json';

const { abi } = Campaign;

export default (address) => new web3.eth.Contract(abi, address);
