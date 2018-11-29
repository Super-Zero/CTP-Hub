import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Home from './Views/Home.js'
import Signup from './Views/Signup'
import Login from './Views/Login'
import Staff from './Views/StaffDash'
import StudentDashboardMain from './studentDashboard/studentDashboardMain'

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
            <Route exact={true} path='/signup' render={() => (
            <div className="App">
              <Signup />
            </div>
            )}/>
            <Route exact={true} path='/login' render={() => (
            <div className="App">
              <Login />
            </div>
            )}/>
            <Route exact={true} path='/staff' render={() => (
            <div className="App">
              <Staff />
            </div>
            )}/>

            <Route path='/studentDashboard' component={StudentDashboardMain}/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
