import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    // search happening!
    this.props.updateSearchText(event.target.value);
  }

  handleKeyPress(event) {
    // when user hit enter, no need to submit the form
    if(event.charCode===13){
        event.preventDefault();
    }
  }

  render() {
    return (
      <form className="search-box col-sm-8 col-sm-offset-4">
        <div className='input-group'>
        <input
          type="text"
          name="search"
          className='form-control'
          value={this.props.searchValue}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <span className="input-group-addon"><i className="fa fa-search" aria-hidden="true"></i> </span>
        </div>
      </form>
    );
  }
}
SearchBox.propTypes = {searchValue: React.PropTypes.string,
                       updateSearchText: React.PropTypes.func};

SearchBox.defaultProps = { searchValue: '' };

export default SearchBox;