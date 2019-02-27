/*
Author: Zeyaam Arrauf't Shahid
Date: 11/7/2018
*/

import React, { Component } from 'react';
import './css/Signup.css';
import './css/Login.css';
import logo from '../CTPHUB.png';
import '../App';
import axios from 'axios';
import jwt from 'jsonwebtoken';


class LoginStudent extends Component {
  constructor(props) {
    super();
    this.state = {
      eMail: null,
      password: null
    };
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleSubmitForm(event) {
    event.preventDefault();
    if (true) {
      axios.post(`http://localhost:3001/users/login`,{
        "email":this.state.eMail,
        "password":this.state.password
      }).then(res=>
      {
        this.props.handleLogIn();
        let token = res.data.token;
        let decoded = jwt.decode(token);
        localStorage.setItem("token",token);
        localStorage.setItem("email",this.state.eMail)
        this.forceUpdate();
        console.log(decoded)
        if (decoded.typeOfUser === "student") {  
          this.props.history.push('/student')
          return;
        }
        else {
          this.props.history.push('/staff')
          return;
        }
      }).catch(err=> {
        alert("Unsucessful Login!");
        console.log(err);
      });
      event.target.reset();
    } 
  }

  render() {
    return (
      <div className="App">
      <header className="Login-header">
        <div className="LoginForm">
          <img src={logo} className="Login-logo" alt="logo" />
          <div classname="inpForm">
          <form onSubmit={this.handleSubmitForm}>
          <div className="Row">
            <div className="Col-25">
                <label htmlFor={"email"}>
                  {"E-mail"}
                </label>
            </div>
            <div className="Col-75">
              <input 
                className="InputForm"
                type="text" 
                onChange={(event) => {
                  this.setState({
                    eMail: event.target.value
                  });
                }} 
                name={"email"} 
                placeholder={"Enter your E-mail"} 
                ref={"email"} id="inpF"/>
            </div>
          </div>
          <div className="Row">
            <div className="Col-25">
                <label htmlFor={"Password"}>
                  {"Password"}
                </label>
            </div>
            <div className="Col-75">
              <input 
                  className="InputForm"
                  type="password" 
                  onChange={(event) => {
                    this.setState({
                      password: event.target.value
                    })
                  }} 
                  name={"Password"} 
                  placeholder={"Enter your Password"} 
                  ref={"Password"} 
                  validator="true" 
                  minCharacters="8" 
                  requireCapitals="1" 
                  requireNumbers="1" 
                  id="inpF"/>
            </div>
          </div>
            <button 
              type="submit" 
              id="lButton">
                Login
            </button>
            </form>
          </div>
          <div className="Member">Not a Member? <a href="/signup">Sign-up</a></div>
        </div>
      </header>
      </div>
    );
  }
}

export default LoginStudent;
