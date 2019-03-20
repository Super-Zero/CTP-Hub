const models = require('../models');
// Add Job
// Pre: Email address and jobInformation
// Post: Job is added on StudentJob and Job table.
exports.addJob = (req,res,next)=>
{
	const studentEmail = req.body.studentEmail;
	const jobId = req.body.jobId;
	const status = "Applied"

	models.StudentJob.create({
		"jobId": jobId,
		"studentEmail": studentEmail,
		"notes":"None",
		"status":status
	}).then(result=>{
		return res.status(200).json({"message":"Job was added successfully!"});
	}).catch(err=>
	{
		return res.status(400).json({"error in creating studentJob":err});
	})
}



// See all jobs applied

exports.allJobs = (req,res,next)=>
{
	models.StudentJob.findAll({
	  where: {
	    studentEmail: req.query.studentEmail
	  }
	}).then(result=>{
		return res.status(200).json(result);
	}).catch(err=>{
		return res.status(400).json({"error in finding allJobs":err});
	})
}
	
exports.everyJob = (req, res, next) => {
	models.Job.findAll()
	.then(result=> {return res.status(200).json(result)
	}).catch(err=> {return res.status(400).json({"Error in getting all jobs.": err});
})
}

//Edit Note

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

exports.newJob = (req, res, next)=> {
	models.Job.create({
		jobTitle: req.body.jobTitle,
		companyName : req.body.companyName
	}).then( res => {
		return res.status(200).json(result)
	}).catch( err=> {
		return res.status(400).json({"Error in making a new job: ":err})
	})
}

exports.aJob = (req, res, next) => {
	models.Job.findAll({
		where : {
			jobId : req.query.jobId
		}
	})
	.then(result=> {return res.status(200).json(result)
	}).catch(err=> {return res.status(400).json({"Error in getting all jobs.": err});
})
}

exports.deleteStudentJob = (req, res, next) => {
	models.StudentJob.destroy({
		where : {
			studentEmail : req.body.studentEmail,
			jobId : req.body.jobId
		}
	}).then( result =>
		res.status(200).json(result)
	).catch (err =>
		res.status(400).json({'error':err})
	)
}

exports.fuckme= (req, res, next) => {
	models.StudentJob.destroy({
		where : {
			studentEmail : req.body.studentEmail,
			jobId : req.body.jobId
		}
	}).then( result =>
		res.status(200).json(result)
	).catch (err =>
		res.status(400).json({'error':err})
	);
}
/*
{
		where : {
			jobId : req.body.jobId
		}
	}
*/