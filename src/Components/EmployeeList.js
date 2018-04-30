import React from "react";
import Employee from "./Employee";
import ConfirmationDialog from "./ConfirmationModal";
import EmployeeModal from "./EmployeeModal";

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

  componentDidMount() {
    this.loadEmployees();
  }

  render() {
    if (this.state.isLoading) {
      return <div className="loader" />;
    }

    let employeeMaxSalary = Number.MAX_SAFE_INTEGER;
    let self = this;

    let employeesList = self.state.employees
      .filter(e => {
        let result =
          self.props.searchText === ""
            ? true
            : e.employee_name
                .toLowerCase()
                .includes(self.props.searchText.toLowerCase()) > 0;

        return result;
      })
      .filter(e => {
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
      })
      .filter(e => {
        let age = e.employee_age === "" ? 0 : parseInt(e.employee_age, 10);
        if (
          e.employee_name &&
          (self.props.age === 0 || self.props.age === age)
        ) {
          return true;
        } else {
          return false;
        }
      })
      .map(employee => {
        return (
          <Employee
            key={employee.id}
            employee={employee}
            deleteEmployee={this.deleteEmployee.bind(this)}
            updateEmployee={this.updateEmployee.bind(this)}
          />
        );
      });
    return (
      <div className="employee-details-container">
        {employeesList}
        <ConfirmationDialog
          handleHide={this.handleHide.bind(this)}
          handleOk={this.handleOk.bind(this)}
          show={this.state.showDeleteModal}
        />
        <EmployeeModal
          show={this.state.showUpdateModal}
          handleUpdateEmployeeModal={this.handleUpdateEmployeeModal.bind(this)}
          saveUpdateEmployeeModal={this.saveUpdateEmployeeModal.bind(this)}
          employee={this.employee}
        />
      </div>
    );
  }
}

export default EmployeeList;
