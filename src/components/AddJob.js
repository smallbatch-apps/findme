import React, {Component} from 'react';

class AddJob extends Component {

  constructor(props){
    super(props);

    const careerLevels = [
      {value: 'intern', label: 'Intern'},
      {value: 'junior', label: 'Junior or Beginner'},
      {value: 'intermediate', label: 'Intermediate: some experience'},
      {value: 'senior', label: 'Senior'}
    ];

    const types = [
      {value: 'full-time', label: 'Full Time'},
      {value: 'part-time', label: 'Part Time'},
      {value: 'casual', label: 'Casual'},
      {value: 'contract', label: 'Contract Role'},
    ];

    this.state = {careerLevels, types};


  }

  render() {
    return (
      <div className="container main-content">
        <h2>Post new job</h2>

        <form className="create-job">

          <div className="form-group">
            <label htmlFor="title">Job Title</label>
            <input type="text" name="title" className="form-control" placeholder="Job Title" onChange={this.handleFieldChange} />
          </div>

          <div className="form-group">
            <label htmlFor="title">Description</label>
            <textarea name="description" className="form-control" onChange={this.handleFieldChange} />
          </div>

          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="career-level">Career Level</label>
                <input type="text" className="form-control" name="career-level" placeholder="" />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Example label</label>
                <input type="text" className="form-control" placeholder="First name" />
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }

  handleFieldChange = ({target: {value, name}}) => {
    this.setState({[name]:value});
  }

}

export default AddJob;