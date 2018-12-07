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
        let cards = this.props.results.slice(0,4).map((name) => {
            return(
                <div className="Cards">
                    <div className="StudentCards">
                    <div className="Heading">{name.firstName+ "   " + name.lastName}</div>
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
            searchResults: []
        }
        this.toggleAddStudentMenu = this.toggleAddStudentMenu.bind(this)
        this.getStudents = this.getStudents.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.onSearchChange = this.onSearchChange.bind(this)
    }

    toggleAddStudentMenu = () => {
        console.log("Button")
        this.getStudents()
        this.setState({showAddStudentMenu: !this.state.showAddStudentMenu})
    }

    getStudents() {
        console.log("STATE IS SET")
        return axios.get('http://localhost:3001/users/students').then((res) => {
            this.setState({students: res.data})
            }
        )
    }

    componentDidMount() {
        this.getStudents()
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
                placeholder="Add Student"/>
            </div>
            <button className="Logout" onClick={this.handleLogout}>Log Out</button>
        </div>
        <div className="SearchResults">
            <div className="SearchResults-text">
            <StudentCards results={this.state.searchResults}/>
            </div>
        </div>
        {console.log(this.state.searchResults)}
        </div>
    )}
}

export default StaffDash;
