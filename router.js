const express = require('express');
const router = express.Router();

const {registerUser} = require("./controllers/registerUser");
const {getUser} = require("./controllers/getUser");
const {login} = require("./controllers/login");
const {otpController,otpValidation} = require("./controllers/otpController");
const {resetPassword}  = require("./controllers/resetPassword");


router.post('/register', registerUser);
router.get('/getusers',getUser);
router.post('/login',login);
router.post('/generateOTP',otpController);
router.post('/otpValidate',otpValidation);
router.post('/resetPassword',resetPassword);

module.exports = router;