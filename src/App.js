import React, { Component } from "react";
import "./App.css";
import EmployeeModule from "./Components/EmployeeModule";
import ProductModule from "./Components/ProductModule";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="javascript:void(0);">
                  React Demo
              </a>
              </div>
              <div
                className="collapse navbar-collapse"
                id="bs-example-navbar-collapse-1"
              >
                <ul className="nav navbar-nav">
                  <li className="active">
                    <Link to={'/'}>Employee</Link>
                  </li>
                  <li>
                    <Link to={'/Products'}>Products</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Switch>
            <Route exact path='/' component={EmployeeModule} />
            <Route exact path='/Products' component={ProductModule} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
