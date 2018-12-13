var express = require('express');
var router = express.Router();
const models = require('../models');
const studentController = require("../controllers/studentController");
const checkAuth = require("../authenticate");

/* GET users listing. */

// With Auth
// router.post('/addJob',checkAuth.checkStudent,studentController.addJob);

//Without Auth
router.post('/addJob', studentController.addJob);
router.post('/newjob', studentController.newJob)
router.post('/deletejob', studentController.fuckme)


// Get all Jobs for student
router.get('/allJobs', studentController.allJobs);
// Get all Jobs
router.get('/everyJob', studentController.everyJob);
router.get('/ajob', studentController.aJob)

// Edit Job Note
router.post('/editNote', checkAuth.checkStudent,studentController.editNote);

module.exports = router;
