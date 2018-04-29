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
      showModal: false
    };
    this.employee = {};
  }

  handleHide() {
    this.setState({ showModal: false });
  }

  handleOk() {
    let self = this;
    let employees = this.state.employees;
    fetch("http://localhost:3000/Employees/" + self.employee.id, {
      method: "DELETE"
    }).then(response => {
      if (response.ok) {
        const index = self.state.employees.indexOf(self.employee);
        employees.splice(index, 1);
        self.setState({
          employees: employees,
          showModal: false
        });
      }
    });
  }

  loadEmployees() {
    fetch("http://localhost:3000/Employees", {
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
    this.setState({ showModal: true });
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
        console.log(e);
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
          />
        );
      });
    return (
      <div className="employee-details-container">
        {employeesList}
        <ConfirmationDialog
          handleHide={this.handleHide.bind(this)}
          handleOk={this.handleOk.bind(this)}
          show={this.state.showModal}
        />
        <EmployeeModal />
      </div>
    );
  }
}

export default EmployeeList;
