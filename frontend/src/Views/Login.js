/*
Author: Zeyaam Arrauf't Shahid
Date: 11/7/2018
*/

import React, { Component } from 'react';
import {Route, Redirect} from 'react-router';
import './css/Signup.css';
import './css/Login.css';
import logo from '../CTPHUB.png';
import '../App';
import axios from 'axios';
import jwt from 'jsonwebtoken';



class InputForm extends Component {


  constructor(props){

    super(props);
    this.state = {
      email:"",
      password:"",
    }
  }

  handleFormChange = (e)=>
  {
    const value = e.target.value
    const name = e.target.name
  }






  render() {
    let fieldInputs = this.props.field;
    let fieldNames = this.props.placeHolder
    let elements = Object.keys(fieldInputs).map((key ,index) => {
        return (
        <div className="Row">
          <div className="Col-25">
            {(!this.props.isPassword)? 
              <label htmlFor={fieldInputs[key]}>
                {this.props.placeHolder[0]}
              </label> 
              : 
              <label htmlFor={fieldInputs[key]}>
                {key}
              </label>}
          </div>
          <div className="Col-75">
          {(!this.props.isPassword)? 
            <input 
              type="text" 
              onChange={this.props.field[key]} 
              name={key} 
              placeholder={this.props.placeHolder[1]} 
              ref={key} id="inpF"/> 
            : 
            <input 
              type="password" 
              onChange={this.props.field[key]} 
              name={key} 
              placeholder={this.props.placeHolder[index]} 
              ref={key} 
              validator="true" 
              minCharacters="8" 
              requireCapitals="1" 
              requireNumbers="1" 
              id="inpF"/>}
          </div>
        </div>);
      })
    return <div>{elements}</div>
  }
}

class StuStaffButton extends Component {
  render() {
    return <div 
      className="S-button" 
      id={this.props.comp} 
      onClick={() => this.props.handleButtonClick(this.props.name)}>
        {this.props.student}
      </div>
  }
}


class LoginStudent extends Component {
  constructor(props) {
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
    let canProceed = this.validateEmail(this.state.eMail);
    if (canProceed) {
      console.log("An Email has been sent to "+this.state.eMail+" which contains the instrucitons to activate you account.");
      axios.post(`http://localhost:3001/users/login`,{
        "email":this.state.eMail,
        "password":this.state.password
      }).then(res=>
      {
        alert("Sucessful Login!");
        let token = res.data.token;
        let decoded = jwt.decode(token);
        localStorage.setItem("token",token);
        this.forceUpdate();

        if (decoded.typeOfUser === "student")
        {  
          this.props.history.push('/student')
          return;
        }
        else
        {
          this.props.history.push('/staff')
          return;
        }


      }).catch(err=>
      {
        alert("Unsucessful Login!");
        console.log(err);
      });
      event.target.reset();
    } 
  }
  

  handleButtonClick = (name) => {
    const sSignUp = this.state.studentSignUp;
    if (name === "Staff" && sSignUp === true) {
      this.setState({studentSignUp : !sSignUp});
    }
    else if (name === "Student" && sSignUp === false) {
      this.setState({studentSignUp : !sSignUp});
    }
  }

  render() {
    const inputFields = {
      "email" : (event) => {
        this.setState({
          eMail: event.target.value
        });
      }
    }

    const passFields = {
      "Password" : (event) => {
        this.setState({
          password: event.target.value
        })
      }
    }

    let placeHolders = ["E-mail", "Enter your E-mail"]
    let passHolder = ["Enter your Password"]
    const studentSignUp = this.state.studentSignUp;

    return (
      <div className="App">
      <header className="Login-header">
        <div className="LoginForm">
          <img src={logo} className="Login-logo" alt="logo" />
          <StuStaffButton 
            student="Student" 
            comp={studentSignUp? "signup":""} 
            handleButtonClick={this.handleButtonClick} 
            name="Student"/>
          <StuStaffButton 
            student="Staff" 
            comp={studentSignUp? "":"signup"} 
            handleButtonClick={this.handleButtonClick} 
            name="Staff"/>
          <div classname="inpForm">
          <form onSubmit={this.handleSubmitForm}>
            <InputForm 
              field={inputFields} 
              placeHolder={placeHolders} 
              isPassword={false} 
              isStudent={studentSignUp}/>
            <InputForm 
              field={passFields} 
              placeHolder={passHolder} 
              isPassword={true}/>
            <button type="submit" id="sButton" className= "button">Login as a {studentSignUp? "Student":"Staff"}</button>
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
