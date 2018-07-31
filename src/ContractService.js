// import Web3 from 'web3';
// import Contract from '../build/contracts/FindMe.json';
 import {data} from './data.js';


export default class ContractService {

  async init() {
    // let provider = new Web3.providers.HttpProvider('http://127.0.0.1:9545');
    // let web3 = new Web3(provider);

    // this.accounts = await web3.eth.getAccounts();

    // this.contract = new web3.eth.Contract(Contract.abi, Contract.networks[5777].address, {
    //   from: this.accounts[0]
    // });

    return this;
  }

  // async getContractInstance() {
  //   return await this.contractInstance;
  // }

  async getJobs() {
    return data;
  }

  getJob(id) {
    return data.filter(job => job.id === id)[0];
  }

}