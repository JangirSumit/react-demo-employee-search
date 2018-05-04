import React from "react";
import Employee from "./Employee";
import ConfirmationDialog from "./ConfirmationModal";
import EmployeeModal from "./EmployeeModal";
import { Grid, Row } from 'react-bootstrap';

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: {},
      isLoading: true,
      showDeleteModal: false,
      showUpdateModal: false
    };
    this.employee = {};
  }

  handleHide() {
    this.setState({ showDeleteModal: false });
  }

  handleOk() {
    let self = this;
    let employees = this.state.employees;
    fetch("http://localhost:4000/Employees/" + self.employee.id, {
      method: "DELETE"
    }).then(response => {
      if (response.ok) {
        const index = self.state.employees.indexOf(self.employee);
        employees.splice(index, 1);
        self.setState({
          employees: employees,
          showDeleteModal: false
        });
      }
    });
  }

  loadEmployees() {
    fetch("http://localhost:4000/Employees", {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .then(employees => {
        this.setState({
          employees: employees,
          isLoading: false
        });
      }).catch((error) => {
        this.setState({
          isLoading: false
        });
      });
  }

  deleteEmployee(employee) {
    this.employee = employee;
    this.setState({ showDeleteModal: true });
  }

  updateEmployee(employee) {
    this.employee = employee;
    this.setState({ showUpdateModal: true });
  }

  handleUpdateEmployeeModal() {
    this.setState({ showUpdateModal: false });
  }

  saveUpdateEmployeeModal(newEmployee) {
    if (newEmployee.id) {
      this.updateEmployeeRecord(newEmployee);
    } else {
      this.createEmployeeRecord(newEmployee);
    }
  }

  updateEmployeeRecord(newEmployee) {
    let self = this;
    let index = this.state.employees.indexOf(this.employee);
    let emps = this.state.employees;
    fetch("http://localhost:4000/Employees/" + newEmployee.id, {
      method: "PUT",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(newEmployee)
    }).then(response => {
      if (response.ok) {
        self.employee = {};
        emps[index] = newEmployee;
        self.setState({
          showUpdateModal: false,
          employees: emps
        });
      }
    });
  }

  createEmployeeRecord(newEmployee) {
    let self = this;
    let emp = { ...newEmployee };
    delete emp.id;

    fetch("http://localhost:4000/Employees", {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(emp)
    }).then(response => {
      if (response.ok) {
        this.loadEmployees();
        self.setState({
          showUpdateModal: false,
        });
        self.props.handleShowEmployeeModal(false);
      }
    });
  }

  componentDidMount() {
    this.loadEmployees();
  }

  filterByName(e) {
    let self = this;

    let result =
      self.props.searchText === ""
        ? true
        : e.employee_name
          .toLowerCase()
          .includes(self.props.searchText.toLowerCase()) > 0;

    return result;
  }

  filterByAge(e) {
    let self = this;
    let age = e.employee_age === "" ? 0 : parseInt(e.employee_age, 10);
    if (
      e.employee_name &&
      (self.props.age === 0 || self.props.age === age)
    ) {
      return true;
    }
    return false;
  }

  filterBySalary(e) {
    let self = this;
    let employeeMaxSalary = Number.MAX_SAFE_INTEGER;

    let salary = parseInt(e.employee_salary, 10);
    let minSalary = parseInt(self.props.minSalary, 10);
    let maxSalary =
      self.props.maxSalary === ">1000000"
        ? employeeMaxSalary
        : parseInt(self.props.maxSalary, 10);

    if (salary >= minSalary && salary <= maxSalary) {
      return true;
    }

    return false;
  }

  sortEmployees(a, b) {
    let self = this;
    //ASC
    if (self.props.asc) {
      if (self.props.sortBy === "Name") {
        let nameA = a.employee_name.toLowerCase(),
          nameB = b.employee_name.toLowerCase();
        if (nameA < nameB)
          return -1;
        if (nameA > nameB) return 1;
        return 0;
      } else if (self.props.sortBy === "Age") {
        let sa = a.employee_age === "" ? 0 : parseInt(a.employee_age, 10);
        let sb = b.employee_age === "" ? 0 : parseInt(b.employee_age, 10);
        return sa - sb;
      } else if (self.props.sortBy === "Salary") {
        let sa =
          a.employee_salary === "" ? 0 : parseFloat(a.employee_salary, 10);
        let sb =
          b.employee_salary === "" ? 0 : parseFloat(b.employee_salary, 10);
        return sa - sb;
      }
      //DESC
    } else {
      if (self.props.sortBy === "Name") {
        let nameA = a.employee_name.toLowerCase(),
          nameB = b.employee_name.toLowerCase();
        if (nameA < nameB)
          return 1;
        if (nameA > nameB) return -1;
        return 0;
      } else if (self.props.sortBy === "Age") {
        let sa = a.employee_age === "" ? 0 : parseInt(a.employee_age, 10);
        let sb = b.employee_age === "" ? 0 : parseInt(b.employee_age, 10);
        return sb - sa;
      } else if (self.props.sortBy === "Salary") {
        let sa =
          a.employee_salary === "" ? 0 : parseFloat(a.employee_salary, 10);
        let sb =
          b.employee_salary === "" ? 0 : parseFloat(b.employee_salary, 10);
        return sb - sa;
      }
    }
  }

  renderEmployee(employee) {
    return (
      <Employee
        key={employee.id}
        employee={employee}
        deleteEmployee={this.deleteEmployee.bind(this)}
        updateEmployee={this.updateEmployee.bind(this)}
      />
    );
  }

  render() {
    if (this.state.isLoading) {
      return <div className="loader" />;
    } else if (!this.state.employees.length) {
      return <div className="error-loading-data">Error in Loading data...</div>
    }

    let showEmployeeModal = this.props.showCreateEmployee || this.state.showUpdateModal;

    let self = this;

    let employeesList = self.state.employees
      .filter(e => self.filterByName(e))
      .filter(e => self.filterBySalary(e))
      .filter(e => self.filterByAge(e))
      .sort((a, b) => self.sortEmployees(a, b))
      .map(employee => self.renderEmployee(employee));

    return (
      <div>
        <Grid>
          <Row>
            {employeesList}
          </Row>
        </Grid>
        <ConfirmationDialog
          handleHide={this.handleHide.bind(this)}
          handleOk={this.handleOk.bind(this)}
          show={this.state.showDeleteModal}
        />
        <EmployeeModal
          show={showEmployeeModal}
          handleUpdateEmployeeModal={this.handleUpdateEmployeeModal.bind(this)}
          saveUpdateEmployeeModal={this.saveUpdateEmployeeModal.bind(this)}
          employee={this.employee}
        />
      </div>
    );
  }
}

export default EmployeeList;
