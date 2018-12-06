import React, { Component } from 'react';
import './css/staff.css';
import logo from '../CTPHUB.png';
import '../App';
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import PrimarySearchAppBar from './MenuBar';

class Button extends Component {
    render() {
        let arr = new Array(this.props.size).fill(0).map(()=>{
            return <div onClick={console.log("FUNCTION")} className={this.props.className}>
            <img onClick={console.log("FUNCTION")} id={this.props.imageId} src={this.props.image}/>
        </div>
        })
        return (<div onClick={this.props.handleButtonClick.bind(this)}>{arr}</div>)
    }
}

class Bar extends Component {
    render() {
        return (
            <div className={this.props.className}>
            </div>
        )
    }
}

class StudentSearch extends Component {
    render() {
        return <div className="Studentsearch">
            <div className="Studentsearch-box">
            <div className="Studentsearch-heading">Add Student</div>
            <button className="Studentsearch-button" onClick={this.props.handleButtonClick.bind(this)}>X</button>
            </div>
        </div>
    }
}
class StaffDash extends Component {
    constructor() {
        super()
        this.state ={
            showAddStudentMenu: false
        }
        this.toggleAddStudentMenu = this.toggleAddStudentMenu.bind(this)
    }
    toggleAddStudentMenu = () => {
        console.log("Button")
        this.setState({showAddStudentMenu: !this.state.showAddStudentMenu})
    }
    render() {
        return (
        <div className="Background">
        {this.state.showAddStudentMenu?
            <StudentSearch handleButtonClick={this.toggleAddStudentMenu.bind(this)}/>: null
        }
        <Bar className="Sidebar"/>
        <Bar className="Menubar"/> 
        <Button className="Button" handleButtonClick={this.toggleAddStudentMenu.bind(this)} imageId= "Image" image="https://cdn3.iconfinder.com/data/icons/navigation-and-settings/24/Material_icons-01-07-512.png"/>
        </div>
    )}
    
}

export default StaffDash;