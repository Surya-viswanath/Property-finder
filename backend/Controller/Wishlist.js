
const WishlistItem= require("./Wishlistschema")
const createwish= async (req, res) => {
    try {
      const { propertyId } = req.body;
      const wishitem = new WishlistItem({ property: propertyId });
      await wishitem.save();
      res.status(201).json(wishitem);
    } catch (err) {
      console.error('Error adding to wishlist', err);
      res.status(500).json({ error: 'Unable to add to wishlist' });
    }
  };

  module.exports = createwish;