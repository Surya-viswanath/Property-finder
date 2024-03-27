const mongoose = require('mongoose');

const wishlistItemSchema = new mongoose.Schema({
    property: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'New'
    }
  });


const WishlistItem = mongoose.model('WishlistItem', wishlistItemSchema);
module.exports = WishlistItem;