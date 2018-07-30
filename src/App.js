import React, { Component } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';


import { NavbarBrand, Nav, Navbar, NavItem, NavLink, Container } from 'reactstrap';
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Jobs from './components/Jobs';
import Job from './components/Job';
import AddJob from './components/AddJob';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { storageValue: 0, web3: null }
  }

  async componentDidMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.



  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light">
          <Container>
            <NavbarBrand>
              <div className="icon-box"><i className="fas fa-expand"></i></div>
              <div className="title">FindMe</div>
              <div className="subtitle">Find the staff or job you need</div>
            </NavbarBrand>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <NavItem>
                  <NavLink tag={RRNavLink} to="/" activeClassName="active" exact path="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/jobs" activeClassName="active">Current Jobs</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/about" activeClassName="active">About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/add-job" activeClassName="active">Add a Job</NavLink>
                </NavItem>
              </ul>
            </div>

            <ul className="navbar-nav ml-auto">
              <li className="login-box">
                <a className="login-link" href="/whatever">
                  <i className="fas fa-user fa-fw"></i> <span>profile</span>
                </a>
                &nbsp;<b>&middot;</b>&nbsp;
                <a className="login-link" href="/whatever">
                  <i className="fas fa-wallet fa-fw"></i> <span>my wallet</span>
                </a>
                <span className="btn btn-light btn-sm">Log Out</span>
              </li>
            </ul>
            </Container>
          </nav>

          <div className="content">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/jobs" component={Jobs}/>
              <Route path="/job/:id" component={Job}/>
              <Route path="/add-job" component={AddJob}/>
            </Switch>
          </div>

          <footer className="footer">


            <Container>
              test
            </Container>


            <Navbar color="dark" dark expand="md">
              <Container>
                <Nav navbar>
                  <NavItem>
                    <NavLink tag={RRNavLink} to="/" activeClassName="active" exact path="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={RRNavLink} to="/jobs" activeClassName="active">Current Jobs</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={RRNavLink} to="/about" activeClassName="active">About Us</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={RRNavLink} to="/add-job" activeClassName="active">Add a Job</NavLink>
                  </NavItem>
                </Nav>
              </Container>
            </Navbar>
          </footer>
        </div>

      </BrowserRouter>
    );
  }
}

export default App
