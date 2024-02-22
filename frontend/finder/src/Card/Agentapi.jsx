import axios from 'axios'
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

import './Api.css'

import Cardagent from './Cardagent'

 function Agentapi() {
    const [first, setfirst] = useState([])
    const handleitems =async()=>{
     
     try{
       const response = await axios.get('http://localhost:4008/getagent')
               
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
     {first.map((agentplay)=>
        <Cardagent agentplay={agentplay}/>
     
     )}
     </div>
    </div>
   )
 }
 
 export default Agentapi