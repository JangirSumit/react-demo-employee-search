import React from "react";
import imageSrc from "../images/default-employee.jpg";
import ConfirmationModel from "./ConfirmationModel";

class EmployeeComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      deleteRecord: false
    };
  }

  onDeleteClick() {
    this.setState({
      deleteRecord: true
    });
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
          <button type="button" className="btn btn-primary">
            Update
          </button>
          <button
            type="button"
            onClick={this.onDeleteClick.bind(this)}
            className="btn btn-danger margin-left-10"
            data-target="#modelDialog"
            data-toggle="modal"
          >
            Delete
          </button>
        </div>
        {this.state.deleteRecord ? <ConfirmationModel /> : ""}
      </div>
    );
  }
}

export default EmployeeComponent;
