import React, { Component } from 'react';

class FilterHeader extends Component {

  hasQuery(query){
    if (query == null){
      return false;
    }
    else if(query.length === 0){
      return false;
    }
    return true;
  }



  render(){
    return (
      <div className='clearfix filter-header'>
        <h4 className='filter-title'>{this.props.title}</h4>
        <button
          type='button'
          disabled={!this.hasQuery(this.props.query)}
          className='btn btn-reset'
          onClick={()=>{this.props.resetFilter()}}>
            Reset
        </button>
      </div>
      );
  }
}

FilterHeader.propTypes = {title: React.PropTypes.string,
                          resetFilter: React.PropTypes.func,
                          query: React.PropTypes.string};
FilterHeader.defaultProps = {searchText: ''};

export default FilterHeader;
