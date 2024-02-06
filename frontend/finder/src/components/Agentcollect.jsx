import axios from 'axios'
import React, { useState } from 'react'
import './Card.css'
import Agentcard from './Agentcard'
import Openpage from './Openpage'

function Agentcollect() {

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
    <div>
        <h2 style={{marginLeft:'5%',marginRight:'5%'}}>Your properties are here..</h2>
      <div className='max-width explore-section'>
        <div className='collection-title'></div>
     <div className='explore-grid'>
     {first.map((display)=>
     
        <Agentcard display={display}/>
     
        
     
     )}
     </div>
    </div>
    </div>
  )
}

export default Agentcollect
