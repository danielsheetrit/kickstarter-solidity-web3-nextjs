import web3 from './web3';
import Factory from './build/Factory.json';

const { abi } = Factory;

const instance = new web3.eth.Contract(
  abi,
  '0x95651BC49e8759B2196150625647A92e82e530e2'
);

export default instance;
