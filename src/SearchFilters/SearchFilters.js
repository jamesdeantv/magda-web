import React, { Component } from 'react';
import FilterPublisher from './FilterPublisher';
import FilterDataFormat from './FilterDataFormat';
import FilterDateRange from './FilterDateRange';
import FilterJurisdiction from './FilterJurisdiction';


class SearchFilters extends Component {
  renderFilters(){
      return(
            <div>
              <FilterPublisher options={this.props.filterPublisher}
                               title='publisher'
                               id='publisher'
                               location={this.props.location}
                               updateQuery={this.props.updateQuery}/>

              <FilterJurisdiction options={this.props.filterJurisdiction}
                                       title='jurisdiction'
                                       id='jurisdiction'
                                       location={this.props.location}
                                       updateQuery={this.props.updateQuery}/>

              <FilterDateRange options={this.props.filterTemporal}
                                       title='date range'
                                       id='temporal'
                                       location={this.props.location}
                                       updateQuery={this.props.updateQuery}/>

              <FilterDataFormat options={this.props.filterFormat}
                                       title='data format'
                                       id='format'
                                       location={this.props.location}
                                       updateQuery={this.props.updateQuery}/>

            </div>);
  }

  render() {
    return (
      <div>
      {this.props.location.query.q && this.renderFilters()}
      </div>
    );
  }
}

SearchFilters.propTypes={filters: React.PropTypes.object,
                         toggleFilter: React.PropTypes.func,
                         location: React.PropTypes.object,
                         updateQuery: React.PropTypes.func};
SearchFilters.defaultProps={filters: {}};

export default SearchFilters;
