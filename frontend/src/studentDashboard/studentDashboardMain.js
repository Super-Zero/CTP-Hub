import React, { Component } from 'react';
//import JobCard from './component/jobCard';
import '../Views/css/staff.css';
//import {getAllJobs} from './studentDBUtil/studentDBUtil';
//import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Fuse from "fuse.js";


class StudentCards extends Component {
  render() {
      let cards = this.props.results.map((name) => {
          return(
              <div className="Cards">
                  <div className="StudentCards">
                      <div className="Heading">{name.jobTitle}
                      </div>
                      <button className={this.props.className} onClick={()=> this.props.handleBClick(name)}>{this.props.text}</button>
                      <p className="Text">{name.companyName}<br/>{`Job ID : ` + name.jobId}</p>
                  </div>
              </div>)
      })
      
      return(<div>{cards}</div>)
  }
}



class StudentDashboardMain extends Component {

  constructor(props){
    super(props);
    this.state = {
      loaded: false,
      name: "",
      jobs:[],
      addedjobs: [],
      searchResults: [],
      idChecks: []
      }
      this.getEveryJob = this.getEveryJob.bind(this)
      this.handleAddButton = this.handleAddButton.bind(this)
      this.getAddedJobs = this.getAddedJobs.bind(this)
      this.handleDeleteButton = this.handleDeleteButton.bind(this)
    }

  getEveryJob() {
    return axios.get('http://localhost:3001/student/everyJob').then((res) => {
        this.setState({jobs: res.data})
        }
    )
}

  componentDidMount() {
     this.getEveryJob()
     this.getAddedJobs()
     document.title = "CTP-HUB"


  }

  getAddedJobs() {
    axios.get(`http://localhost:3001/student/alljobs?studentEmail=${localStorage.getItem("email")}`).then(res => {
        res.data.forEach((job) => {
            axios.get(`http://localhost:3001/student/ajob?jobId=${job.jobId}`, {
              "jobId":job.jobId
            })
            .then(res => {
              var aJob = {
                  "jobId": res.data[0].jobId,
                  "jobTitle" : res.data[0].jobTitle,
                  "companyName" : res.data[0].companyName
              }
              this.setState({addedjobs: this.state.addedjobs.concat(aJob)})
              this.setState({idChecks: this.state.idChecks.concat(aJob.jobId)})
            })
        })
        //this.setState({addedStudents: res.data})
    })
}

  handleAddButton(name) {
    if (this.state.idChecks.indexOf(name.jobId) === -1) {
        this.setState({idChecks: this.state.idChecks.concat(name.email)})
        this.setState({addedjobs: this.state.addedjobs.concat(name)})
        axios.post("http://localhost:3001/student/addjob", {
            "studentEmail": localStorage.getItem("email"),
            "jobId": name.jobId
        })
    }
}

handleDeleteButton(name) {
  axios.post(`http://localhost:3001/student/deletejob?studentEmail=${localStorage.getItem("email")}&jobId=${name.jobId}`)
  .then( (res)=> {
      this.setState({addedjobs: [], idChecks: []})    
      this.getAddedJobs()
  }).catch(error => {
      console.log(error);
  });
}

  onSearchChange = (event) => {
    var options = {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          "jobTitle",
          "companyName"
      ]
      };
    var fuse = new Fuse(this.state.jobs, options); // "list" is the item array
    var result = fuse.search(event.target.value);
    this.setState({searchResults : result})
    this.setState({loaded: true})
    this.forceUpdate();
  } 

  render() {
    return (
      <div className="Background">
      <div className="Sidebar"></div>
        <div className="Menubar" >
        <div className="Label">CTP_HUB
            <input 
                className="Inp"
                type="text" 
                onChange={this.onSearchChange}
                placeholder="Job Lookup"/>
          </div>
          { !this.props.isLoggedIn ? 
            (<button className="Logout" onClick={()=>{
              localStorage.clear(); 
              this.props.history.push('/login')}}>
              Logout
            </button>)
            :
            (<button className="Logout" onClick={()=>{
              this.props.history.push('/login')}}>
              Login
            </button>)
          }
        </div>
        <div className="SearchResults">
            <div className="SearchResults-text">
                <StudentCards 
                    results={this.state.searchResults} 
                    handleBClick={this.handleAddButton} 
                    maxResults={4}
                    className="CardButton AddButton"
                    text="+"/>
            </div>
        </div>
        <div className="AddedStudents">
            <div className="SearchResults-text">
                <StudentCards 
                    results={this.state.addedjobs} 
                    handleBClick={this.handleDeleteButton} 
                    maxResults={10}
                    className="CardButton CloseButton"
                    text="X"/>
            </div>
        
        </div>
      </div>
    );
  }
}

export default StudentDashboardMain;