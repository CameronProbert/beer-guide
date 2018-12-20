import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import data from './data';
import BeerSection from './BeerSection';
import BeerHeader from './BeerHeader'
import './style/App.css';

const baseUrl = '/breweries';

class App extends Component {
  state = {
    breweries: data.breweries.map(brewery => {
      return {
        visible: false,
        ...brewery,
      };
    })
  }

  render() {
    const { breweries } = this.state;
    return (
      <div>
        <div className="background" />
        <div className="container base">
          <header className="title heading">
            <Link to="/">A Guide to Beer Tasting in Wellington</Link>
          </header>
          <Route exact path={baseUrl} render={() => (
            breweries.map(brewery => (
              <Link to={`${baseUrl}/${brewery.name.replace(' ', '-').toLowerCase()}`}>
                <BeerHeader key={brewery.name} name={brewery.name} description={brewery.description}/>
              </Link>
            )))}
          />
          <Route path={`${baseUrl}/:brewery`} render={({match: {params}}) => {
            breweries.filter(brewery => 
                brewery.name.replace(' ', '-').toLowerCase() === params.brewery)
              .map(brewery => 
              (
                <BeerSection brewery={brewery}/>
            ))}}
          />
        </div>
      </div>
    );
  }
}

export default App;
