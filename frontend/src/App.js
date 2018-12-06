import React, { Component } from 'react';
import {Router, Route} from 'react-router-dom';
import './App.css';
import Home from './Views/Home.js'
import Signup from './Views/Signup'
import Login from './Views/Login'
import Staff from './Views/StaffDash'
import StudentDashboardMain from './studentDashboard/studentDashboardMain'
import history from './history';

class App extends Component {
  render() {
    return (
        <Router history={history}>
          <div>
            <Route exact={true} path='/' component={Home} />
            <Route exact={true} path='/signup' component={Signup} />
            <Route exact={true} path='/login' component = {Login} />
            <Route exact={true} path='/staff' component ={Staff}/>
            <Route exact={true} path='/student' component={StudentDashboardMain}/>
          </div>
        </Router>
    );
  }
}

export default App;
