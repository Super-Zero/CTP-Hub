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
	const Student = sequelize.define('Student', {
        studentCode: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    });
	const Staff = sequelize.define('Staff', {
        staffCode: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    });
    Staff.belongsTo(User);
	Student.belongsTo(User);
	return User;
};

