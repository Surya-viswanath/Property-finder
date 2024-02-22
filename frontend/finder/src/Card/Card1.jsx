import React from 'react'
import { CiStar } from 'react-icons/ci'
import './Api.css'
import { Button, Card, Row } from 'react-bootstrap'
import { BsFillCartFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineBed } from "react-icons/md";
import { PiBathtub } from "react-icons/pi";
import { GiResize } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";

function Card1({display}) {
  


    const filteredData = display.filter

  
// Accessing specific properties of the first element
const handleWhatsAppButtonClick = () => {
  const phoneNumber = filteredData[0].phone; // Replace with the phone number you want to chat with
  const message = 'Hello! I am interested in your product.'; // Optional: Replace with a predefined message

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');
};
 
  return (
   

    <section id="product1" style={{width:'33%'}}>
{/* <h2>featured products</h2>
<p>Summer Collection New Modern Design</p> */}
<div className=" pro-container" >
   {/* <Link to={/detailed/${display.email}} style={{textDecoration:'none'}}> */}
   <Link to={`/detail/${display._id}/${display.email}`} style={{textDecoration:'none'}}>
    <div className="pro"style={{height:'380px'}}>
        <img src={display.image}  style={{height:'150px',width:'305px',marginTop:'10px'}}/>
        <div className='res-row'>
        <div className='res-name' style={{color:'#707070'}}>{display.type}        ,              {display.sell}
         </div>
         </div>

         <div className="des" style={{ padding: '8px 10px 6px'}}>

<h5 style={{color:'black'}}>{display.regularPrice}</h5>
<p  style={{color:'black', whiteSpace:' nowrap',overflow: 'hidden',textOverflow: 'ellipsis '}}>{display.description}</p>
<p  style={{color:'#707070', whiteSpace:' nowrap',overflow: 'hidden',textOverflow: 'ellipsis ',fontSize:'15px'}}><CiLocationOn />{display.address}</p>

        </div>
      
        <div style={{display:'flex',marginLeft:'4%',alignItems:'bottom',marginBottom:'0px'}}>
    <Button style={{backgroundColor:'white',color:'#5745A0',borderColor:'#5745A0',marginRight:'7px',marginBottom:'0px'}}><FaPhoneAlt /> +91{display.phone}</Button>
    {/* <Button style={{backgroundColor:'white',color:'#5745A0',borderColor:'#5745A0',marginRight:'7px'}} ><IoMdMail /> Email</Button> */}
    {/* <Button style={{backgroundColor:'white',color:'#5745A0',borderColor:'#5745A0',marginRight:'7px'}} onClick={handleWhatsAppButtonClick}><IoLogoWhatsapp /> Whatsapp</Button> */}
  </div>
    </div>
    </Link> 
</div>
</section>
  )
}

export default Card1