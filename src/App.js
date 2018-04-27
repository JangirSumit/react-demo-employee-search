import React, { Component } from "react";
import "./App.css";
import EmployeeModule from "./Components/EmployeeModule";
import ProductModule from "./Components/ProductModule";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
      minSalary: "0",
      maxSalary: ">1000000",
      age: 0
    };
  }

  searchEmployeeKeyUp(event) {
    if (event.keyCode === 13) {
      let text = event.target.value;
      this.setState({
        searchText: text
      });
    }
  }

  searchMinSalary(event) {
    let text = event.target.value;
    this.setState({
      minSalary: text
    });
  }

  searchMaxSalary(event) {
    let text = event.target.value;
    this.setState({
      maxSalary: text
    });
  }

  ageRangeChange(event) {
    let age = event.target.value;

    this.setState({
      age: parseInt(age)
    });
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">
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
