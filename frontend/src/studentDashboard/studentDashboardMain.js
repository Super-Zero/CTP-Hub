import React, { Component } from 'react';
import Card from './component/Card';
class StudentDashboardMain extends Component {

  constructor(props){
    super(props);
    this.state = {
     name: "",
     jobs:""
    }
  }
  render() {

    return (
      <div >
        <Card title="Card Title"/>
      </div>
    );
  }
}

export default StudentDashboardMain;