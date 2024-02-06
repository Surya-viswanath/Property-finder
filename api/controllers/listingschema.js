// const mongoose = require('mongoose')


// const listingSchema = mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     description: {
//         type: String,
//         required: true,
//     },
//     address:{
//         type:String,
//         required: true,
//     },
//     regularPrice: {
//       type: Number,
//       required: true,
//     },
//     discountPrice: {
//       type: Number,
//       required: true,
//     },
//     bathrooms: {
//       type: Number,
//       required: true,
//     },
//     bedrooms: {
//       type: Number,
//       required: true,
//     },
//     furnished: {
//       type: String,
//       required: true,
//     },
//     parking: {
//       type: String,
//       required: true,
//     },
//     type: {
//       type: String,
//       required: true,
//     },
//     offer: {
//       type: String,
//       required: true,
//     },
//     image: {
//       type: Array,
//       required: true,
//     },
    

// });
// const listingItem=mongoose.model('listingItem',listingSchema)
// module.exports=listingItem



import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    regularPrice: {
      type: Number,
      required: true,
    },
    discountPrice: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    furnished: {
      type: String,
      required: true,
    },
    parking: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    offer: {
      type: String,
      required: true,
    },
    image: {
         type: Array,
          required: true,
          },
  },
  // { timestamps: true }
);

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;

