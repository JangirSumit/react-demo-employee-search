import React from 'react';

class EmployeeComponent extends React.Component {
    render(){
        return (
            <div className="employee-details table">
                <div className="float-left padding-left"><strong>Employee Name: </strong></div>
                <div className="float-left">{this.props.employee.employee_name}</div>
                <div className="float-left padding-left"><strong>Employee Salary: </strong></div>
                <div className="float-left">{this.props.employee.employee_salary}</div>
                <div className="float-left padding-left"><strong>Employee Age: </strong></div>
                <div className="float-left">{this.props.employee.employee_age}</div>
                <div className="float-left padding-left"><strong>Profile Image: </strong></div>
                <div className="float-left">{this.props.employee.profile_image}</div>
            </div>
        );
    }
}

export default EmployeeComponent;