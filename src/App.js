import React, { Component } from 'react';
import data from './data';
import BeerSection from './BeerSection';
import './style/App.css';

class App extends Component {
  state = {
    breweries: data.breweries.map(brewery => {
      return {
        visible: false,
        ...brewery,
      };
    })
  }

  handleCollapse = name => {
    this.setState({breweries: this.state.breweries.map(brewery => {
      return {
        ...brewery,
        visible: brewery.name === name ? !brewery.visible : false,
      }
    })})
  }

  render() {
    const { breweries } = this.state;
    return (
      <div>
        <div className="background" />
        <div className="container">
          <header className="title heading">
            A Guide to Beer Tasting in Wellington
          </header>
          {breweries.map(brewery => (
            <BeerSection brewery={brewery} onClick={this.handleCollapse}/>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
