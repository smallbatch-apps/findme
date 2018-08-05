import React, {Component} from 'react';
import { entriesFor } from '../data';



class AddJob extends Component {

  constructor(props){
    super(props);

    let categories = entriesFor('category');
    let states = entriesFor('state');
    let types = entriesFor('type');

    this.state = { types, states, categories };

  }

  getAlertStatus(){

    if (this.props.confirmed) {
      return (<div className="alert alert-success" role="alert">
        <i className="fas fa-check-double"></i> Your job has been verified on the blockchain and added to our listings
      </div>);
    }

    if (this.props.submitted) {
      return (<div className="alert alert-primary" role="alert">
        <i className="fas fa-check"></i> Your job has been received and is being verified on the blockchain. This may take some time.
      </div>);
    }

    return '';

  }

  render() {

    return (
      <div className="card mb-3">
      <div className="card-header"><h4>Post new job</h4></div>
        <div className="card-body">


          <form className="create-job">

            {this.getAlertStatus()}

            <div className="row">
              <div className="col-sm-4">
                <div className="form-group">
                  <label htmlFor="type">Role Type</label>
                  <select value={this.state.type} name="type" className="form-control form-control-sm" onChange={this.handleFieldChange}>
                  <option>Select a type</option>
                  {this.state.types.map(({value, label}, index) =>
                    <option key={index} value={value}>{label}</option>
                  )}
                  </select>

                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-group">
                  <label htmlFor="state">Location</label>
                  <select value={this.state.state} name="state" className="form-control form-control-sm" onChange={this.handleFieldChange}>
                  <option>Select a location</option>
                  {this.state.states.map(({value, label}, index) =>
                    <option key={index} value={value}>{label}</option>
                  )}
                  </select>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-group">
                  <label htmlFor="industry">Industry</label>
                  <select value={this.state.category} name="category" className="form-control form-control-sm" onChange={this.handleFieldChange}>
                  <option>Select an industry</option>
                  {this.state.categories.map(({value, label}, index) =>
                    <option key={index} value={value}>{label}</option>
                  )}
                  </select>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="title">Job Title</label>
              <input type="text" name="title" className="form-control form-control-sm" onChange={this.handleFieldChange} />
            </div>

            <div className="form-group">
              <label htmlFor="summary">Description</label>
              <textarea name="summary" className="form-control form-control-sm" onChange={this.handleFieldChange} />
            </div>

          </form>
        </div>
        <div className="card-footer">
          <div className="btn btn-primary " onClick={this.props.addJobFormAction.bind(this.props.parentContext, Object.assign({}, this.state))}>
              Add your job
            </div>
        </div>
      </div>
    )
  }

  handleFieldChange = ({target: {value, name}}) => {
    this.setState({[name]:value});
  }

}

export default AddJob;