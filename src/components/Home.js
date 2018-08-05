import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';

const Home = () => {
  return (
    <div>
      <div className="full-width-image">
        <Container className="content-bottom">
          <Row>
            <Col className="text" light="true">
            <h4>Land a job, get an instant paycheck</h4>

            <p>findME is the smartest way to start your career in the right direction.</p>

            <Link className="btn btn-outline-light" to="/candidates">Get Started Now</Link>

            </Col>
            <Col>

            </Col>
          </Row>
        </Container>
      </div>

      <Container className="main-content mb-5">
        <h2>About findME</h2>

        <p>findME is a revolutionary peer to peer recruitment platform created by one of Australia’s first Blockchain companies - Intellichain. findME leverages the Ethereum network to deliver a decentralized application providing a safe a secure system for holding users profiles and personal information.</p>

        <p>FindMe will be become the gold standard in recruitment, its revolutionary patented Ghost Transaction Protocol means company advertising budgets are not affected by varying price of the underlying cryptocurrency asset.</p>

      </Container>
      <Container fluid className="mb-5">
        <Row>
          <Col className="bg-box recruiter">
            <h2>For Recruiters</h2>

            <p>The findME platform allows recruiters to find and verify potential candidates, allowing you to be certain of providing the most suitable candidates.</p>

            <Link className="btn btn-outline-light" to="/employers">Join as a recruiter</Link>
          </Col>
          <Col className="bg-box candidate">
            <h2>For Candidates</h2>

            <p>findME is the smartest way to start your career in the right direction. With proven skills and verified qualifications you can stand out from the pack.</p>

            <Link className="btn btn-outline-light" to="/jobs">Start Looking</Link>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Home;