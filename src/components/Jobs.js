import React, {Component} from 'react';
import ContractService from '../ContractService';
import FilterBox from './FilterBox';
import JobList from './JobList';
//import filters from '../data';

class Jobs extends Component {

  constructor(props) {
    super(props);

    this.setFilter.bind(this);

    let filters = [{
      type: 'state',
      label: 'Location',
      icon: 'far fa-map',
      entries: [
        {value: 'ACT', label: 'Australian Capital Territory', active: false, filter: 'state'},
        {value: 'NSW', label: 'New South Wales', active: false, filter: 'state'},
        {value: 'NT', label: 'Northern Territory', active: false, filter: 'state'},
        {value: 'QLD', label: 'Queensland', active: true, filter: 'state'},
        {value: 'SA', label: 'South Australia', active: false, filter: 'state'},
        {value: 'VIC', label: 'Victoria', active: false, filter: 'state'},
        {value: 'WA', label: 'Western Australia', active: false, filter: 'state'},
      ]
    },
    {
      type: 'type',
      label: 'Employment Type',
      icon: 'far fa-clock',
      entries: [
        {value: 'full-time', label: 'Full Time', active: true, filter: 'type'},
        {value: 'part-time', label: 'Part Time', active: true, filter: 'type'},
        {value: 'casual', label: 'Casual', active: true, filter: 'type'},
        {value: 'contract', label: 'Contract Role', active: true, filter: 'type'},
      ]
    },
    {
      type: 'category',
      label: 'Industry',
      icon: 'fas fa-industry',
      entries: [
        {value: 'it', label: 'Information Technology', active: true, filter: 'category'},
        {value: 'technology', label: 'Science and Technology', active: true, filter: 'category'},
        {value: 'hospitality', label: 'Bar and Hospitality', active: true, filter: 'category'},
        {value: 'food-prep', label: 'Baking and Food Preparation', active: true, filter: 'category'},
        {value: 'admin', label: 'Admin and Reception', active: true, filter: 'category'},
        {value: 'retail', label: 'Sales and Retail', active: true, filter: 'category'},
        {value: 'accounting-clerical', label: 'Clerical and Accounting', active: true, filter: 'category'},
        {value: 'manufacturing', label: 'Manufacturing', active: true, filter: 'category'},
      ]
    },
    ]

    this.state = { jobs: [], filters };
  }

  async componentDidMount() {
    let contract = await new ContractService();
    this.contract = await contract.init();
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
        <div class="col">
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