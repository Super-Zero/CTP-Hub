import React, { Component } from 'react';

import logo from '../CTPHUB.png';
import '../App.js';
import axios from 'axios';

class Home extends Component {
  constructor() {
    super()
    this.handleUser = this.handleUser.bind(this)
    this.handleJobs = this.handleJobs.bind(this)
  }
  handleUser() {
    var users = [
      {
      "email": "test1@citymail.cuny.edu",
      "fName": "firstTest",
      "lName": "lastTest",
      "typeOfUser": "student",
      "code":117411,
      "password":"admin"
      },
      {
      "email": "zeyaam898@gmail.com",
      "fName": "Zeyaam",
      "lName": "Shahid",
      "typeOfUser": "student",
      "code":117411,
      "password":"admin"
      },
      {
      "email": "yes@gmail.com",
      "fName": "Em",
      "lName": "Kroker",
      "typeOfUser": "staff",
      "code":117411,
      "password":"admin"
      },
      {
      "email": "aryan@mail.com",
      "fName": "Aryan",
      "lName": "J",
      "typeOfUser": "student",
      "code":117411,
      "password":"admin"
      },
      {
      "email": "michael@mail.com",
      "fName": "Michael",
      "lName": "Saterson",
      "typeOfUser": "student",
      "code":117411,
      "password":"admin"
      },
      {
      "email": "paul@mail.com",
      "fName": "Michael",
      "lastName": "Paul",
      "typeOfUser": "student",
      "code":117411,
      "password":"admin"
      },
      {
      "email": "mpaul@mail.com",
      "fName": "Paul",
      "lName": "Michael",
      "typeOfUser": "student",
      "code":117411,
      "password":"admin"
      },
      {
      "email": "admin@mail.com",
      "fName": "admin",
      "lName": "Zeyaam",
      "typeOfUser": "staff",
      "code":117411,
      "password":"admin"
      },
      {
      "email": "mark@mail.com",
      "fName": "mark",
      "lName": "marky",
      "typeOfUser": "staff",
      "code":117411,
      "password":"admin"
      },
      {
        "email": "bill@mail.com",
        "fName": "bill",
        "lName": "billy",
        "typeOfUser": "staff",
        "code":117411,
      "password":"admin"
      },
      {
        "email": "stud@mail.com",
        "fName": "admin",
        "lName": "Zeyaam",
        "typeOfUser": "student",
        "code":117411,
      "password":"admin"
      },
      {
        "email":"studd@mail.com",
        "fName":"Karen",
        "lName":"Smith",
        "code":117411,
        "password":"admin",
        "typeOfUser":"student"
      },
      {
        "email":"stud@mail.com",
        "fName":"Zeyaam",
        "lName":"Shahid",
        "code":712411,
        "password":"admin",
        "typeOfUser":"student"
      },
      {
        "email":"paul@mail.com",
        "fName":"Paul",
        "lName":"Glover",
        "code":732411,
        "password":"admin",
        "typeOfUser":"student"
      },
      {
        "email":"mike@mail.com",
        "fName":"Michael",
        "lName":"Sats",
        "code":741451,
        "password":"admin",
        "typeOfUser":"student"
      },
      {
        "email":"Tom@mail.com",
        "fName":"Tommy",
        "lName":"Ford",
        "code":347411,
        "password":"admin",
        "typeOfUser":"student"
      }
]

    users.forEach(student=> {
      console.log(student)
      axios.post(`http://localhost:3001/users/signup`,student)
      .then(res=> {
        console.log("Sucessful signing up!");
        console.log(res);
      }).catch(err=> {
        console.log("Unsucessful signing up!");
        console.log(err);
      });
    })
  }

  handleJobs() {
    var jobs = [
      {
        "jobTitle": "Software Engineering Intern",
        "companyName" : "Amazon"
      },
      {
        "jobTitle": "Software Engineer",
        "companyName" : "Amazon"
      },
      {
        "jobTitle": "Software Engineering Intern",
        "companyName" : "Google"
      },
      {
        "jobTitle": "Software Engineer",
        "companyName" : "Google"
      },
      {
        "jobTitle": "Software Engineering Intern",
        "companyName" : "Apple"
      },
      {
        "jobTitle": "Software Engineer",
        "companyName" : "Apple"
      },
      {
        "jobTitle": "Web Developer",
        "companyName" : "Amazon"
      },
      {
        "jobTitle": "Full-Stack Web Developer",
        "companyName" : "IBM"
      },
      {
        "jobTitle": "Data Analyst Intern",
        "companyName" : "Palatnir"
      },
      {
        "jobTitle": "Data Analyst",
        "companyName" : "Lyft"
      },
      {
        "jobTitle": "Data Engineer",
        "companyName" : "Facebook"
      }
    ]

    jobs.forEach(job=> {
      console.log(job)
      axios.post(`http://localhost:3001/student/newjob`,job)
      .then(res=> {
        console.log("Sucessful adding job!");
        console.log(res);
      }).catch(err=> {
        console.log("Unsucessful adding job!");
        console.log(err);
      });
    })
  }
    
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to CTP_Hub!
          </p>
          <button onClick={this.handleUser}>Add Users</button>
          <button onClick={this.handleJobs}>Add Jobs</button>
        </header>
      </div>
    );
  }
}

export default Home;
