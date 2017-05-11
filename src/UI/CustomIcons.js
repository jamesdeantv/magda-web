import React, { Component } from 'react';
class CustomIcons extends Component {
    getIcon(name){
        const iconTypes = ['Default', 'CSV', 'DOC', 'DOCX', 'HTML', 'JSON', 'KML', 'PDF', 'TXT', 'XLS','XLSX', 'ZIP'];
        let type = 0;
        if(iconTypes.indexOf(name) > 0){
        type = iconTypes.indexOf(name)
        }
        return `./assets/file-icons/${iconTypes[type]}.png`;
  }

    render(){
      return <img src={this.getIcon(this.props.name)} alt={this.props.name} className={this.props.className}/>
    }
}

CustomIcons.propTypes = {name: React.PropTypes.string, className: React.PropTypes.string};

export default CustomIcons;