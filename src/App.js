import React, { Component } from "react";
import "./App.css";
import EmployeeList from "./Components/EmployeeList";
import Filter from "./Components/Filter";

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
                  <a href="#">
                    Link <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="App">
          <Filter
            searchEmployeeKeyUp={this.searchEmployeeKeyUp.bind(this)}
            searchMinSalary={this.searchMinSalary.bind(this)}
            searchMaxSalary={this.searchMaxSalary.bind(this)}
            ageRangeChange={this.ageRangeChange.bind(this)}
            age={this.state.age}
          />
          <EmployeeList
            searchText={this.state.searchText}
            minSalary={this.state.minSalary}
            maxSalary={this.state.maxSalary}
            age={this.state.age}
          />
        </div>
      </div>
    );
  }
}

export default App;
