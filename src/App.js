import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import BeerHome from './BeerHome';
import './style/App.css';

const breweries = '/breweries';

class App extends Component {
  render() {
    return (
      <div className="background" >
        <div className="container base">
          
          <Route exact path='/' component={mainHeading}/>
          <Route exact path={breweries} component={BeerHome}/>
        </div>
      </div>
    );
  }
}

const mainHeading = () => {
  return (
    <div>
      <header className="title heading">
        Happy Birthday, Judge!
      </header>
      <div>
        <Link to={breweries}>Enter</Link>
      </div>
    </div>
  )
}

export default App;
