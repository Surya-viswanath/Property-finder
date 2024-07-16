// const mongoose = require('mongoose');

// const wishlistItemSchema = new mongoose.Schema({
//     property: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'New'
//     }
//   });
// const WishlistItem = mongoose.model('WishlistItem', wishlistItemSchema);
// module.exports = WishlistItem;

const mongoose = require('mongoose');
const wishlistSchema = new mongoose.Schema({
    user: {
        type: Object
    },
    products: {
       type: Array
    },
});
const Wishlist = mongoose.model('Wishlist', wishlistSchema);
module.exports = Wishlist;