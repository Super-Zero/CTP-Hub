/*
Author: Zeyaam Arrauf't Shahid
Date: 10/22/2018
*/

import React, { Component } from 'react';
import './css/Signup.css';
import logo from '../CTPHUB.png';
import '../App';
import axios from 'axios';

class InputForm extends Component {
  render() {
    let elements = Object.keys(this.props.field).map((key ,index) => {
        return (<div className="Row">
          <div className="Col-25">
            {(!this.props.isPassword)? <label htmlFor={this.props.field[key]}>{this.props.placeHolder[index]}</label> : <label htmlFor={this.props.field[key]}>{key}</label>}
          </div>
          <div className="Col-75">
          {(!this.props.isPassword)? <input type="text" onChange={this.props.field[key]} name={key} placeholder={this.props.placeHolder[index]} ref={key} id="inpF"/> : <input type="password" onChange={this.props.field[key]} name={key} placeholder={this.props.placeHolder[index]} ref={key} validator="true" minCharacters="8" requireCapitals="1" requireNumbers="1" id="inpF"/>}
          </div>
        </div>);
      })
    return <div>{elements}</div>
  }
}

class StuStaffButton extends Component {
  render() {
    return <div className="S-button" id={this.props.comp} onClick={this.props.handleButtonClick}>{this.props.student}</div>
  }
}


class LoginStudent extends Component {
  constructor() {
    super();
    this.state = {
      fName : null,
      lName: null,
      eMail: null,
      sCode: null,
      password: null,
      confirmPassword: null,
      staffCode: null,
      studentSignUp : true
    };
    this.validateEmail = this.validateEmail.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  validateEmail(event) {
    var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(event);
  }

  validateCode(event) {

  }

  handlePasswordInput(event) {

  }

  handleConfirmPasswordInput(event) {

  }

  handleSubmitForm(event) {
    event.preventDefault();
    console.log(this.state.eMail);
    let canProceed = this.validateEmail(this.state.eMail);
    if (canProceed) {
      alert("An Email has been sent to "+this.state.eMail+" which contains the instrucitons to activate you account.");
      axios.post(`http://localhost:3001/users/signup`,{
        "email":this.state.eMail,
        "password":this.state.password
      });
      event.target.reset();
    } 
  }
  

  handleButtonClick() {
    const sSignUp = this.state.studentSignUp;
    this.setState({studentSignUp : !sSignUp});
  }

  render() {
    const inputFields = {
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

    const passFields = {
      "Password" : (event) => {
        this.setState({
          password: event.target.value
        })
      },
      "Confirm Password" : (event) => {
        this.setState({
          confirmPassword: event.target.value
        })
      }
    }

    let placeHolders = ["First Name","Last Name", "E-mail", "Student Code"]
    let passHolder = ["Enter a Password", "Re-enter Password"]
    const studentSignUp = this.state.studentSignUp;

    return (
      <div className="App">
      <header className="Login-header">
        <div className="Login">
          <img src={logo} className="Login-logo" alt="logo" />
          <StuStaffButton student="Student" comp={studentSignUp? "signup":""} handleButtonClick={this.handleButtonClick}/>
          <StuStaffButton student="Staff" comp={studentSignUp? "":"signup"} handleButtonClick={this.handleButtonClick}/>
          <div classname="inpForm">
          <form onSubmit={this.handleSubmitForm}>
            <InputForm field={inputFields} placeHolder={placeHolders} isPassword={false}/>
            <InputForm field={passFields} placeHolder={passHolder} isPassword={true}/>
            <button type="submit" id="sButton" className= "button">Sign Up as a {studentSignUp? "Student":"Staff"}</button>
            </form>
          </div>
          <div className="Member">Already a Member? <a href="">Log-in</a></div>
        </div>
      </header>
      </div>
    );
  }
}

export default LoginStudent;
