import React, { Component } from 'react';
import JobCard from './component/jobCard';
import {getAllJobs} from './studentDBUtil/studentDBUtil';
import Grid from '@material-ui/core/Grid';
class StudentDashboardMain extends Component {

  constructor(props){
    super(props);
    this.state = {
     name: "",
     jobs:[]
    }
  }
  componentDidMount()
  {

     // Add function to get Jobs from studentJobs for this
     // user
     getAllJobs().then(result=>
     {
        this.setState({
          jobs:result.data
        });

     }).catch(err=>{
        console.log(err)
        alert("error occured getALlJobs: ",err);
     });


  }

  render() {
    const listItems = this.state.jobs.map(job=>
      <div>
      <Grid container spacing={16}>
      <Grid item xs={6}>
      <JobCard jobId={job.jobId} status={job.status} notes={job.notes} />
      </Grid>
      </Grid>
      </div>
    )
    return (
      <div >
        {listItems}
      </div>
    );
  }
}

export default StudentDashboardMain;