import React, {Component} from 'react';
import PersistenceService from '../PersistenceService';
import ContractWrapper, { getAccount } from '../ContractWrapper';
import {filters} from '../data';
import FilterBox from './FilterBox';
import JobList from './JobList';
import AddJob from './AddJob';

class Jobs extends Component {

  constructor(props) {
    super(props);
    this.setFilter.bind(this);
    this.state = { jobs: [], filters };
  }

  async componentDidMount() {
    this.persistence = new PersistenceService();
    this.contract = new ContractWrapper();
    let accounts = await getAccount();
    let account = accounts[0];
    let jobs = await this.persistence.getJobs();
    let applications = await this.contract.getUserApplications();
    //let positions = await this.contract.getUserPositions();
    //let applications = [];
    let positions = [];
    console.log('Applications from this user');
    console.log(applications);

    this.setState({jobs,
      account,
      applications,
      positions,
      showAddForm: false,
      addFormSubmitted: false,
      addFormConfirmed: false
    });
  }

  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
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

  async addJob(job) {
    console.log(job);
    delete job.types;
    delete job.states;
    delete job.categories;
    const guid = this.guid();
    job.id = guid;
    job.employer = '[employer temporarily not available]';
    let jobs = this.state.jobs.map(job => job);
    jobs.push(job);

    this.setState({addFormSubmitted: true});

    let jobAddTx = await this.contract.addPosition(this.contract.web3.utils.fromAscii(guid), {from: this.state.account, value: '3000000000'});

    this.setState({addFormConfirmed: true, jobs});

    setTimeout(() => this.setState({showAddForm: false}), 4000)
    console.log(jobAddTx);
  }

  render() {

    const addForm = this.state.showAddForm ?
      <AddJob addJobFormAction={this.addJob}
        parentContext={this}
        confirmed={this.state.addFormConfirmed}
        submitted={this.state.addFormSubmitted}
      />:
      '';

    return (<div>
      <div className="container main-content">

        <div className="row mb-2">
          <div className="col-sm-8">
            <h2>Available Roles For You</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In molestias soluta necessitatibus explicabo minus exercitationem. Magnam, laboriosam! Labore quidem explicabo nulla totam nostrum voluptas consequatur est placeat? Asperiores, error officiis.</p>
          </div>
          <div className="col-sm-4">
            <h2>Employer?</h2>

            <p>Have a position you want to list? Add it here now.</p>

            <div className="btn btn-primary btn-block" onClick={()=> this.setState({showAddForm: true})}>Add it now!</div>
          </div>
        </div>

        {addForm}

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