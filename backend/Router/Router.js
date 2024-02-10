const express = require('express');


const Usersignup = require('../Controller/Usersignup');
const {Createagent,getagent} = require('../Controller/Users');
const Userlogin = require('../Controller/Userlogin');
const getoneuser = require('../Controller/Getbyemail');
// const { Createlist ,getcollection} = require('../Controller/Addpro');
const { generatelist, getlist } = require('../Controller/New');






const router = express.Router();



// router.route('/createlist').post(Createlist)
// router.route('/getlist').get(getcollection)
router.route('/createagent').post(Createagent)
router.route('/getagent').get(getagent)
router.route('/login').post(Userlogin)
router.route('/getone/:email').get(getoneuser)
router.route('/createpro').post(generatelist)
router.route('/getpro').get(getlist)

module.exports =router