import React from 'react';
import image from '../images/default-employee.jpg';

class EmployeeComponent extends React.Component {
    render(){
        return (
            <div className="employee-details table">
                <div className="float-left"><img src={image} alt=""/></div>
                <div className="float-left padding-left"><strong>Employee Name: </strong></div>
                <div className="float-left">{this.props.employee.employee_name}</div>
                <div className="float-left padding-left"><strong>Employee Salary: </strong></div>
                <div className="float-left">{this.props.employee.employee_salary}</div>
                <div className="float-left padding-left"><strong>Employee Age: </strong></div>
                <div className="float-left">{this.props.employee.employee_age}</div>
            </div>
        );
    }
}

export default EmployeeComponent;