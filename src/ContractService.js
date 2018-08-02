import Web3 from 'web3';
import Contract from '../build/contracts/FindMe.json';
import {data} from './data.js';


export default class ContractService {

  async init() {
    let provider = new Web3.providers.HttpProvider('http://127.0.0.1:9545');
    let web3 = new Web3(provider);
    console.log(web3);
    this.accounts = await web3.eth.getAccounts();
    this.currentAccount = this.accounts[1];

    this.contract = new web3.eth.Contract(Contract.abi, Contract.networks[5777].address);

    console.log(this.contract);

    return this;
  }

  async getJobs() {
    return data;
  }

  getJob(id) {
    return data.filter(job => job.id === id)[0];
  }

  async getApplications() {

    //this.currentAccount
  }

  async addJob(data) {

  }

}