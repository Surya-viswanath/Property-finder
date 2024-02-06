import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoBedOutline } from "react-icons/io5";
import { BiBuildings } from "react-icons/bi";
import { TbArrowAutofitWidth } from "react-icons/tb";
import { PiBathtub } from "react-icons/pi";
import axios from 'axios';

function Detail() {

  const [first, setfirst] = useState([])
    const handleitems =async()=>{
     
     try{
       const response = await axios.get('http://localhost:4008/getlist')
               
     setfirst(response.data)
     console.log(first);
     }
     catch{
       
     }
   
   }
   handleitems()

  return (
    <div >
      {first.map((demo)=>
      <div>
        
        
      <Container >
      <Row style={{display:'flex'}}>
        <Col sm={8} style={{ backgroundImage: `url("https://www.propertyfinder.ae/property/bfacd889b1521e6d6abd823897562971/856/550/MODE/6d294d/10953160-e50aeo.webp?ctr=ae")`,
        // backgroundImage: `url(${externalImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '500px'}}>
          <Button style={{backgroundColor:'white',color:'black',border:'none',position: "absolute", bottom: "0"}} ><CiLocationOn />View on map</Button>
       </Col>
       <Col sm={4}>
       <Col style={{ backgroundImage: `url("https://www.propertyfinder.ae/property/bfacd889b1521e6d6abd823897562971/856/550/MODE/6d294d/10953160-e50aeo.webp?ctr=ae")`,
        // backgroundImage: `url(${externalImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '50%'}}>
       
       </Col>
       <Col style={{ backgroundImage: `url("https://www.propertyfinder.ae/property/bfacd889b1521e6d6abd823897562971/856/550/MODE/6d294d/10953160-e50aeo.webp?ctr=ae")`,
        // backgroundImage: `url(${externalImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '48%',marginTop:'2%'}}>
       </Col>
       </Col>
        
      </Row>
    </Container>
    <Container >
    <Row>
     
      <Col >
      <HiOutlineBuildingOffice2 /> Property type: {demo.type}  <br></br>
      <IoBedOutline /> Bedrooms: {demo.bedrooms}  <br></br>
      <BiBuildings /> Project:
      
      </Col>
      <Col>
      <TbArrowAutofitWidth /> Property size: {demo.size} <br></br>
      <PiBathtub /> Bathrooms: {demo.bathrooms}
      <p></p>
     
      </Col>

      <Col>
      helooo

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62712.2708667111!2d75.89277103322111!3d10.771663951667106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7bb1601fb4fc1%3A0xf4730e353e45b9e1!2sPonnani%2C%20Kerala!5e0!3m2!1sen!2sin!4v1707191734734!5m2!1sen!2sin" width="600" height="450" ></iframe>
      {/* <iframe src="[your unique google URL] " width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      </Col>
    </Row>
   
    
    </Container>
    
    </div>
    )}
    </div>
  )
}

export default Detail
