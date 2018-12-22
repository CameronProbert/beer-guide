import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import data from './data';
import BeerSection from './BeerSection';
import BeerHeader from './BeerHeader'
import Image from './Image'
import { sitting } from './images'
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
          <Link to={baseUrl}>
            <header id='header' className="title">
              A Guide to Beer Tasting in Wellington
            </header>
          </Link>
          <Route exact path={baseUrl} render={() => <Image image={sitting}/>}/>
          <Route exact path={baseUrl} render={() => (
            breweries.map(brewery => (
              <Link key={brewery.name} to={`${baseUrl}/${brewery.name.replace(' ', '-').toLowerCase()}`}>
                <BeerHeader name={brewery.name} description={brewery.description}/>
              </Link>
            )))}
          />
          <Route path={`${baseUrl}/:brewery`} render={({match: {params}}) => {
            return breweries.filter(brewery => 
                brewery.name.replace(' ', '-').toLowerCase() === params.brewery)
              .map(brewery => 
              (
                <BeerSection key={brewery.name} brewery={brewery}/>
              ))
          }}/>
      </div>
    );
  }
}

export default App;
