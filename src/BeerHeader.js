import React, { Component } from 'react';
import './style/App.css';

class BeerHeader extends Component {
  render() {
    const { name, description } = this.props;
    return (
      <div className='brewery-section'>
        <span className='heading brewery-heading'>
          {name}
        </span>
        {description && <div>
          <div className='description brewery-description'>{description}</div>
        </div>}
      </div>
    );
  }
}

export default BeerHeader;
