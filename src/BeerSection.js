import React, { Component } from 'react';
import './style/App.css';

import BeerHeader from './BeerHeader'

class BeerSection extends Component {
  render() {
    const { brewery } = this.props;
    return (
      <div className='brewery-section'>
        <BeerHeader name={brewery.name} description={brewery.description}/>
        {brewery.beers && (
          <ul>
            {brewery.beers.map(beer => (
              <li key={beer.name}>
                <div className='beer-section'>
                  <span className='heading beer-heading'>
                    {beer.name}
                  </span>
                  <br></br>
                  <span className='description beer-description'>
                    {beer.description}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default BeerSection;
