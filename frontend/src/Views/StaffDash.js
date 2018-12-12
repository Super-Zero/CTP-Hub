import React, { Component } from 'react';
import './css/staff.css';
import logo from '../CTPHUB.png';
import '../App';
import axios from 'axios';
import Fuse from "fuse.js";

class Button extends Component {
    render() {
        let arr = new Array(this.props.size).fill(0).map(()=>{
            return <div className={this.props.className}>
            <img id={this.props.imageId} src={this.props.image}/>
        </div>
        })
        return (<div onClick={this.props.handleButtonClick.bind(this)}>{arr}</div>)
    }
}

class StudentCards extends Component {
    render() {
        let cards = this.props.results.slice(0).reverse().map((name) => {
            return(
                <div className="Cards">
                    <div className="StudentCards">
                        <div className="Heading">{name.firstName+ "   " + name.lastName}</div>
                        <button className={this.props.className} onClick={()=> this.props.handleBClick(name)}>{this.props.text}</button>
                        <p className="Text">{name.email}</p>
                    </div>
                </div>)
        })
        
        return(<div>{cards}</div>)
    }
}

class StaffDash extends Component {
    constructor() {
        super()
        this.state ={
            loaded: false,
            students: [],
            searchResults: [],
            addedStudents: [],
            emailChecks: []
        }
        this.toggleAddStudentMenu = this.toggleAddStudentMenu.bind(this)
        this.getStudents = this.getStudents.bind(this)
        this.getAddedStudents = this.getAddedStudents.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.onSearchChange = this.onSearchChange.bind(this)
        this.handleAddButton = this.handleAddButton.bind(this)
        this.handleDeleteButton = this.handleDeleteButton.bind(this)
    }

    getAddedStudents() {
        axios.get("http://localhost:3001/staff/getStudent", {
            params : {
                staffEmail: localStorage.getItem("email")}
        }).then(res => {
            res.data.forEach((student) => {
                axios.get(`http://localhost:3001/users/getastudent?email=${student.studentEmail}`
                ).then(res => {
                    var name = {
                        "email": res.data[0].email,
                        "firstName" : res.data[0].firstName,
                        "lastName" : res.data[0].lastName
                    }
                    this.setState({addedStudents: this.state.addedStudents.concat(name)})
                    this.setState({emailChecks: this.state.emailChecks.concat(name.email)})
                })
            })
            console.log("RESULT"+JSON.stringify(res.data[0].studentEmail))
            //this.setState({addedStudents: res.data})
        })
    }

    toggleAddStudentMenu = () => {
        console.log("Button")
        this.getStudents()
        this.setState({showAddStudentMenu: !this.state.showAddStudentMenu})
    }

    handleAddButton(name) {
        console.log("EMAIL: "+this.state.emailChecks.indexOf(name.email))
        console.log(this.state.emailChecks)
        if (this.state.emailChecks.indexOf(name.email) === -1) {
            console.log(this.state.emailChecks)
            this.setState({emailChecks: this.state.emailChecks.concat(name.email)})
            this.setState({addedStudents: this.state.addedStudents.concat(name)})
            axios.post("http://localhost:3001/staff/addStudent", {
                "staffEmail": localStorage.getItem("email"),
                "studentEmail": name.email
            })
        }
    }

    handleDeleteButton(name) {
        axios.post(`http://localhost:3001/staff/deleteStudent?staffEmail=${localStorage.getItem("email")}&studentEmail=${name.email}`)
        .then( (res)=> {
            this.setState({addedStudents: [], emailChecks: []})    
            this.getAddedStudents()
            console.log(this.state.addedStudents)
            console.log("FUCK ME")
        }).catch(error => {
            console.log(error);
        });
    }

    getStudents() {
        return axios.get('http://localhost:3001/users/students').then((res) => {
            this.setState({students: res.data})
            }
        )
    }

    componentDidMount() {
        this.getStudents()
        document.title = "CTP-HUB"
        this.getAddedStudents()
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
              "email",
              "firstName",
              "lastName"
          ]
          };
        var fuse = new Fuse(this.state.students, options); // "list" is the item array
        var result = fuse.search(event.target.value);
        this.setState({searchResults : result})
        this.setState({loaded: true})
        this.forceUpdate();
    } 

    handleLogout() {
        localStorage.clear()
        this.props.history.push('/login')
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
                placeholder="Student Lookup"/>
            </div>
            <button className="Logout" onClick={this.handleLogout}>Log Out</button>
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
                    results={this.state.addedStudents} 
                    handleBClick={this.handleDeleteButton} 
                    maxResults={10}
                    className="CardButton CloseButton"
                    text="X"/>
            </div>
        
        </div>
        </div>
    )}
}

export default StaffDash;
