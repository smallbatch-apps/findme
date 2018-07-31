import React from 'react';
import {Container, Row, Col} from 'reactstrap'; 

const Home = () => {
  return (
    <div>
      <div className="full-width-image">
        <Container className="content-bottom">
          <Row>
            <Col className="text" light="true">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quod iusto laboriosam repellat, alias nihil mollitia velit consectetur vero voluptas accusamus a facilis! Pariatur iusto quasi veniam odio et sit?</p>
            
            <a className="btn btn-outline-light" href="signup">Signup Now</a>

            </Col>
            <Col>
              
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="main-content mb-5">
        <h2>About findME</h2>

        <p>FindME is a revolutionary peer to peer recruitment platform created by one of Australia’s first Blockchain companies - Intellichain. FindME leverages the Ethereum network to deliver a decentralized application providing a safe a secure system for holding users profiles and personal information.</p>
      </Container>
      <Container fluid className="mb-5">
        <Row>
          <Col className="bg-box recruiter">
            <h2>For Recruiters</h2>

            <p>The findME platform allows recruiters to find and verify potential candidates, allowing you to be certain of providing the most suitable candidates.</p>

            <a className="btn btn-outline-light" href="signup">Join as a recruiter</a>
          </Col>
          <Col className="bg-box candidate">
            <h2>For Candidates</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam est soluta maiores velit veniam, sint quae id ratione nisi suscipit libero repudiandae, laboriosam quia facere illum nobis in! Cum, incidunt?</p>
            <a className="btn btn-outline-light" href="signup">Join as a candidate</a>
          </Col>
        </Row>
      </Container>

      <Container className="mb-5">
        
        <h2>Consectetur adipisicing elit</h2>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quod iusto laboriosam repellat, alias nihil mollitia velit consectetur vero voluptas accusamus a facilis! Pariatur iusto quasi veniam odio et sit?</p>
      </Container>

        
    </div>
  )
}

export default Home;