import React, { Component } from 'react';
import './css/LoginStudent.css';
import logo from '../CTPHUB.png';
import '../App.js';

class LoginStudent extends Component {
  constructor() {
    super();
    this.state = {
      fName : null,
      lName: null,
      eMail: null,
      sCode: null,
      notAllowed: ["user", "admin", "password"]
    }
  }

  render() {
    let fields = {
      "firstname" : (event) => {
        this.setState({
          fName: event.target.value
        })
      },
      "lastname" : (event) => {
        this.setState({
          lName: event.target.value
        })
      },
      "email" : (event) => {
        this.setState({
          eMail: event.target.value
        })
      },
      "code" : (event) => {
        this.setState({
          sCode: event.target.value
        })
      }
    }

    let placeHolders = ["First Name","Last Name", "E-mail", "Student Code"]
    
    const divElements = Object.keys(fields).map((key ,index) => {
      return (<div className="Row">
        <div className="Col-25">
          <label htmlFor={fields[key]}>{placeHolders[index]}</label>
        </div>
        <div className="Col-75">
          <input type="text" onChange={fields[key]} name={key} placeholder={placeHolders[index]} />
        </div>
      </div>);
    })

    return (
      <div className="App">
      <header className="Login-header">
        <div className="Login">
          <img src={logo} className="Login-logo" alt="logo" />
          <div classname="inpForm">
            {divElements}
            <div className= "button">
              <input type="submit" value="Submit" id="sButton"></input>
            </div>
        </div>
      </div>
    </header>
      </div>
    );
  }
}

export default LoginStudent;
