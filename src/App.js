import React, { Component } from "react";
import "./App.css";
import EmployeeModule from "./Components/EmployeeModule";
import HelpModule from "./Components/HelpModule";
import AboutModule from "./Components/AboutModule";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

class App extends Component {
  handleSelect(selectedKey) {
    console.log(`selected ${selectedKey}`);
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar inverse >
            <Navbar.Header>
              <Navbar.Brand>
                <a href="javascript:void(0);">React Demo</a>
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
