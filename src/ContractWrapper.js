import Web3 from 'web3';

export default class ContractWrapper {
  constructor({abi, networks}, web3) {

    const deployedAddress = Object.entries(networks)
      .map( ([id, {address}]) => address)
      .filter(a => a)[0];

    let decoratedContract = new web3.eth.Contract(abi, deployedAddress);

    return this.createContractProxy(decoratedContract);
  }

  createContractProxy(decoratedContract) {
    let handler = {
      get: (target, name) => {
        if(target.methods.hasOwnProperty(name) && 
            typeof target.methods[name] === 'function'){
          return (...args) => {
            target.methods[name](...args);
          }
        }
        throw new Error(`"${name}" is not a valid method on this contract`);
      }   
    }

    return new Proxy(decoratedContract, handler);
  }
}

export const buildWeb3 = (network = 'http://127.0.0.1:9545') => {
  const provider = new Web3.providers.HttpProvider(network);
  return new Web3(provider);
}

export const getAccounts = async (web3) => {
  return await web3.eth.getAccounts();
}
