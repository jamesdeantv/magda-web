import React, { Component } from 'react';
import './ToggleList.css';
class ToggleList extends Component {
    constructor(props) {
      super(props);
      this.onClick= this.onClick.bind(this);
      this.state = {
        isExpanded: false
      }
    }

    onClick(){
      this.setState({
        isExpanded: !this.state.isExpanded
      })
    }

    render(){
      let defaultLength = this.props.defaultLength;
      let list = this.props.list;
      let tempSize = defaultLength > list.length ? list.length : defaultLength;
      let size = this.state.isExpanded ? list.length : tempSize;
      return <ul className={`list-unstyled toggle-list ${this.props.className}`}>
                {list.slice(0, size).map(o=><li key={this.props.getKey(o)}>{this.props.renderFunction(o)}</li>)}
                {list.length - tempSize > 0 &&
                  <li>
                    <button onClick={this.onClick}
                          className='btn toggle-list__toggle-expand-btn'>
                           {this.state.isExpanded ? `Show less` : `+ Show ${list.length - tempSize} more`}
                    </button>
                  </li>
                }
              </ul>
    }
}

ToggleList.propTypes = {list: React.PropTypes.array,
                        defaultLength: React.PropTypes.number,
                        renderFunction: React.PropTypes.func,
                        getKey: React.PropTypes.func};

export default ToggleList;
