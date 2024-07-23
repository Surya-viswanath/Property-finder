import axios from 'axios';
import React, { useState } from 'react'

import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';

function Wish({data}) {
console.log(data);
const [addedToWishlist, setAddedToWishlist] = useState(false);
const addToWishlist = async () => {
  try {
    await axios.post('https://property-finder-backend.onrender.com/postwish', { productId: data._id });
    setAddedToWishlist(true);
  } catch (error) {
    console.error('Error adding to wishlist:', error);
  }
};

  return (
    <div style={{marginTop:'2%',marginLeft:'2%',marginRight:'2%'}}> 
      <h2>Explore properties</h2>
    <div className="gallery">
    
      
        <div>
         {/* <Link to={`/detail/${data._id}/${data.email}`} style={{textDecoration:'none'}}> */}
        <div key={data.id} className="image-item">
         
          <img src={data.image} alt={data.title} />
          <p>{data.title}</p>
          <p  style={{color:'#707070'}}>{data.type} , {data.sell}</p>
<p style={{color:'black'}}>
{data.regularPrice} <br></br>
{data.description}
</p>
<p  style={{color:'#707070'}}><CiLocationOn />{data.address}</p>
<button onClick={addToWishlist} disabled={addedToWishlist}>
        {addedToWishlist ? 'Added to Wishlist' : 'Add to Wishlist'}
      </button>
        </div>
        {/* </Link> */}
        </div>
     
     
    </div>
    </div>
  )
}

export default Wish
