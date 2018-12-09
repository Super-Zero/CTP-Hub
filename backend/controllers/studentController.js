const models = require('../models');
// Add Job
// Pre: Email address and jobInformation
// Post: Job is added on StudentJob and Job table.
exports.addJob = (req,res,next)=>
{
	const email = "test1@citymail.cuny.edu";
	const jobTitle = "Software Engineer at Microsoft";
	const notes = "First Round Passed. Second Round scheudled on Dec 18.";
	const status = "called on interview"

// Find if Job exist

// If not create new
	models.Job.create({
		"jobTitle":jobTitle
	}).then(result=>{
		models.StudentJob.create({
			"jobId": result.jobId,
			"studentEmail": email,
			"notes":notes,
			"status":status
		}).then(result=>{
			return res.status(200).json({"message":"Job was added successfully!"});
		}).catch(err=>
		{
			return res.status(400).json({"error in creating studentJob":err});
		})
		//return res.status(200).json({"msg":result});
	}).catch(err=>
	{
		return res.status(400).json({"error in creating Job":err});
	});

	//return res.status(200).json({msg: "All Good"});



}



// See all jobs applied

exports.allJobs = (req,res,next)=>
{

	const userData = req.userData;
	console.log(userData)
	models.StudentJob.findAll({
	  where: {
	    studentEmail: userData.email
	  }
	}).then(result=>{
		return res.status(200).json(result);
	}).catch(err=>{
		return res.status(400).json({"error in finding allJobs":err});
	})
	

}


// Edit Note
exports.editNote = (req,res,next)=>
{
	const userData = req.userData;
	models.StudentJob.findOne({
	  where: {
	    studentEmail: userData.email,
	    jobId: req.body.jobId
	  }
	}).then(result=>{
		result.update({
			notes: req.body.newNotes
		}).then(result=>{
			return res.status(200).json(result);
		}).catch(err=>{
			return res.status(400).json({"error in saving the new note":err});
		})
		
	}).catch(err=>{
		return res.status(400).json({"error in editing Notes":err});
	})
	

}

