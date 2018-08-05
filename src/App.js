import React, { Component } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';


import { NavbarBrand, Nav, Navbar, NavItem, NavLink, Container } from 'reactstrap';
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Jobs from './components/Jobs';
import Job from './components/Job';
import Candidates from './components/Candidates';
import Employers from './components/Employers';
import { getAccount } from './ContractWrapper';

import logo from './images/color_logo_transparent.svg'

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { storageValue: 0, web3: null, account: false }
  }

  async componentDidMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.
    let accounts = await getAccount();
    this.setState({account: accounts[0]});
  }

  metamaskError() {
    return (<div className="container">
      <div className="alert alert-danger" role="alert">
        <h4>No Ethereum Provider found</h4>

        <p>Though the site can be navigated, some functionality will be removed entirely and errors may be encountered that are not yet handled. </p>

        <p>This can usually be solved by
        making sure you have <a href="https://metamask.io/">installed metamask</a> and have it enabled and set to the Ropsten test network.</p>
      </div>
    </div>);
  }

  metamaskSuccess(){
    return (<div className="container">
      <div className="alert alert-success" role="alert">
        <small>Ethereum connection successful through metamask. This user is identified as account {this.state.account}</small>
      </div>
    </div>);
  }

  render() {

    const metamaskError = this.state.account > 0 ? this.metamaskSuccess() : this.metamaskError();

    return (
      <BrowserRouter>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light">
          <Container>
            <NavbarBrand>
              <img src={logo} className="logo" alt="logo"/>
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
                  <NavLink tag={RRNavLink} to="/candidates" activeClassName="active">For Candidates</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/employers" activeClassName="active">For Employers</NavLink>
                </NavItem>
              </ul>
            </div>

            <ul className="navbar-nav ml-auto burger">
              <li><i className="fas fa-bars fa-fw fa-lg"></i>
              </li>
            </ul>
            {/* <ul className="navbar-nav ml-auto">
              <li className="login-box">
                <a className="login-link" href="/whatever">
                  <i className="fas fa-user fa-fw"></i> <span>profile</span>
                </a>
                &nbsp;<b>&middot;</b>&nbsp;
                <a className="login-link" href="/whatever">
                  <i className="fas fa-wallet fa-fw"></i> <span>my wallet</span>
                </a>
              </li>
            </ul> */}
            </Container>
          </nav>

          {metamaskError}

          <div className="content">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/jobs" component={Jobs}/>
              <Route path="/job/:id" component={Job}/>
              <Route path="/candidates" component={Candidates}/>
              <Route path="/employers" component={Employers}/>
            </Switch>
          </div>

          <footer className="footer">



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
                  <NavLink tag={RRNavLink} to="/candidates" activeClassName="active">For Candidates</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={RRNavLink} to="/employers" activeClassName="active">For Employers</NavLink>
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
