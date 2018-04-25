import React from 'react';

class Filter extends React.Component {
    render(){
        return (
            <div className="filters">
                <input type="text" className="search-text" placeholder="Seach Employee by name..." onKeyUp={this.props.searchEmployeeKeyUp}/>
                <div className="search-salary">
                <div className="div-salary">
                    Salary
                </div>
                <select className="select-min-salary" onChange={this.props.searchMinSalary} value={this.props.minSalary}>
                    <option value="0" selected>0</option>
                    <option value="500">500</option>
                    <option value="1000">1000</option>
                    <option value="10000">10000</option>
                    <option value="100000">100000</option>
                    <option value="1000000">1000000</option>
                </select>
                <select className="select-max-salary" onChange={this.props.searchMaxSalary} value={this.props.maxSalary}>
                    <option value="0">0</option>
                    <option value="500">500</option>
                    <option value="1000">1000</option>
                    <option value="100000">100000</option>
                    <option value="1000000">1000000</option>
                    <option value=">1000000" selected>>1000000</option>
                </select>
                </div>
            </div>
        );
    }
}

export default Filter;