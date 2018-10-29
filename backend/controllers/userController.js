const models = require('../models');
const bcryptjs = require('bcryptjs')

// Signup Function
exports.signUp = (req,res)=>
{
	const hashPassword = bcryptjs.hashSync(req.body.password, bcryptjs.genSaltSync(8));
	// TODO: Find if email exists. If it does, don't let them signup
	console.log("Hash Password!: "+hashPassword);
	models.User.create({
		email: req.body.email,
		password: hashPassword
	})
	.then((result)=>{
		res.status(200).json({'message':'User has been created!'})
	}).catch(err=>{
		res.status(500).json({'message':'User Creation has been failed!',
								'error':err})
	})
}