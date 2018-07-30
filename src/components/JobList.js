import React from 'react';
import { Link } from 'react-router-dom';
import {translateCategory, translateLocation, translateType } from '../data'

const filterJobs = (jobs, filters) => {

  return jobs.map(job => {
    if(filters.every(filter => {
      let allowed = filter.entries.filter(({active}) => active).map(({value}) => value);
      return allowed.includes(job[filter.type]);
      })) {
      return job;
    }
    return false;
  }).filter(job => job);
}

const JobList = ({jobs, filters}) => {
  const filteredJobs = filterJobs(jobs, filters);
  return <div className="w-75 jobs-box">

  <h3>Found {filteredJobs.length} jobs</h3>

  {filteredJobs.map(job =>
      <div className="card w-100 mb-3" key={job.id}>
      <div className="card-body">
      <h5 className="card-title"><Link to={`/job/${job.id}`}>{job.title}</Link></h5>

      <div className="card-subtitle mb-2 text-muted">
        Category: {translateCategory(job.category)} |
            Job Type: {translateType(job.type)} |
           Location: {translateLocation(job.state)}</div>



        <p className="card-text">{job.summary}</p>

        <div className="card-footer">
          <small className="text-muted">Posted yesterday by <a href="">{job.employer}</a></small>
        </div>
      </div>

    </div>
  )}

  { filteredJobs.length === 0 ? <p className="no-jobs">There are no jobs that match your search. Try removing some filters.</p> : ''}
  </div>;
}

export default JobList;