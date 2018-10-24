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
		password: {
		    type: DataTypes.STRING,
		    allowNull: false
		},

	});
	return User

};