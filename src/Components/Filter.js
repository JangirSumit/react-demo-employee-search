import React from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import imageSrc from "../images/sort.png";

class Filter extends React.Component {
  sortByChange(event) {
    let value = event.target.value;
    this.props.sortByChange(value);
  }

  onCreateClick() {
    this.props.onCreateClick(true);
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid row-height">
          <Col xs={12} md={3}>
            <input
              type="text"
              className="search-text"
              placeholder="Seach Employee by name..."
              onKeyUp={this.props.searchEmployeeKeyUp}
            />
          </Col>
          <Col xs={12} md={1}>
            <strong>Salary</strong>
          </Col>
          <Col xs={12} md={4}>
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

          </Col>
          <Col xs={12} md={4}><select
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
          </Col>
        </Row>
        <Row className="show-grid row-height">
          <Col xs={12} md={1}><strong>Age</strong></Col>
          <Col xs={12} md={2}><div className="slider-container">
            <input
              id="ageSlider"
              type="range"
              min="0"
              max="100"
              value={this.props.age}
              step="1"
              onInput={this.props.ageRangeChange}
            />
          </div></Col>
          <Col xs={12} md={1}><div className="div-age-value">{this.props.age}</div></Col>
          <Col xs={12} md={1}><strong>Sort By</strong></Col><Col xs={12} md={3}><select
            className="select-sort-by"
            onChange={this.sortByChange.bind(this)}
            value={this.props.sortBy}
          >
            <option value="Name">Name</option>
            <option value="Salary">Salary</option>
            <option value="Age">Age</option>
          </select></Col>
          <Col xs={12} md={1}><img
            src={imageSrc}
            alt="sort"
            className="sort-image"
            onClick={this.props.AscDescClick}
          />
          </Col>
          <Col xs={12} md={3}></Col>
          <Col xs={12} md={2}><button type="button" className="btn btn-primary create-button" onClick={this.onCreateClick.bind(this)}>Create Employee</button></Col>
        </Row>
      </Grid>
    );
  }
}

export default Filter;
