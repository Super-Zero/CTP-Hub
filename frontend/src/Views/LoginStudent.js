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
      sCode: null
    }
  }
  validateEmail(event) {
    var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(event);
  }

  handlePasswordInput(event) {

  }

  render() {
    let fields = {
      "firstname" : (event) => {
        this.setState({
          fName: event.target.value
        });
      },
      "lastname" : (event) => {
        this.setState({
          lName: event.target.value
        });
      },
      "email" : (event) => {
        this.setState({
          eMail: event.target.value
        });
      },
      "code" : (event) => {
        this.setState({
          sCode: event.target.value
        });
      }
    }

    let placeHolders = ["First Name","Last Name", "E-mail", "Student Code"]
    
    const divElements = Object.keys(fields).map((key ,index) => {
      return (<div className="Row">
        <div className="Col-25">
          <label htmlFor={fields[key]}>{placeHolders[index]}</label>
        </div>
        <div className="Col-75">
          <input type="text" onChange={fields[key]} name={key} placeholder={placeHolders[index]} ref={key}/>
        </div>
      </div>);
    })

    return (
      <div className="App">
      <header className="Login-header">
        <div className="Login">
          <img src={logo} className="Login-logo" alt="logo" />
          <div classname="inpForm">
          <form onSubmit={this.submitForm}>
            {divElements}
            <div className="Row">
              <div className="Col-25">
                <label>Password</label>
              </div>
              <div className="Col-75">
                <input type="password" onChange={this.handlePasswordInput} name="Password" placeholder="Enter a Password" ref="password"/>
              </div>
            </div>
            <div className="Row">
            <div className="Col-25">
              <label>Confirm Password</label>
            </div>
            <div className="Col-75">
              <input type="password" onChange={this.handlePasswordInput} name="Password" placeholder="Re-enter Password" ref="passwordConfirm"/>
            </div>
            </div>
            <button type="submit" id="sButton" className= "button">Sign Up</button>
            </form>
          </div>
        </div>
      </header>
      </div>
    );
  }
}

export default LoginStudent;
