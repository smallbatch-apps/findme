import Web3 from 'web3';
import { default as contract } from 'truffle-contract';
import contractArtifacts from '../build/contracts/FindMe';

export const getAccount = async () => {
  if (!window.web3) {
    return [];
  }
  let web3 = new Web3(window.web3.currentProvider);
  return await web3.eth.getAccounts((err, accs) => {
    return accs[0];
  });
}

export default class ContractWrapper {
  constructor() {

    if (!window.web3) {
      return this.createErrorProxy();
    }

    const deployedAddress = Object.entries(contractArtifacts.networks)
      .map( ([id, {address}]) => address)
      .filter(a => a)[0];

    let web3 = new Web3(window.web3.currentProvider);

    getAccount().then((accounts) => {
      web3.eth.defaultAccount = accounts[0];
    });

    let myContract = contract(contractArtifacts);
    myContract.setProvider(web3.currentProvider);

    var contractInstance = myContract.at(deployedAddress);
    contractInstance.web3 = web3;
    return contractInstance;

  }

  createErrorProxy() {
    return new Proxy({}, {
      get: (target, name) => {
        throw new Error(`Metamask or other provider is not available, so the "${name}" function on the contract can not be applied`);
      }
    });
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

export const buildWeb3 = (network = 'http://127.0.0.1:8545') => {
  const provider = new Web3.providers.HttpProvider(network);
  return new Web3(provider);
}


