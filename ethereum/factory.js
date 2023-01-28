import web3 from './web3';
import Factory from './build/Factory.json';

const { abi } = Factory;

const instance = new web3.eth.Contract(
  abi,
  '0x53dB8e711073f8F160d3e5f5729B877C338f5E9A'
);

export default instance;
