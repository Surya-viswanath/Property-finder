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

function Agent() {

    const navigate= useNavigate();
  const {email}=useParams();
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

  const getmail=email;
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
<div style={{backgroundColor:'#5745A0',height:'200px',width:'100%'}}>
</div>
{/* <div style={{display:'flex',marginTop:'-10%'}}>
    <div style={{display:'flex'}}>
<div style={{marginLeft:'15%'}}>
  <img src={helo.profile} style={{width:'100%',height:'100%',borderRadius:'2%',float:'bottom'}}></img>
</div>
<div style={{marginLeft:'15%'}}>
<h2 style={{color:'white',marginLeft:'5%'}}>{helo.name}</h2>
<h5 style={{color:'white'}}>Property Consultant</h5>
    </div>
</div>

<div  style={{backgroundColor:'white',padding:'1%',float:'right',border:'1px solid #b0b0b0'}}>
    <h5>Contact this agent</h5>
    <div style={{display:'flex'}}>
<Button style={{backgroundColor:'#EF5E4E',color:'white',border:'none',marginRight:'7px',height:'60px'}}><FaPhoneAlt /> +91{helo.phone}</Button>
<Button style={{backgroundColor:'#EF5E4E',color:'white',border:'none',marginRight:'7px',height:'60px'}} ><IoMdMail /> Email</Button>
<Button style={{backgroundColor:'#25D366',color:'white',border:'none',marginRight:'7px',height:'60px'}} onClick={handleWhatsAppButtonClick}><IoLogoWhatsapp /> Whatsapp</Button>
</div>

<h6 style={{marginTop:'15px'}}><span style={{color:'#5745A0'}}><MdStars /></span>{helo.name} usually responds within 5 minutes</h6>
    </div>
</div> */}
<Row style={{marginLeft:'5%',marginTop:'-10%'}}>
<Col sm={6} style={{display:'flex'}}>
  <Col >
  <img src={helo.profile} style={{width:'100%',height:'50%',borderRadius:'2%',float:'bottom'}}></img>
  </Col>
  <Col style={{marginLeft:'5%'}}>
  <h2 style={{color:'white',marginLeft:'5%'}}>{helo.name}</h2>
<h5 style={{color:'white'}}>Property Consultant</h5>
  </Col>
  </Col>
  <Col sm={6} >
  <h5 style={{color:'white'}}>Contact this agent</h5>
  <Col>
  <Button style={{backgroundColor:'#EF5E4E',color:'white',border:'none',marginRight:'7px',height:'60px'}}><FaPhoneAlt /> +91{helo.phone}</Button>
<Button style={{backgroundColor:'#EF5E4E',color:'white',border:'none',marginRight:'7px',height:'60px'}} ><IoMdMail /> Email</Button>
<Button style={{backgroundColor:'#25D366',color:'white',border:'none',marginRight:'7px',height:'60px'}} onClick={handleWhatsAppButtonClick}><IoLogoWhatsapp /> Whatsapp</Button>
  </Col>
  </Col>
</Row>
<div style={{marginTop:'-10%',marginLeft:'5%'}}>
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



{/* <div style={{maxWidth:'1100px',margin:'0px auto'}}>
      
      {property.map((display) =>(
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
         </div> */}

    </div>
  )
}

export default Agent
