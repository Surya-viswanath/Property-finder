
// const WishlistItem= require("./Wishlistschema")
// const createwish= async (req, res) => {
//     try {
//       const { propertyId } = req.body;
//       const wishitem = new WishlistItem({ property: propertyId });
//       await wishitem.save();
//       res.status(201).json(wishitem);
//     } catch (err) {
//       console.error('Error adding to wishlist', err);
//       res.status(500).json({ error: 'Unable to add to wishlist' });
//     }
//   };

//   module.exports = createwish;


const express = require("express");
// const Wishlist = require("../model/WishlistSchema");
const Wishlist = require("./Wishlistschema");
const Agent = require("./Userschema");
const router = express.Router();
// const CreateWishlist = async (req, res) => {
//   try {
//     const { email, product } = req.body;
//     const user = await Agent.findOne({ email: email });
//     let cart = await Wishlist.findOne({ user: user });
//     if (cart) {
//       cart = await Wishlist.updateOne(
//         { user: user },
//         {
//           $push: {
//             products: product,

//           },
//         }
//       );
//     } else {
//       cart = Wishlist.create({
//         user: user,
//         products: [product],
//       });
//     }
//     res.json({ success: true });
//   } catch (error) {
//     console.error("Error adding item to cart:", error);
//     res.status(500).send("Internal Server Error");
//   }
// };
const CreateWishlist = async (req, res) => {
  
    const { propertyId, userId} = req.body;
   
      try {
        // Find the property by ID
        const property = await Property.findById(propertyId);
        if (!property) {
          return res.status(404).json({ message: 'Property not found' });
        }
        return res.status(200).json({ message: 'Property added to wishlist successfully' });
      } catch (error) {
        console.error('Error adding property to wishlist:', error);
        return res.status(500).json({ message: 'Internal server error' });
      }
};


const getWishlist = async (req, res) => {
  try {
    const user = await Agent.findOne({ id: req.params.id  });
    const cartItems = await Wishlist.findOne({ user:user });
    res.status(200).send(cartItems);
  } catch (error) {
    console.error("Error fetching cart items:", error);
    res.status(500).send("Internal Server Error");
  }
};

const deleteWishlist = async (req, res) => {
  try {
    const productId = req.params.id;
    const userEmail = req.params.email;
    const user = await Agent.findOne({ email: userEmail });
    const cart = await Wishlist.findOne({ user: user });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    cart.products = cart.products.filter(item => item._id !== productId);
    await cart.save();
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).send("Internal Server Error");
  }
};




const deleteAllwishlist= async (req, res) => {
  try {
  const userId = req.params.userId;

 
    // Delete all cart items associated with the user
    const deletewishlist=await Wishlist.deleteMany({ userId: userId });
    res.status(200).json({ message: 'All data deleted successfully!' });
  } catch (error) {
    console.error('Error deleting all data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { CreateWishlist, getWishlist,deleteWishlist,deleteAllwishlist};