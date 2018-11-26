'use strict';
module.exports = (sequelize, DataTypes) =>
{
	const Job = sequelize.define('Job',{

	jobId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    jobTitle: {
        type: DataTypes.STRING,
        allowNull: false
    }
	});
	Job.associate = (models)=>
	{
		models.Job.belongsTo(models.StudentJob);
	}
	
	return Job;
};