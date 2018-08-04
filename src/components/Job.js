import React from 'react';
import PersistenceService from '../PersistenceService';
import {Link} from 'react-router-dom';
import { translateCategory } from '../data';

const contract = new PersistenceService();

const Job = ({match}) => {
  const job = contract.getJob(match.params.id);

  return <div className="container main-content">

    <nav>
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
        <li className="breadcrumb-item"><Link to="/jobs">Jobs</Link></li>
        <li className="breadcrumb-item active" aria-current="page">{translateCategory(job.category)}</li>
      </ol>
    </nav>

    <p>{job.summary}</p>
  </div>;
}

export default Job;