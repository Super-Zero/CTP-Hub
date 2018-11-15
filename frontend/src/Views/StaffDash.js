import React, { Component } from 'react';
import './css/staff.css';
import logo from '../CTPHUB.png';
import '../App';
import axios from 'axios';

class MenuBar extends Component {
    render() {
        return (
            <div className="Menubar"></div>
        )
    }
}

class SideBar extends Component {
    render() {
        return (
            <div className="Sidebar"></div>
        )
    }
}

class StaffDash extends Component {
    
    render() {
        return (
        <div className="Background">
            <MenuBar/>
            <SideBar />
        </div>
    )}
    
}

export default StaffDash;