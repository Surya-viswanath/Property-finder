import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import './Openpage.css'

function Openpage(){
    const {  pemail } = useParams();
    
    // console.log(name)
  return (
    <div className='openbanner'>
       
      <Button className='openbut'><Link to="/adding"  className='openli'>Add your Property..</Link></Button>
    </div>
  )
}

export default Openpage

