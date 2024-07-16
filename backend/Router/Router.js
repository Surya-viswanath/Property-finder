const express = require('express');


// const Usersignup = require('../Controller/Usersignup');
const {Createagent,getagent,deleteagent} = require('../Controller/Users');
const Userlogin = require('../Controller/Userlogin');
const getoneuser = require('../Controller/Getbyemail');
// const { Createlist ,getcollection} = require('../Controller/Addpro');
const { generatelist, getlist, deleteList, updateList } = require('../Controller/New');
const {CreateWishlist, getWishlist,  deleteAllwishlist, deleteWishlist} = require('../Controller/Wishlist');
const Customersignup = require('../Controller/CustomerSignup');
const Customerlogin = require('../Controller/Customerlogin');
const Adminsignup = require('../Controller/Adminsignup');
const Adminlogin = require('../Controller/Adminlogin');
const { getcustomer, deletecustomer}=require('../Controller/Customer');
const router = express.Router();



// router.route('/createlist').post(Createlist)
// router.route('/getlist').get(getcollection)
router.route('/adminsign').post(Adminsignup)
router.route('/adminlogin').post(Adminlogin)
router.route('/Customersign').post(Customersignup)
router.route('/customerlogin').post(Customerlogin)
router.route('/getcustomer').get(getcustomer)
router.route('/deletecustomer/:id').delete(deletecustomer)
router.route('/deleteagent/:id').delete(deleteagent)
router.post('/createagent',Createagent)
router.route('/getagent').get(getagent)
router.route('/login').post(Userlogin)
router.route('/getone/:email').get(getoneuser)
router.route('/createpro').post(generatelist)
router.route('/getpro').get(getlist)
router.route('/deleteList/:id').delete(deleteList)
router.route('/updateList/:id').put(updateList)
// router.delete('/deleteList/:id', deleteList);
// router.put('/updateList/:id', updateList);
router.route('/postwish').post(CreateWishlist)
router.route('/getwish/:id').get(getWishlist)

router.route('/deletewish').delete(deleteWishlist)
router.route('/deleteallwish').delete(deleteAllwishlist)

module.exports =router