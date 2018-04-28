import React from "react";
import EmployeeList from "./EmployeeList";
import Filter from "./Filter";

class EmployeeModule extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: "",
            minSalary: "0",
            maxSalary: ">1000000",
            age: 0
        };
    }

    searchEmployeeKeyUp(event) {
        if (event.keyCode === 13) {
            let text = event.target.value;
            this.setState({
                searchText: text
            });
        }
    }

    searchMinSalary(event) {
        let text = event.target.value;
        this.setState({
            minSalary: text
        });
    }

    searchMaxSalary(event) {
        let text = event.target.value;
        this.setState({
            maxSalary: text
        });
    }

    ageRangeChange(event) {
        let age = event.target.value;

        this.setState({
            age: parseInt(age, 10)
        });
    }

    render() {
        return (
            <div className="App">
                <Filter
                    searchEmployeeKeyUp={this.searchEmployeeKeyUp.bind(this)}
                    searchMinSalary={this.searchMinSalary.bind(this)}
                    searchMaxSalary={this.searchMaxSalary.bind(this)}
                    ageRangeChange={this.ageRangeChange.bind(this)}
                    age={this.state.age}
                />
                <EmployeeList
                    searchText={this.state.searchText}
                    minSalary={this.state.minSalary}
                    maxSalary={this.state.maxSalary}
                    age={this.state.age}
                />
            </div>
        );
    }
}

export default EmployeeModule;