import React from 'react';
import SignupForm from './SignupForm';

const Candidates = () => {
  return (
    <div className="container main-content">
      <h2>For Candidates</h2>

      <p>Powered by an inbuilt token economy system pegged to the Australian dollar, Users are rewarded by  linking Businesses with Job seekers. Rewards will be paid through a bounty system to successful applicants and or referrers of the successful applicants, creating an additional income by utilizing your personal Peer network. Rewarding all participants of the platform will help to ensure the growth of the network.</p>

      <SignupForm type="Candidate" />
    </div>
  )
}

export default Candidates;