import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import './Openpage.css'

function Openpage(){
    const { pname, pemail } = useParams();
    
  return (
    <div className='openbanner'>
        <h3>hey {pname}</h3>
      <Button className='openbut'><Link to="/adding"  className='openli'>Add your Property..</Link></Button>
    </div>
  )
}

export default Openpage

