const models = require('../models');
// Add Job
// Pre: Email address and jobInformation
// Post: Job is added on StudentJob and Job table.
exports.addStudent = (req,res,next)=>
{
	const staffEmail = req.body.staffEmail;
	const studentEmail = req.body.studentEmail;
// If not create new
	models.StaffStudent.create({
		staffEmail: staffEmail,
		studentEmail: studentEmail
	}).then(result=>{
		return res.status(200).json({"message":"Student was added successfully!"});
	}).catch(err=>
	{
		return res.status(400).json({"error in creating staffStudent":err});
	})
}

exports.getStaffStudents = (req,res,next)=>
{
	models.StaffStudent.findAll({
		where: {
			staffEmail: req.query.staffEmail
		}
	}).then(result=>
	{
		res.status(200).json(result);
	}).catch(err=>
	{
		res.status(400).json({'error':err})
	});
}

exports.getAllStaffStudents = (req,res,next)=>
{
	models.StaffStudent.findAll().then(result=>
	{
		res.status(200).json(result);
	}).catch(err=>
	{
		res.status(400).json({'error':err})
	});
}

exports.deleteStaffStudent = (req, res, next) => {
	models.StaffStudent.destroy({
		where : {
			staffEmail : req.query.staffEmail,
			studentEmail : req.query.studentEmail
		}
	}).then( result =>
		res.status(200).json(result)
	).catch (err =>
		res.status(400).json({'error':err})
	)
}
