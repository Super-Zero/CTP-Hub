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
            return <div className={this.props.class}>
            <a href=""><img src=""/></a>
        </div>
        })
        return (<div>{arr}</div>)
    }
}

class MenuBar extends Component {
    render() {
        return (
            <div className="Menubar">
            <Button class="MenuBarButton" size={4}/>
            </div>
        )
    }
}

class SideBar extends Component {
    render() {
        return (
            <div className="Sidebar">
            <Button class="SideBarButton" size={4}/>
            </div>
        )
    }
}

class StaffDash extends Component {
    
    render() {
        return (
        <div className="Background">
            <PrimarySearchAppBar/>
        </div>
    )}
    
}

export default StaffDash;