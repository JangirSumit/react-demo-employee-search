import React from "react";
import imageSrc from "../images/default-employee.jpg";

class EmployeeComponent extends React.Component {
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
          <a href="javascript:void(0);" className="btn btn-primary">
            Update
          </a>
          <a href="javascript:void(0);" className="btn btn-danger margin-left-10">
            Delete
          </a>
        </div>
      </div>
    );
  }
}

export default EmployeeComponent;
