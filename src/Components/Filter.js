import React from 'react';

class Filter extends React.Component {
    render(){
        return (
            <div class="filters row">
    <div class="col">
    <input type="text" className="search-text" placeholder="Seach Employee by name..." onKeyUp={this.props.searchEmployeeKeyUp}/>
    </div>
    <div class="col">
    <div className="search-salary">
                <div className="div-salary">
                    Salary
                </div>
                <select className="select-min-salary" onChange={this.props.searchMinSalary} value={this.props.minSalary}>
                    <option value="0" selected>Minimum</option>
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
    <div class="col">
    <div className="div-age-container">
           <div className="div-age">Age</div>
             <div className="slider-container"><input id="ageSlider" type="range" min="0" max="100" value={this.props.age} step="1" onInput={this.props.ageRangeChange} />
                    
               </div>
                   <div className="div-age-value">{this.props.age}</div>
              </div>
    </div>
  </div>



            // <div className="filters">
            //     <input type="text" className="search-text" placeholder="Seach Employee by name..." onKeyUp={this.props.searchEmployeeKeyUp}/>
            //     <div className="search-salary">
            //     <div className="div-salary">
            //         Salary
            //     </div>
            //     <select className="select-min-salary" onChange={this.props.searchMinSalary} value={this.props.minSalary}>
            //         <option value="0" selected>Minimum</option>
            //         <option value="500">500</option>
            //         <option value="1000">1000</option>
            //         <option value="10000">10000</option>
            //         <option value="100000">100000</option>
            //         <option value="1000000">1000000</option>
            //     </select>
            //     <select className="select-max-salary" onChange={this.props.searchMaxSalary} value={this.props.maxSalary}>
            //         <option value="0">0</option>
            //         <option value="500">500</option>
            //         <option value="1000">1000</option>
            //         <option value="100000">100000</option>
            //         <option value="1000000">1000000</option>
            //         <option value=">1000000" selected>>1000000</option>
            //     </select>
            //     </div>
            //     <div className="div-age-container">
            //         <div className="div-age">Age</div>
            //         <div className="slider-container"><input id="ageSlider" type="range" min="0" max="100" value={this.props.age} step="1" onInput={this.props.ageRangeChange} />
                    
            //         </div>
            //         <div className="div-age-value">{this.props.age}</div>
            //     </div>
            // </div>
        );
    }
}

export default Filter;