'use strict';
module.exports = (sequelize, DataTypes) =>
{
	const StudentJob = sequelize.define('StudentJob',{
        studentEmail:{
            type: DataTypes.STRING,
            primaryKey: true
        },
        jobId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        notes:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            notEmpty: true,
          },

        },
        status:{
            type: DataTypes.STRING,
            allowNull:false
        }
	});

    StudentJob.associate = (models)=>
    {
        models.StudentJob.hasMany(models.Student);
        models.StudentJob.hasMany(models.Job);
    }

	
	return StudentJob;
};