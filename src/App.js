import React, { Component } from "react";
import "./App.css";
import EmployeeModule from "./Components/EmployeeModule";
import HelpModule from "./Components/HelpModule";
import AboutModule from "./Components/AboutModule";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar inverse className="nav-bar-custom">
            <Navbar.Header>
              <Navbar.Brand>
                <strong>React Demo</strong>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <li>
                  <Link to={"/"}><strong>Employee</strong></Link>
                </li>
                <li>
                  <Link to={"/help"}><strong>Help</strong></Link>
                </li>
                <li>
                  <Link to={"/about"}><strong>About</strong></Link>
                </li>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/" component={EmployeeModule} />
            <Route exact path="/help" component={HelpModule} />
            <Route exact path="/about" component={AboutModule} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
