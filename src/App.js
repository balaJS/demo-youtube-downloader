import React, { Component } from 'react';
import Scripts from './components/Scripts.js';
import Links from './components/Links.js';
import Titlesection from './components/Titlesection.js';
import Leftside from './components/Leftside.js';
import Rightside from './components/Rightside.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Links />
        <Scripts />
        
      	<Titlesection />
      	<div className="container">
  			<div className="row">
  				<Leftside />
  				<Rightside />
  			</div>
  		</div>
      </div>
    );
  }
}

export default App;
