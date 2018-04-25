import React from 'react';
import Employee from './Employee';

class EmployeeList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            employees:{},
            isLoading:true
        };
    }

    loadEmployees(){
        fetch("http://dummy.restapiexample.com/api/v1/employees").then((response)=>{
            return response.json();
        }).then((employees)=>{
            this.setState({
                employees: employees,
                isLoading: false
            }); 
        });
    }

    componentDidMount() {
        this.loadEmployees();
    }

    render(){
        if(this.state.isLoading){
            return <div>Loading...</div>
        }

        let employeeMaxSalary =  Number.MAX_SAFE_INTEGER;
        let self = this;

        let employeesList = self.state.employees
                            .filter(e=>self.props.searchText === "" ? true :
                                e.employee_name.toLowerCase().includes(self.props.searchText.toLowerCase()) > 0)
                                .filter(e=>{
                                    let salary = parseInt(e.employee_salary,10);
                                    let minSalary = parseInt(self.props.minSalary,10);
                                    let maxSalary = self.props.maxSalary === ">1000000" ? employeeMaxSalary : parseInt(self.props.maxSalary,10)

                                    if(salary >= minSalary && salary <= maxSalary){
                                        return true;
                                    }

                                    return false;
                                })
                            .map((employee)=>{
            return <Employee key={employee.id} employee={employee}/>
            })
        return(
            <div className="employee-details-container"> <h3>Employee Details</h3>
            {employeesList}
            </div>
        );
    }
}

export default EmployeeList;