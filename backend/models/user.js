'use strict';
module.exports = (sequelize, DataTypes) =>
{
	const User = sequelize.define('User',{
		email: { 
			type: DataTypes.STRING,
			primaryKey: true,
			allowNull: false,
			isEmail: true,
			unique: true,
			// TODO: Also custom check for CUNY emails
		},
		firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
		password: {
		    type: DataTypes.STRING,
		    allowNull: false
		},
		typeOfUser: {
		    type: DataTypes.STRING,
		    allowNull: false
		}
	});


	User.associate = (models)=>
	{
		models.User.hasOne(models.Student);
		models.User.hasOne(models.Staff);
	}
	return User

};


