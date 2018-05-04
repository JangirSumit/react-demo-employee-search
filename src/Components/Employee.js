import React from "react";
import imageSrc from "../images/default-employee.jpg";
import { Button } from 'react-bootstrap';

class EmployeeComponent extends React.Component {
  deleteEmployee() {
    this.props.deleteEmployee(this.props.employee);
  }

  updateEmployee() {
    this.props.updateEmployee(this.props.employee);
  }

  render() {
    let cardStyle = {
      width: "240px",
      float: "left",
      marginTop: "40px",
      marginLeft: "30px"
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
          <Button bsSize="xsmall" bsStyle="primary" onClick={this.updateEmployee.bind(this)}>Update</Button>
          <Button bsStyle="danger" bsSize="xsmall" className="margin-left-10" data-target="#modelDialog" onClick={this.deleteEmployee.bind(this)}
            data-toggle="modal">Delete</Button>
        </div>
      </div>
    );
  }
}

export default EmployeeComponent;
