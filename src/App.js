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
          <Route path={breweries} component={BeerHome}/>
        </div>
      </div>
    );
  }
}

const mainHeading = () => {
  return (
    <div className="centre-align-contents">
      <header className="title heading">
        Happy Birthday, Judge!
      </header>
      <p className='description'>Would have loved to catch you last weekend, unfortunately 
        I was stuck in Mike's company the whole time instead, so I
        figured I'd taste some brews and drink my way to a state
        where he looked pretty. So because I couldn't do it with you,
        I have come up with an alternate tasting guide for you as you
        do the tour yourself!</p>
      <p>- Love from Cam</p>
      <Link to={breweries}>
        <button onClick={e => e.stopPropagation()} className='enter-button btn btn-primary'>
          Enter
        </button>
      </Link>
    </div>
  )
}

export default App;
