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

function Cardagent({agentplay}) {
  


   
 
  return (
   

    <section  style={{width:'50%'}}>
{/* <h2>featured products</h2>
<p>Summer Collection New Modern Design</p> */}
<div className=" pro-container" style={{border:'1px solid gray',margin:'5px',borderRadius:'10px'}}>
   {/* <Link to={/detailed/${display.email}} style={{textDecoration:'none'}}> */}
  
    <div className="pro"style={{height:'180px',display:'flex'}}>
        <div>
        <img src={agentplay.profile}  style={{height:'180px',width:'229px',borderRadius:'10px'}}/>
        </div>

         <div className="des" style={{ padding: '8px 10px 6px'}}>
<h5 style={{color:'black'}}>{agentplay.name}</h5>
<p  style={{color:'gray'}}>Property consultant</p>
<p  style={{color:'gray'}}>Nationality : {agentplay.nationality}</p>
<p  style={{color:'gray'}}>Languages : {agentplay.languages}</p>
<p  style={{color:'#707070'}}><CiLocationOn />{agentplay.address}</p>

        </div>
      
        {/* <div style={{display:'flex',marginLeft:'8%'}}>
    <Button style={{backgroundColor:'white',color:'#5745A0',borderColor:'#5745A0',marginRight:'7px'}}><FaPhoneAlt /> +91{agentplay.phone}</Button>
    {/* <Button style={{backgroundColor:'white',color:'#5745A0',borderColor:'#5745A0',marginRight:'7px'}} ><IoMdMail /> Email</Button> */}
    {/* <Button style={{backgroundColor:'white',color:'#5745A0',borderColor:'#5745A0',marginRight:'7px'}} onClick={handleWhatsAppButtonClick}><IoLogoWhatsapp /> Whatsapp</Button> */}
  {/* </div> */} 
    </div>
    {/* </Link>  */}
</div>
</section>
  )
}

export default Cardagent