import React, { Component } from 'react';
import './style/App.css';

class BeerSection extends Component {
  render() {
    const { brewery, onClick } = this.props;
    return (
      <div className='brewery-section'>
        <span className='heading brewery-heading' onClick={() => onClick(brewery.name)}>
          {brewery.visible ? 'v' : '>'} {brewery.name}
        </span>
        {brewery.visible && <div>
          <div className='description brewery-description'>{brewery.description}</div>
          {brewery.beers && (
            <ul>
              {brewery.beers.map(beer => (
                <li><div className='beer-section'>
                  <span className='heading beer-heading'>{beer.name}</span>
                  <br></br>
                  <span className='description beer-description'>{beer.description}</span>
                </div></li>
          ))}
            </ul>
          )}
          </div>
          }
      </div>
    );
  }
}

export default BeerSection;
