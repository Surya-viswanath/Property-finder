const mongoose = require('mongoose');

const ListingSchema =mongoose.Schema({

    name: {
              type: String,
         required: true,
           
       },
    description: {
          type: String,
            required: true,
          },
    address:{
             type:String,
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
           propertysize: {
              type: String,
              required: true,
            },
          phone: {
              type: Number,
              required: true,
            },
         email: {
              type: String,
              required: true,
              
            },
    image: {
              type: Array,
            
            },
            location: {
              type: String,
              
            },
});

const listingItem = mongoose.model('listingItem',ListingSchema);

module.exports = listingItem;



