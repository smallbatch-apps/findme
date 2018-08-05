import React, {Component} from 'react';
import PersistenceService from '../PersistenceService';
import {Link} from 'react-router-dom';
import { translateCategory, translateLocation } from '../data';
import ContractWrapper, { getAccount } from '../ContractWrapper';

class Job extends Component {

  constructor(props) {
    super(props);
    this.id = props.match.params.id;

    this.persistence = new PersistenceService();
    this.contract = new ContractWrapper();
    let job = this.persistence.getJob(this.id);

    this.state = { job, applications: [], hasApplied: false, isConfirmed:false };
  }

  hasApplied(applications, account){
    return applications.map(address => address.toLowerCase()).includes(account.toLowerCase())
  }

  async componentDidMount() {
    let accounts = await getAccount();
    let account = accounts[0];
    let ethJobId = this.contract.web3.utils.fromAscii(this.state.job.id);
    let applications = await this.contract.getApplicants(ethJobId);

    console.log('currentApplicants');
    console.log(applications);

    let hasApplied = this.hasApplied(applications, account);

    this.setState({account, applications, ethJobId, hasApplied, isConfirmed: hasApplied});
  }

  async applyForJob(event){
    this.setState({hasApplied: true});
    //setTimeout(() => { this.setState({isConfirmed: true}) }, 10000);
    try {
      let tx = await this.contract.makeApplication(this.state.ethJobId, {from: this.state.account});
      this.setState({isConfirmed: true});
    } catch (exception) {
      console.error(exception);
    }

  }

  statusPanelNotApplied() {
    return (<dd className="col-sm-8">
      You have not applied for this role and are currently elegible.
      <span className="btn btn-primary btn-block" onClick={this.applyForJob.bind(this)}>Apply Now!</span>
    </dd>);
  }

  statusPanelApplied() {
    return (<dd className="col-sm-8">
      <i className="fas fa-check"></i> We have received your application. It may take several minutes to confirm on the blockchain.
    </dd>);
  }

  statusPanelConfirmed() {
    return (<dd className="col-sm-8">
      <i className="fas fa-check-double"></i> Your application has been confirmed.
    </dd>);
  }

  getStatusPanel() {
    if(this.state.hasApplied && this.state.isConfirmed) {
      return this.statusPanelConfirmed();
    }

    if(this.state.hasApplied) {
      return this.statusPanelApplied();
    }

    return this.statusPanelNotApplied();
  }

  render() {

    return (<div className="container main-content">
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/jobs">Jobs</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{translateCategory(this.state.job.category)}</li>
        </ol>
      </nav>

      <h2>{this.state.job.title}</h2>

      <div className="row">
        <div className="col">
          <dl className="row">
            <dt className="col-sm-4">Employer</dt>
            <dd className="col-sm-8">{this.state.job.employer}</dd>

            <dt className="col-sm-4">Industry</dt>
            <dd className="col-sm-8">{translateCategory(this.state.job.category)}</dd>

            <dt className="col-sm-4">Location</dt>
            <dd className="col-sm-8">{translateLocation(this.state.job.state)}</dd>

            <dt className="col-sm-4">Current Bounty</dt>
            <dd className="col-sm-8">Not yet implemented</dd>

            <dt className="col-sm-4">Status</dt>
            {this.getStatusPanel()}



          </dl>
        </div>
        <div className="col">
          <p></p>


        </div>
      </div>


      <p>{this.state.job.summary}</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eum ea earum officia architecto saepe explicabo labore magnam odio repudiandae alias iure, tenetur fugit assumenda animi aliquam consequuntur repellat unde?</p>

      <p>Deserunt voluptatum illum cupiditate, soluta a rerum, suscipit numquam reiciendis eum eius aliquam praesentium inventore facere quam quas repudiandae tenetur placeat eos laboriosam. Explicabo doloribus odit labore perspiciatis tempore veniam.</p>

      <p>Libero voluptates ipsa quibusdam ab deserunt expedita quasi itaque, sint exercitationem similique recusandae est tempore! Inventore perferendis rem iure nesciunt sapiente corrupti excepturi, beatae sit expedita nisi culpa dolorum rerum?</p>

      <p>Hic consequatur ea assumenda dignissimos! Quis ratione dignissimos praesentium sequi quibusdam debitis pariatur quo, cupiditate delectus nam inventore labore reprehenderit tempore, dolor doloremque dolores porro recusandae ea tempora molestiae repellendus!</p>

      <p>Laboriosam animi at rerum velit dolore fuga illo sed aliquam temporibus illum laborum, necessitatibus quibusdam. Accusamus, assumenda enim, natus atque eveniet impedit tempora aliquid quam esse quas tempore molestias facere.</p>

      <h4>There are no applicants for this role.</h4>

    </div>);
  }
}

export default Job;