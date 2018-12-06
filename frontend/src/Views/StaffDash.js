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
            return <div className={this.props.className}>
            <img id={this.props.imageId} src={this.props.image}/>
        </div>
        })
        return (<div onClick={this.props.handleButtonClick.bind(this)}>{arr}</div>)
    }
}

class Bar extends Component {
    render() {
        return (
            <div className={this.props.className}>
                {this.props.hasText? <div className="Label">{this.props.text}</div>:null}
            </div>
        )
    }
}

class StudentSearch extends Component {
    render() {
        return  <div className="Studentsearch">
                    <div className="Studentsearch-box">
                        <div className="Studentsearch-bar">
                            <div className="Studentsearch-heading">Add Student</div>
                            <button className="Studentsearch-button" onClick={this.props.handleButtonClick.bind(this)}>X</button>
                        </div>
                        <div className="Studentsearch-input">
                            <div className="Studentsearch-name">Student Name</div>
                        </div>
                        <div className="Studentsearch-accept">
                            <button className="Studentsearch-acceptButton">Add Student</button>
                        </div>
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
        <Bar className="Menubar" hasText={true} text="CTP_HUB"/> 
        <Button className="Button" handleButtonClick={this.toggleAddStudentMenu.bind(this)} imageId= "Image" image="http://pngimg.com/uploads/plus/plus_PNG16.png"/>
        </div>
    )}
    
}

export default StaffDash;