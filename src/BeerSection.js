import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Images from './images'
import Image from './Image'
import './style/App.css';

import BeerHeader from './BeerHeader'

const baseUrl = '/breweries'

class BeerSection extends Component {
  render() {
    const { brewery } = this.props;
    return (
      <div className='brewery-section'>
        <BeerHeader name={brewery.name} description={brewery.description}/>
        {Images.filter(({name}) => 
          name === brewery.name).map(image => 
          <Image image={image}/>)}
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

          <Link to={baseUrl}>
            <header className="subtitle">
              Back to breweries
            </header>
          </Link>
      </div>
    );
  }
}

export default BeerSection;
