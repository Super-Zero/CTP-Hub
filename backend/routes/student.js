var express = require('express');
var router = express.Router();
const models = require('../models');
const studentController = require("../controllers/studentController");
const checkAuth = require("../authenticate");

/* GET users listing. */

// With Auth
// router.post('/addJob',checkAuth.checkStudent,studentController.addJob);

//Without Auth
router.post('/addJob',studentController.addJob);

// Get all Jobs for student
router.get('/allJobs',checkAuth.checkStudent,studentController.allJobs);

// Edit Job Note
router.post('/editNote',checkAuth.checkStudent,studentController.editNote);

module.exports = router;
