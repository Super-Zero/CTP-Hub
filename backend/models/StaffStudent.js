'use strict';
module.exports = (sequelize, DataTypes) =>
{
	const StaffStudent = sequelize.define('StaffStudent',{
        staffEmail:{
            type: DataTypes.STRING,
            allowNull: false
        },
        studentEmail: {
            type: DataTypes.STRING,
            allowNull: false
        }
	});

    StaffStudent.associate = (models)=>
    {
        models.StaffStudent.hasMany(models.Student);
        models.StaffStudent.hasOne(models.Staff);
    }

	
	return StaffStudent;
};
/*
{
    "staffEmail": "admin@mail.com",
    "studentEmail": "mpaul@mail.com"
}
*/