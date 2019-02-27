'use strict';
module.exports = (sequelize, DataTypes) => {
    
	const Job = sequelize.define('Job', {
        jobId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        jobTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        companyName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastUpdated: {
            type: DataTypes.DATE
        },
        status: {
            type: DataTypes.STRING
        },
        recruiterName: {
            type: DataTypes.STRING
        },
        location: {
            type: DataTypes.STRING
        },
        url: {
            type: DataTypes.STRING
        }
    });
    
	Job.associate = (models) => {
		models.Job.hasMany(models.StudentJob);
	}
	
	return Job;
};