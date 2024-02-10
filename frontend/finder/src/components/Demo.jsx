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

function Demo() {
  const { pemail } = useParams();
  const [first, setFirst] = useState([]);
 

  useEffect(() => {
    const handleItems = async () => {
      try {
        const response = await axios.get('http://localhost:4008/getpro');
        setFirst(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    handleItems();
  }, []);

  const newemail = pemail;

  
  const filteredData = first.filter((item) => item.email === newemail);
// console.log(filteredData);
// console.log(filteredData.phone);



const handleWhatsAppButtonClick = () => {
  const phoneNumber = filteredData[0].phone;
  console.log(phoneNumber);
   // Replace with the phone number you want to chat with
  const message = 'Hello! I am interested in your product.'; // Optional: Replace with a predefined message

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');
};
  return (
    <div >
   <div style={{maxWidth:'1100px',margin:'0px auto'}}>
      
{filteredData.map((display) =>(
  <div style={{Width:'60%',margin:'0px auto',marginBottom:'2%'}}>
     <Link to={`/detail/${display._id}/${display.email}`} style={{textDecoration:'none'}}>
 <div style={{display:'flex',width:'60%',border:'1px solid #e4e4e4',margin:'0%'}}>

  <div>
<img src={display.image} style={{width:'320px',height:'280px'}}
/>
  </div>
  <div style={{marginLeft:'2%',marginTop:'3%'}}>
<p style={{color:'#707070'}}>{display.type}</p>
<p style={{color:'black'}}>{display.sell}</p>
<h5 style={{color:'black'}}>{display.regularPrice}</h5>
<p style={{color:'black'}}>{display.description}</p>
<p style={{color:'#707070'}}><CiLocationOn />{display.address}</p>
<div style={{display:'flex',color:'#707070'}}>
<p style={{marginRight:'5%'}}><MdOutlineBed />  {display.bedrooms}</p>
<p style={{marginRight:'5%'}}><PiBathtub />  {display.bathrooms}</p>
<p style={{marginRight:'5%'}}><GiResize />  {display.propertysize} </p>
</div>
  </div>

 </div>
 </Link>
<div style={{display:'flex',border:'1px solid #e4e4e4',marginRight:'40%',padding:'0.5%',backgroundColor:'#f8f8f8'}}>
  <div>heloooo</div>
  <div style={{display:'flex',marginLeft:'32%'}}>
    <Button style={{backgroundColor:'white',color:'#5745A0',borderColor:'#5745A0',marginRight:'7px'}}><FaPhoneAlt /> +91{display.phone}</Button>
    <Button style={{backgroundColor:'white',color:'#5745A0',borderColor:'#5745A0',marginRight:'7px'}} ><IoMdMail /> Email</Button>
    <Button style={{backgroundColor:'white',color:'#5745A0',borderColor:'#5745A0',marginRight:'7px'}} onClick={handleWhatsAppButtonClick}><IoLogoWhatsapp /> Whatsapp</Button>
  </div>
  </div>



 
  </div>
 
 
 ) )}
   </div>
   </div>       
  );
}
 
export default Demo;