import React from "react";
import imageSrc from "../images/sort.png";

class Filter extends React.Component {
  render() {
    return (
      <div className="filters row">
        <div className="col">
          <input
            type="text"
            className="search-text"
            placeholder="Seach Employee by name..."
            onKeyUp={this.props.searchEmployeeKeyUp}
          />
        </div>
        <div className="col">
          <div className="search-salary">
            <div className="div-salary">Salary</div>
            <select
              className="select-min-salary"
              onChange={this.props.searchMinSalary}
              value={this.props.minSalary}
            >
              <option value="0" selected>
                Minimum
              </option>
              <option value="500">500</option>
              <option value="1000">1000</option>
              <option value="10000">10000</option>
              <option value="100000">100000</option>
              <option value="1000000">1000000</option>
            </select>
            <select
              className="select-max-salary"
              onChange={this.props.searchMaxSalary}
              value={this.props.maxSalary}
            >
              <option value="0">0</option>
              <option value="500">500</option>
              <option value="1000">1000</option>
              <option value="100000">100000</option>
              <option value="1000000">1000000</option>
              <option value=">1000000" selected>
                >1000000
              </option>
            </select>
          </div>
        </div>
        <div className="col">
          <div className="div-age-container">
            <div className="div-age">Age</div>
            <div className="slider-container">
              <input
                id="ageSlider"
                type="range"
                min="0"
                max="100"
                value={this.props.age}
                step="1"
                onInput={this.props.ageRangeChange}
              />
            </div>
            <div className="div-age-value">{this.props.age}</div>
          </div>
        </div>
        <div className="sort-by-wrapper">
          <div className="sort-by-text">Sort By</div>
          <select
            className="select-sort-by"
            // onChange={this.props.searchMaxSalary}
            // value={this.props.maxSalary}
          >
            <option value="Name">Name</option>
            <option value="Salary">Salary</option>
            <option value="Age">Age</option>
          </select>
          <img src={imageSrc} alt="sort" className="sort-image"/>
        </div>
      </div>
    );
  }
}

export default Filter;
