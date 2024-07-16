import React, { useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';

import { Button, Table } from 'react-bootstrap';
import { FaHeart } from "react-icons/fa"; 
import './Wishlist.css'
const WishlistPage = () => {
  const navigate = useNavigate();
  const {ids}= useParams();
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
const user= ids;
//   const cartitems= localStorage.getItem('cartitems') ? JSON.parse(localStorage.getItem('cartitems')) :[]

  useEffect(() => {
    const fetchWishlistItems = async () => {
      try {

        if (!user) {
          // Redirect to login page with a message
          navigate('/log', { state: { message: 'Please log in to view your wishlist' } });
          return;
        }

        const response = await axios.get(`http://localhost:5000/getwishlist/${user}`);


const uniqueWishlistItems = removeDuplicates(response.data.products, '_id');
setWishlistItems(uniqueWishlistItems);
      } catch (error) {
        console.error('Error fetching wishlist items:', error);
        setError('Error fetching wishlist items. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

 
  if (user && user.email) { // Check if user and user.email are not null before calling fetchCartItems
    fetchWishlistItems();
  }
}, [user]);

const removeDuplicates = (items, key) => {
  return items.filter((item, index, self) =>
    index === self.findIndex((t) => (
      t[key] === item[key]
    ))
  );
};


  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/deletewishlist/${id}/${user.email}`);
      // After successful deletion on the server, update the cart items displayed in the UI
      const updatedWishlistedItems = wishlistItems.filter(item => item._id !== id);
      setWishlistItems(updatedWishlistedItems);
      
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };
  
  const handleAddToCart = async (product) => {

    try {
      await axios.delete(`http://localhost:5000/deletewishlist/${product._id}/${user.email}`);

      const response = await axios.post('http://localhost:5000/createcart', {
        product, 
        email : user.email, 
       
      });
      // console.log('Item added to cart:', response.data);
      setAddedToCart(true);
      
      navigate(`/cart2/${user?.email}`);
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
    
  };


  
 
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  // console.log('wishlist Items:', wishlistItems);
  return (

<div>
<h1 style={{padding:'25px'}}>Wish List</h1>

{wishlistItems.length === 0 ? (
        <div style={{textAlign:'center'}}>
          <FaHeart style={{ fontSize: '200px', color: 'gray' }} />
          <p style={{fontSize:'28px'}}>Your wishlist is empty</p>
        </div>
      ) : (

<ul style={{display:'flex',paddingTop:'40px', flexWrap: 'wrap', justifyContent:'center' }}>
  {wishlistItems.map(product => (
    <div key={product._id} style={{ display: 'flex',marginTop:'20px'}}>
      <section id="product1" className="section-p4" style={{ width: '23%', marginTop: '-100px' }} key={product.id}>
        <div className="pro-container" style={{ display: 'flex' }}>
          <div className="pro" style={{ height: '310px' }}>
            <img src={product.foodimage} alt={product.foodname} style={{ height: '150px', width: '220px' }} />
            <div className='res-row'>
              <div className='res-name'>{product.foodname}</div>
            </div>
            <div className="des">
              <span></span>
              <h4>price:{product.price}</h4>

        
              
            </div>
            {/* <button onClick={()=>handleDelete(product._id)}>remove</button> */}
            <div>
            <Button variant="light" className='wish-remove' onClick={() => handleDelete(product._id)}>Remove</Button>
            <Button variant="light" className='wish-addcart' onClick={() => handleAddToCart(product)}>addToCart</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  ))}
</ul>
  )}

     
</div>



  );
};


export default WishlistPage;
