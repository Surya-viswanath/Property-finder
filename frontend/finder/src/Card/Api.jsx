import axios from 'axios'
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

import './Api.css'
import Card1 from './Card1'

 function Api() {
    const [first, setfirst] = useState([])
    const handleitems =async()=>{
     
     try{
       const response = await axios.get('http://localhost:4008/getpro')
               
     setfirst(response.data)
     console.log(first);
     }
     catch{
       
     }
   
   }
   handleitems()
    
   return (
<div className='max-width explore-section'>
        <div className='collection-title'></div>
     <div className='explore-grid'>
     {first.map((display)=>
        <Card1 display={display}/>
     
     )}
     </div>
    </div>
   )
 }
 
 export default Api