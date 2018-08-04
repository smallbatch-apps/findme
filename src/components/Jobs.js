import React, {Component} from 'react';
import PersistenceService from '../PersistenceService';
import ContractWrapper, {buildWeb3, getNetwork} from '../ContractWrapper';
import rawContract from '../../build/contracts/FindMe.json';
import {filters} from '../data';
import FilterBox from './FilterBox';
import JobList from './JobList';

class Jobs extends Component {

  constructor(props) {
    super(props);
    this.setFilter.bind(this);
    this.state = { jobs: [], filters };
  }

  async componentDidMount() {

    const web3 = buildWeb3();
    const accounts = await web3.eth.getAccounts();

    //var metamaskAccount;
    //console.log(web3.eth.accounts);
    console.log(window.web3.eth.accounts);
    
    //console.log(metamaskAccount);
    this.contract = new PersistenceService();
    let jobs = await this.contract.getJobs();

    this.setState({jobs});
  }

  setFilter(entry) {

    let filters = this.state.filters.map((filter) => {
      filter.entries.map(newEntry => {
        if (newEntry === entry) {
          entry.active = !entry.active;
          return entry;
        }
        return newEntry;
      });
      return filter;
    });

    this.setState({filters});
  }

  render() {
    return (<div>

      <div className="container main-content">


        <div className="row mb-2">
        <div className="col">
        <h2>Available Roles For You</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quia vitae ex optio voluptatum nisi facilis nulla, eveniet, repellat saepe accusamus suscipit laudantium temporibus fugit explicabo unde accusantium magni in!</p>
        </div>
        </div>
        <div className="row">

          <div className="w-25 filter-box">
            {this.state.filters.map((filter,i) =>
              <FilterBox filter={filter} key={i} setFilterAction={this.setFilter} context={this} jobs={this.state.jobs}></FilterBox>)
            }
          </div>

          <JobList jobs={this.state.jobs} filters={this.state.filters} />

        </div>

      </div>

    </div>);
  }
}

export default Jobs;