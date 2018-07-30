import React from 'react';

const presentValues = (jobs, filter) => {
  const allowed = jobs.map(job => job[filter.type]);
  return [...(new Set(allowed))];
}

const FilterBox = ({filter, setFilterAction, context, jobs}) => {
  const allowedEntries = presentValues(jobs, filter);
  return (
    <div className="card mb-3 p-4">
      <h5 className="card-header"><i className="far fa-clock"></i> {filter.label}</h5>

      <ul className="list-group list-group-flush">
        {filter.entries.map((entry, key) => {
          if (!allowedEntries.includes(entry.value)) {
            return false;
          };
          return <li
            className={`list-group-item ${entry.active ? 'active' : ''}`}
            key={key}
            onClick={setFilterAction.bind(context, entry)}>
            <i className={`far fa-${entry.active ? 'check-' : ''}circle fa-fw`}></i> {entry.label}
        </li> }
        )}
      </ul>

    </div>
  );
}

export default FilterBox;