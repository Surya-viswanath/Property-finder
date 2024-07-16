import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoBedOutline } from "react-icons/io5";
import { BiBuildings } from "react-icons/bi";
import { TbArrowAutofitWidth } from "react-icons/tb";
import { PiBathtub } from "react-icons/pi";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { PiCoatHangerLight } from "react-icons/pi";
import { FaCarAlt } from "react-icons/fa";
import { BiDumbbell } from "react-icons/bi";
import { MdChair } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function Detail({ properties}) {

  const {_id,ids,email}=useParams();
  const [first, setfirst] = useState([])
  const [second, setsecond] = useState([])
 const userid=ids;
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

  const getid=_id;
 const property = first.filter((item)=>item._id===getid)
//  console.log(property);



const getmail=email;
const mailid = second.filter((item)=>item.email===getmail)

  console.log(mailid);

 const handleWhatsAppButtonClick = () => {
  const phoneNumber = mailid[0].phone; 
  // console.log(phoneNumber)
  const message = 'Hello! I am interested in your product.'; // Optional: Replace with a predefined message

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');
};

const addToWishlist = async (propertyId, userId) => {
  try {
    const response = await axios.post('http://localhost:4008/addToWishlist', { propertyId, userId });
    console.log(response.data); // Assuming the response contains some confirmation message
    // You can also show a toast or notification to inform the user that the property has been added to the wishlist
  } catch (error) {
    console.error('Error adding property to wishlist:', error);
    // Handle error (show error message to user, etc.)
  }
};
  return (
    <div >
      {property.map((demo)=>
      <div>
        
        
      <Container >
      <Row style={{display:'flex'}}>
        <Col sm={8}>
          <img src={demo.image} style={{width:'100%',height:'93.5%'}}></img>
          <Button style={{backgroundColor:'white',color:'black',border:'none',marginTop:'-20%',marginLeft:'5%'}} ><CiLocationOn /> <a href={demo.location} style={{textDecoration:'none',color:'black'}}>View on map</a></Button>
       </Col>
       <Col sm={4} >
       <Col>
       <img src={demo.image} style={{width:'100%',marginBottom:'2%'}}></img>
       </Col>
       <Col >
       <img src={demo.image} style={{width:'100%',height:'80%'}}></img>
       </Col>
       </Col>
        
      </Row>
    </Container>
    <Container style={{display:'flex'}}>
    <Row >
     <div >
    <h6 style={{display:'flex'}}>{demo.address}
{/* <p style={{ color: 'red', marginLeft: '20%', fontSize: '18px' }} onClick={addToWishlist}><CiHeart /></p>   */}
  </h6>
     </div>
      <h5 style={{marginTop:'0%'}}>{demo.description}</h5>
    <Col style={{paddingRight:'-20%'}}>
      <div style={{marginTop:'1.5%'}}>
     <h6 style={{marginRight:'2%'}}><FaIndianRupeeSign /> Property Price:  {demo.regularPrice}</h6>
     <h6 style={{marginRight:'2%'}}><BiSolidOffer /> Offer price : {demo.discountPrice}</h6>
     </div>
      <div>
      <h6><HiOutlineBuildingOffice2 /> Property type: {demo.type}  </h6>
     <h6> <IoBedOutline /> Bedrooms: {demo.bedrooms}  </h6>
      {/* <h6><BiBuildings /> Project:    </h6> */}
      <h6><FaCarAlt /> Parking : {demo.parking}</h6>
   
   </div>
      </Col>
      <Col style={{marginLeft:'30%',marginRight:'-30%'}}>
       
      <h6 style={{marginRight:'2%'}}> Offer : {demo.offer}</h6>
     <h6> <TbArrowAutofitWidth /> Property size: {demo.propertysize} </h6>
     <h6> <PiBathtub /> Bathrooms: {demo.bathrooms}</h6>
     <h6><MdChair />Furnished: {demo.furnished}</h6>
     <h6><BiDumbbell />Gym : No</h6>
      <p></p>
     
      </Col>
    </Row>
   <Row style={{marginLeft:'20%'}}>
  
   <div style={{display:'flex'}}>
<Button style={{backgroundColor:'#EF5E4E',color:'white',border:'none',marginRight:'7px',height:'60px'}}><FaPhoneAlt /> +91{demo.phone}</Button>
<Button style={{backgroundColor:'#EF5E4E',color:'white',border:'none',marginRight:'7px',height:'60px'}} ><IoMdMail /> Email</Button>
<Button style={{backgroundColor:'#25D366',color:'white',border:'none',marginRight:'7px',height:'60px'}} onClick={handleWhatsAppButtonClick}><IoLogoWhatsapp /> Whatsapp</Button>
</div>
{mailid.map((helo)=>(
<div style={{marginTop:'-15%',display:'flex'}}>
  <Link to={`/agent/${demo.email}`}><img src={helo.profile} style={{width:'50px',height:'50px',borderRadius:'50%'}}></img></Link>
<p style={{marginTop:'3%'}}> {helo.name} usually responds within 5 minutes</p>
  </div>
))}

{/* import { CiLocationOn, CiHeart } from "react-icons/ci";
<Link to={`/Wishlist/${userid}/${data._id}`} style={{textDecoration:'none'}}><p style={{ color: 'red', marginLeft: '20%', fontSize: '18px' }}><CiHeart /></p></Link> */}



   </Row>
    
    </Container>
   
    </div>



    )}


    </div>
  )
}

export default Detail
