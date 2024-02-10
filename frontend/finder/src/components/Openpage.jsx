import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import './Openpage.css'

function Openpage(){
    const { pname, pemail } = useParams();
    const name =pname;
    // console.log(name)
  return (
    <div className='openbanner'>
        <h3>hey {name}</h3>
      <Button className='openbut'><Link to="/adding"  className='openli'>Add your Property..</Link></Button>
    </div>
  )
}

export default Openpage

