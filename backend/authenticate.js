const jwt = require('jsonwebtoken');
const key = require('./env');


exports.checkStudent = (req,res,next)=>{
     try {
        console.log(req.headers.authorization)
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, key.env.JWT_KEY);
        req.userData = decoded;
        if(decoded['typeOfUser']!="student") throw "User Logged in is not a student!";
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed!',
            error: error
        });
    }
};


exports.checkStaff = (req,res,next)=>{
     try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, key.env.JWT_KEY);
        req.userData = decoded;
        if(decoded['typeOfUser']!="staff") throw "User Logged in is not a staff!";
        next();
    } catch (error) {
        console.log(req.headers.authorization)
        return res.status(401).json({
            message: 'Staff Auth failed!',
            error: error
        });
    }
};
