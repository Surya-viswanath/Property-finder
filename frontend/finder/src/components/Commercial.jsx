import React, { useState, useEffect } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineBed } from "react-icons/md";
import { PiBathtub } from "react-icons/pi";
import { GiResize } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import './Rent.css';
function Commercial() {
  const { sell2 } = useParams();
  const [first, setFirst] = useState([]);


  useEffect(() => {
    const handleItems = async () => {
      try {
        const response = await axios.get('https://property-finder-backend.onrender.comgetpro');
        setFirst(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    handleItems();
  }, []);

  

  const sells = sell2;
console.log(sells);
  
const filteredData = first.filter((item) => item.sell === sells);

  return (
    <div style={{marginTop:'2%',marginLeft:'2%',marginRight:'2%'}}> 
    <h2>Explore properties</h2>
  <div className="gallery">
  
     {filteredData.map(data => (
      <div>
       <Link to={`/detail/${data._id}/${data.email}`} style={{textDecoration:'none'}}>
      <div key={data.id} className="image-item">
       
        <img src={data.image} alt={data.title} />
        <p>{data.title}</p>
        <p  style={{color:'#707070'}}>{data.type} , {data.sell}</p>
<p style={{color:'black'}}>
{data.regularPrice} <br></br>
{data.description}
</p>
<p  style={{color:'#707070'}}><CiLocationOn />{data.address}</p>

      </div>
      </Link>
      </div>
    ))}
   
  </div>
  </div>   
  );
}
 
export default Commercial;
