const express = require('express');
const createListing = require('../controllers/listing.controller');





const router = express.Router();
const middleware=[protect]


router.route('/List').post(createListing)
module.exports =router