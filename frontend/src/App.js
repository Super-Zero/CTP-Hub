import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Home from './Views/Home.js'
import Signup from './Views/Signup'
import Login from './Views/Login'
import Staff from './Views/StaffDash'
import theme from './materialTheme'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import StudentDashboardMain from './studentDashboard/studentDashboardMain'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <div>
            <Route exact={true} path='/' component={Home} />
            <Route exact={true} path='/signup' component={Signup} />
            <Route exact={true} path='/login' component = {Login} />
            <Route exact={true} path='/staff' component ={Staff}/>
            <Route exact={true} path='/student' component={StudentDashboardMain}/>
          </div>
          </MuiThemeProvider>
        </BrowserRouter>
    );
  }
}

export default App;
