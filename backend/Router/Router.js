const express = require('express');


const Usersignup = require('../Controller/Usersignup');
const {Createagent,getagent} = require('../Controller/Users');
const Userlogin = require('../Controller/Userlogin');
const getoneuser = require('../Controller/Getbyemail');
// const { Createlist ,getcollection} = require('../Controller/Addpro');
const { generatelist, getlist, deleteList, updateList } = require('../Controller/New');
const createwish = require('../Controller/Wishlist');

const router = express.Router();



// router.route('/createlist').post(Createlist)
// router.route('/getlist').get(getcollection)
router.route('/createagent').post(Createagent)
router.route('/getagent').get(getagent)
router.route('/login').post(Userlogin)
router.route('/getone/:email').get(getoneuser)
router.route('/createpro').post(generatelist)
router.route('/getpro').get(getlist)
router.route('/deleteList/:id').delete(deleteList)
router.route('/updateList/:id').get(updateList)
// router.delete('/deleteList/:id', deleteList);
// router.put('/updateList/:id', updateList);
router.route('/postwish').post(createwish)
module.exports =router