const express = require('express');

const{ Createlist,getcollection}= require('../Controller/List');
const Usersignup = require('../Controller/Usersignup');
const Createagent = require('../Controller/Users');
const Userlogin = require('../Controller/Userlogin');





const router = express.Router();



router.route('/createlist').post(Createlist)
router.route('/getlist').get(getcollection)
router.route('/createagent').post(Createagent)
router.route('/login').post(Userlogin)




module.exports =router