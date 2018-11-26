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


module.exports = router;
