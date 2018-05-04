import React from "react";
import imageSrc from "../images/default-employee.jpg";
import { Button, Thumbnail, Col } from 'react-bootstrap';

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
      <Col xs={6} md={3}>
        <Thumbnail src={imageSrc} alt="242x200">
          <strong>{this.props.employee.employee_name}</strong>
          <h5>({this.props.employee.employee_age})</h5>
          <p>
            Salary : {this.props.employee.employee_salary}
          </p>
          <p>
            <Button bsSize="small" bsStyle="primary" onClick={this.updateEmployee.bind(this)}>Update</Button>&nbsp;
            <Button bsStyle="danger" bsSize="small" data-target="#modelDialog" onClick={this.deleteEmployee.bind(this)}
              data-toggle="modal">Delete</Button>
          </p>
        </Thumbnail>
      </Col>
    );
  }
}

export default EmployeeComponent;
