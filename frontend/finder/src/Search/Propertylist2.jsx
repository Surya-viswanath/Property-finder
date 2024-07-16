import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CiLocationOn, CiHeart } from "react-icons/ci";

import axios from 'axios';

const Propertylist2 = ({ properties ,userid}) => {

  return (
    <div className="gallery">
      {properties.map(data => (
        <div>
            <div key={data.id} className="image-item">
            <Link to={`/detail/${data._id}/${userid}/${data.email}`} style={{textDecoration:'none'}}>
              <img src={data.image} alt={data.title} />
              </Link>
              <p>{data.title}</p>
              <p style={{ color: '#707070' }}>{data.type} , {data.sell}</p>
              <p style={{ color: 'black' }}>
                {data.regularPrice} <br></br>
                {data.description}
              </p>
              <div style={{ display: 'flex' }}>
                <p style={{ color: '#707070' }}><CiLocationOn />{data.address}</p>
                {/* <Link to={`/Wishlist/${userid}/${data._id}`} style={{textDecoration:'none'}}><p style={{ color: 'red', marginLeft: '20%', fontSize: '18px' }}><CiHeart /></p></Link> */}
              </div>
            </div>
         
        </div>
      ))}
    </div>
  );
};

export default Propertylist2;