import React from "react";
import { Jumbotron, Panel } from "react-bootstrap";
import EmployeeList from "./EmployeeList";
import Filter from "./Filter";

class EmployeeModule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
      minSalary: "0",
      maxSalary: ">1000000",
      age: 0,
      sortBy: "Name",
      asc: false,
      showCreateEmployee: false,
      count: 0
    };
  }

  changeCount(count) {
    this.setState({
      count: count
    });
  }

  sortByChange(sortBy) {
    this.setState({
      sortBy: sortBy,
      asc: false
    });
  }

  AscDescClick() {
    let current = this.state.asc;
    this.setState({
      asc: !current
    });
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
      age: parseInt(age, 10)
    });
  }

  handleShowEmployeeModal(show) {
    this.setState({
      showCreateEmployee: show
    });
  }

  handleCreateEmployeeModal() {
    this.setState({ showCreateEmployee: false });
  }

  render() {
    return (
      <div>
        <Jumbotron className="header">
          <h3>
            <strong>Employee Details</strong>
          </h3>
        </Jumbotron>
        <Panel bsStyle="primary" className="filter-panel">
          <Panel.Heading>
            <Panel.Title componentClass="h3">Filters</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <Filter
              searchEmployeeKeyUp={this.searchEmployeeKeyUp.bind(this)}
              searchMinSalary={this.searchMinSalary.bind(this)}
              searchMaxSalary={this.searchMaxSalary.bind(this)}
              ageRangeChange={this.ageRangeChange.bind(this)}
              age={this.state.age}
              sortBy={this.state.sortBy}
              sortByChange={this.sortByChange.bind(this)}
              AscDescClick={this.AscDescClick.bind(this)}
              onCreateClick={this.handleShowEmployeeModal.bind(this)}
              count={this.state.count}
            />
          </Panel.Body>
        </Panel>
        <Panel bsStyle="primary">
          <Panel.Body>
            <EmployeeList
              searchText={this.state.searchText}
              minSalary={this.state.minSalary}
              maxSalary={this.state.maxSalary}
              age={this.state.age}
              asc={this.state.asc}
              sortBy={this.state.sortBy}
              sortByChange={this.sortByChange.bind(this)}
              showCreateEmployee={this.state.showCreateEmployee}
              handleCreateEmployeeModal={this.handleCreateEmployeeModal.bind(
                this
              )}
              handleShowEmployeeModal={this.handleShowEmployeeModal.bind(this)}
              changeCount={this.changeCount.bind(this)}
            />
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

export default EmployeeModule;
