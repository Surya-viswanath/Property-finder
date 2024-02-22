import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoBedOutline } from "react-icons/io5";
import { BiBuildings } from "react-icons/bi";
import { TbArrowAutofitWidth } from "react-icons/tb";
import { PiBathtub } from "react-icons/pi";
import axios from 'axios';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { PiCoatHangerLight } from "react-icons/pi";
import { FaCarAlt } from "react-icons/fa";
import { BiDumbbell } from "react-icons/bi";
import { MdChair } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineBed } from "react-icons/md";
import { MdStars } from "react-icons/md";

import { GiResize } from "react-icons/gi";

function Agentopen() {

    const navigate= useNavigate();
  const {pemail}=useParams();
  const [first, setfirst] = useState([])
  const [second, setsecond] = useState([])

  useEffect(()=>{
    const handleitems =async()=>{
     try{
       const response = await axios.get('http://localhost:4008/getpro')     
     setfirst(response.data)
    //  console.log(first);
     }
     catch{ 
     }
   }
   handleitems();
  },[]);


  useEffect(()=>{
    const agent =async()=>{
     try{
       const responses = await axios.get('http://localhost:4008/getagent')     
     setsecond(responses.data)
     console.log(second);
     }
     catch{ 
     }
   }
   agent();
  },[]);

  const getmail=pemail;
 const property = first.filter((item)=>item.email===getmail)
//  console.log(property);


const mailid = second.filter((item)=>item.email===getmail)

  console.log(mailid);

 const handleWhatsAppButtonClick = () => {
  const phoneNumber = mailid[0].phone; 
  // console.log(phoneNumber)
  const message = 'Hello! I am interested in your product.'; // Optional: Replace with a predefined message

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');
};


  return (
    <div >
        <div>
         {mailid.map((helo)=>(
            <div>
<Row style={{backgroundColor:'#f7f6fb',padding:'5%',marginLeft:'5%',marginRight:'20%',borderRadius:'25px'}}>
<Col sm={6} style={{display:'flex'}}>
  <Col >
  <img src={helo.profile} style={{width:'100px',height:'100px',borderRadius:'50%'}}></img>
  </Col>
  <Col style={{marginLeft:'0px'}}>
  <h2 style={{color:'black',marginLeft:'0',marginTop:'5%'}}>{helo.name}</h2>
<h5 style={{color:'#5745a0',marginLeft:'0'}}>Property Consultant</h5>
  </Col>
  </Col>
  <div style={{marginTop:'5%'}}>
        <p style={{fontSize:'17px',color:'#707070'}}>Nationality :  <span style={{color:'black'}}>  {helo.nationality}</span></p>
        <p style={{fontSize:'17px',color:'#707070'}}>Languages : <span style={{color:'black'}}>   {helo.languages}</span></p>
        <div style={{display:'flex'}}>
        <p style={{fontSize:'17px',color:'#707070',marginTop:'5%'}}>{helo.name} usually responds <span style={{color:'black'}}>within 5 minutes</span></p>
        <div style={{marginTop:'4%',marginLeft:'10%'}}>
<Button style={{backgroundColor:'white',color:'#5745a0',border:'1px solid #5745a0',marginRight:'7px',height:'50px',width:'150px'}} onClick={handleWhatsAppButtonClick}><IoLogoWhatsapp /> Whatsapp</Button>
<Button style={{backgroundColor:'white',color:'#5745a0',border:'1px solid #5745a0',height:'50px'}}><FaPhoneAlt /> +91{helo.phone}</Button>
</div>
  </div>
        
    </div>
</Row>
<Col sm={6} >
  <h5 style={{color:'black'}}>Contact this agent</h5>
  <Col>
  <Button style={{backgroundColor:'#EF5E4E',color:'white',border:'none',marginRight:'7px',height:'60px'}}><FaPhoneAlt /> +91{helo.phone}</Button>
<Button style={{backgroundColor:'#EF5E4E',color:'white',border:'none',marginRight:'7px',height:'60px'}} ><IoMdMail /> Email</Button>
<Button style={{backgroundColor:'#25D366',color:'white',border:'none',marginRight:'7px',height:'60px'}} onClick={handleWhatsAppButtonClick}><IoLogoWhatsapp /> Whatsapp</Button>
  </Col>
  </Col>
<div style={{marginLeft:'5%'}}>
<h4>Personal Information</h4>

    <div>
        <h6>Nationality : {helo.nationality}</h6>
        <h6>Languages : {helo.languages}</h6>
        <h6>Experience Since : {helo.experience}</h6>
    </div>
    <div style={{marginRight:'30%'}}>
       <h4 style={{marginTop:'2%'}}>About Me</h4>
       <p>{helo.details}</p>
    </div>
    

  </div>
  </div>
))}
</div>
    </div>
  )
}

export default Agentopen
