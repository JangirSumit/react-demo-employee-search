import React from "react";
import imageSrc from "../images/default-employee.jpg";

class EmployeeComponent extends React.Component {
  deleteEmployee() {
    this.props.deleteEmployee(this.props.employee);
  }

  updateEmployee(){
    this.props.updateEmployee(this.props.employee);
  }

  render() {
    let cardStyle = {
      width: "300px",
      float: "left",
      paddingLeft: "30px",
      paddingTop: "40px"
    };

    return (
      <div className="card" style={cardStyle}>
        <div className="card-header">
          <strong>{this.props.employee.employee_name}</strong>
        </div>
        <img className="card-img-top" src={imageSrc} alt="" />
        <div className="card-body">
          <h5 className="card-title">({this.props.employee.employee_age})</h5>
          <p className="card-text">
            Salary : {this.props.employee.employee_salary}
          </p>
          <button type="button" className="btn btn-primary" onClick={this.updateEmployee.bind(this)}>
            Update
          </button>
          <button
            type="button"
            onClick={this.deleteEmployee.bind(this)}
            className="btn btn-danger margin-left-10"
            data-target="#modelDialog"
            data-toggle="modal"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default EmployeeComponent;
