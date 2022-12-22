import web3 from './web3';
import Factory from './build/Factory.json';

const { abi } = Factory;

const instance = new web3.eth.Contract(
  abi,
  '0x7b18820bc8e02753877d45b0479e98C716B0FD01'
);

export default instance;
