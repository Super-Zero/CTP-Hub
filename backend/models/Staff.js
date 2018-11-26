'use strict';
module.exports = (sequelize, DataTypes) =>
{
	const Staff = sequelize.define('Staff',{
		staffEmail: { 
			type: DataTypes.STRING,
			primaryKey: true
			// TODO: Also custom check for CUNY emails

		},
		staffCode: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
	});

	Staff.associate = (models)=>
	{
		models.Staff.belongsTo(models.User);
	}
	return Staff;
};