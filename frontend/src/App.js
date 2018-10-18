import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Home from './Views/Home.js'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <Home />
            </div>
            )}/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
