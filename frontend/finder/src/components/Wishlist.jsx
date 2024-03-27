import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Detail from './Detail';

function Wishlist() {
    const [wishlist, setWishlist] = useState([]);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch properties from your backend when component mounts
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://localhost:4008/getagent');
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties', error);
      }
    };

    fetchProperties();
  }, []);

  const addToWishlist = async (propertyId) => {
    try {
      const response = await axios.post('/postwish', { propertyId });
      const newWishlistItem = response.data;
      setWishlist([...wishlist, newWishlistItem]);
    } catch (error) {
      console.error('Error adding to wishlist', error);
    }
  };
  return (
    <div>
      <h1>Wishlist</h1>
      <ul>
        {wishlist.map((item) => (
          <li key={item._id}>{item.property.name}</li>
        ))}
      </ul>
      <Detail properties={properties} addToWishlist={addToWishlist} />
    </div>
  )
}

export default Wishlist
