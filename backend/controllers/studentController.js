const models = require('../models');
// Add Job
// Pre: Email address and jobInformation
// Post: Job is added on StudentJob and Job table.
exports.addJob = (req,res,next)=>
{
	console.log(req)

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

// Edit Note


// See all jobs applied



