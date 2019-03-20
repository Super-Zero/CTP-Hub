import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
export default class  JobCard extends Component{
	
	constructor(props)
	{
		super(props);
		this. state = {
			open: false
		}

	}
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render(){

  	return(
		<Card>
		    <CardContent>
		    	<Typography  variant="h6" component="h2">
		    		Job Id: {this.props.jobId}
		    	</Typography>
		    	<Typography  variant="h4" component="h3">
		    		Status: {this.props.status}
		    	</Typography>
		    	<Button onClick={this.handleClickOpen} variant="contained" color="primary">
		    		View Notes 
		    	</Button>
		    	 <Dialog
		          open={this.state.open}
		          onClose={this.handleClose}
		          aria-labelledby="max-width-dialog-title"
        		>
        		<DialogTitle id="max-width-dialog-title">Notes</DialogTitle>
      			<DialogContent>
       				 <DialogContentText>
          				{this.props.notes}
       				 </DialogContentText>
       			</DialogContent>
              <DialogActions>
            	<Button onClick={this.handleClose} color="primary">
              		Close
            	</Button>
          		</DialogActions>
       			 </Dialog>
       			 <Button onClick={this.handleClickOpen} variant="contained" color="primary">
		    		Edit 
		    	</Button>
		    	 <Dialog
		          open={this.state.open}
		          onClose={this.handleClose}
		          aria-labelledby="max-width-dialog-title"
        		>
        		<DialogTitle id="max-width-dialog-title">Notes</DialogTitle>
      			<DialogContent>
       				 <DialogContentText>
          				{this.props.notes}
       				 </DialogContentText>
       			</DialogContent>
              <DialogActions>
            	<Button onClick={this.handleClose} color="primary">
              		Close
            	</Button>
          		</DialogActions>
       			 </Dialog>
		    </CardContent>
		  </Card>
  		)
  };
  
};