'use strict';
module.exports = (sequelize, DataTypes) =>
{
	const Student = sequelize.define('Student',{
		name: { 
			type: DataTypes.STRING,
			primaryKey: true
			// TODO: Also custom check for CUNY emails

		},
		studentCode: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }

		

	});

	Student.associate = (models)=>
	{
		models.Student.belongsTo(models.User);
	}
	return Student
};