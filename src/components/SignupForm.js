import React from 'react';
import {entriesFor} from '../data.js';

const SignupForm = ({type}) => {

  return (
    <form className="form mb-5 mt-4">

      <hr />

      <h4>Sign Up as {type !== 'Employer' ? 'a' : 'an' } {type} Now!</h4>

      <div className="form-group text-muted">
        This form is not active - it is just a demo
      </div>

      <div className="form-group">
        <label htmlFor="name">Your Name</label>
        <input className="form-control form-control-sm" name="name" type="text" />
      </div>

      { type !== 'Employer' ? '' : <div className="form-group">
        <label htmlFor="company-name">Company Name</label>
        <input className="form-control form-control-sm" name="company-name" type="text" />
      </div> }

      <div className="row">
        <div className="col">
          <div className="form-group">
            <label htmlFor="industry">Your Industry</label>
            <select name="category" className="form-control form-control-sm">
            <option>Select an industry</option>
            {entriesFor('category').map(({value, label}, index) =>
              <option key={index} value={value}>{label}</option>
            )}
            </select>
          </div>
        </div>

        <div className="col">
          <div className="form-group">
            <label htmlFor="state">Your Location</label>
            <select name="state" className="form-control form-control-sm">
            <option>Select your location</option>
            {entriesFor('state').map(({value, label}, index) =>
              <option key={index} value={value}>{label}</option>
            )}
            </select>
          </div>
        </div>
      </div>

      <div className="form-group">
        <button className="btn btn-primary" disabled>Sign Up</button>
      </div>

    </form>
  )
}

export default SignupForm;