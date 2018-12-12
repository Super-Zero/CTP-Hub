var express = require('express');
var router = express.Router();
const models = require('../models');
const staffController = require("../controllers/staffController");
const checkAuth = require("../authenticate");

/* GET users listing. */

// With Auth
// router.post('/addJob',checkAuth.checkStudent,studentController.addJob);

//Without Auth
router.post('/addStudent',staffController.addStudent)
router.post('/deleteStudent', staffController.deleteStaffStudent)
router.get('/getStudent',staffController.getStaffStudents)
router.get('/getAllStudent',staffController.getAllStaffStudents)


module.exports = router;
