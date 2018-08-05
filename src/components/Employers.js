import React from 'react';
import SignupForm from './SignupForm';

const Employers = () => {
  return (
    <div className="container main-content">
      <h2>For Employers</h2>

      <p>This new interactive platform reduces the need for companies to seek the services of Recruitment agencies. The exorbitant fees currently charged by recruitment agencies will force the whole industry to reform, or join our platform in order to compete and remain relevant in this space.</p>

      <p>FindME is working closely with universities and the Australian Government in creating the largest blockchain verification database; Enabling more efficient job placements for companies through faster candidate vetting.
</p>

      <SignupForm type="Employer" />
    </div>
  )
}

export default Employers;