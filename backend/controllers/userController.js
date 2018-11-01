const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");
const key = require("../env");

// Signup Function
exports.signUp = (req,res,next)=>
{
	const hashPassword = bcryptjs.hashSync(req.body.password, bcryptjs.genSaltSync(8));

	models.User.create({
		email: req.body.email,
		password: hashPassword,
		typeOfUser: req.body.typeOfUser
	})
	.then((result)=>{
		 res.status(200).json({'message':'User has been created!'})
	}).catch(err=>{
		res.status(400).json({'message':'User Creation has been failed!',
								'error':err})
	});
}


exports.login = (req,res, next)=>
{
	models.User.findOne({
		where:{email:req.body.email}
	}).then(user=>
	{	
		console.log(user)
		if (user===null)
			res.status(400).json({'error':'User not found!'});
		else
			bcryptjs.compare(req.body.password,user.dataValues.password,(err,result)=>
			{
				if(err){
					return res.status(401).json({
						message: "Auth Failed"
					});
				}
				if(result){
					const token = jwt.sign(
					{
						email: user.dataValues.email,
						typeOfUser:user.dataValues.typeOfUser
					},
					key.env.JWT_KEY,
					{
						expiresIn:"1h"
					}
					);
					return res.status(200).json({
						message:"Auth Successful",
						token: token
					});
				}
				res.status(401).json({
					message:"Auth Failed!"
				});
			});
	}).catch(err=>
	{
		console.log(err)
		res.status(400).json({'error':err})
	});
}

exports.get = (req,res,next)=>
{
	models.User.findAll().then(result=>
	{
		res.status(200).json(result);
	})
}







