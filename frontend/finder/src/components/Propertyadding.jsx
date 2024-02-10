import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './Signup.css'

function Propertyadding() {
  
    const [description, setdescription] = useState('');
    const [address, setaddress] = useState('');
    const [regularPrice, setregularPrice] = useState('');
    const [offer, setoffer] = useState('');
    const [discountPrice, setdiscountPrice] = useState('');
    const [bathrooms, setbathrooms] = useState('');
    const [furnished, setfurnished] = useState('');
    const [parking, setparking] = useState('');
    const [bedrooms, setbedrooms] = useState('');
    const [type, settype] = useState('');
    const [propertysize, setpropertysize] = useState('');
    const [email, setemail] = useState('');
     const [phone, setphone] = useState('');
    const [image, setimage] = useState([]);
    const [location, setlocation] = useState('');
    const [sell, setsell] = useState('');
  const handledescription =(event)=>{
    setdescription(event.target.value);
  };
  const handleaddress=(event)=>{
    setaddress(event.target.value);
  };
  const handleregularPrice=(event)=>{
    setregularPrice(event.target.value);
  };
  const handleoffer=(event)=>{
    setoffer(event.target.value);
  };
  const handlediscountPrice=(event)=>{
    setdiscountPrice(event.target.value);
  };
  const handlebathrooms=(event)=>{
    setbathrooms(event.target.value);
  };
  const handlebedrooms=(event)=>{
    setbedrooms(event.target.value);
  };
  const handlefurnished=(event)=>{
    setfurnished(event.target.value);
  };
  const handleparking=(event)=>{
    setparking(event.target.value);
  };
   const handletype=(event)=>{
    settype(event.target.value);
  };
  const handlepropertysize=(event)=>{
    setpropertysize(event.target.value);
  };
const handlephone=(event)=>{
    setphone(event.target.value);
  };
  const handleemail=(event)=>{
    setemail(event.target.value);
  };
  const handleimage=(event)=>{
    setimage(event.target.value);
  };
  const handlelocation =(event)=>{
    setlocation(event.target.value);
  };
  const handlesell =(event)=>{
    setsell(event.target.value);
  };
const handleSubmit =async(event)=>{
    event.preventDefault()
    try{
    const display =await axios.post('http://localhost:4008/createpro',{description,address,regularPrice,discountPrice,bathrooms,bedrooms,furnished,parking,type,offer,propertysize,phone,email,image,location,sell})
    console.log(display.data)}
    catch{ 

    }
    alert(` ${email} successfully created list..!!!`)
   
  }

  
  return (
    <div className='add'>
      <h2>Add your property..</h2>
      
      <Form  onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicemail">
      <Form.Label>Description</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter description"
      value={description}
      onChange={handledescription}
      required
      />
    </Form.Group>

    {/* <Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>password</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter password"
      value={password}
      onChange={handlepassword}
      required
      
      />
    </Form.Group> */}

    <Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>Address</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter the address"
      value={address}
      onChange={handleaddress}
      required
      
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>Buy,Ret or Commercial</Form.Label>
      <Form.Control
      type="text"
      placeholder="Type here"
      value={sell}
      onChange={handlesell}
      required
      
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>RegularPrice</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter the Price"
      value={regularPrice}
      onChange={handleregularPrice}
      required
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>Offer</Form.Label>
      <Form.Control
      type="text"
      placeholder="yes or no"
      value={offer}
      onChange={handleoffer}
      required
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>DiscountPrice</Form.Label>
      <Form.Control
      type="text"
      placeholder="Offer price"
      value={discountPrice}
      onChange={handlediscountPrice}
      required
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>Number of bathrooms</Form.Label>
      <Form.Control
      type="text"
      placeholder="number of bathrooms"
      value={bathrooms}
      onChange={handlebathrooms}
      required
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>Number of bedrooms</Form.Label>
      <Form.Control
      type="text"
      placeholder="bedrooms"
      value={bedrooms}
      onChange={handlebedrooms}
      required
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>Furnished or not</Form.Label>
      <Form.Control
      type="text"
      placeholder="yes or no"
      value={furnished}
      onChange={handlefurnished}
      required
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>parking</Form.Label>
      <Form.Control
      type="text"
      placeholder="yes or no"
      value={parking}
      onChange={handleparking}
      required
      />
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>Type</Form.Label>
      <Form.Control
      type="text"
      placeholder="type"
      value={type}
      onChange={handletype}
      required
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>propertysize</Form.Label>
      <Form.Control
      type="text"
      placeholder="propertysize"
      value={propertysize}
      onChange={handlepropertysize}
      required
      />
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>email</Form.Label>
      <Form.Control
      type="text"
      placeholder="email"
      value={email}
      onChange={handleemail}
      required
      />
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>Phone</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter your phone number"
      value={phone}
      onChange={handlephone}
      required
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>Add Location</Form.Label>
      <Form.Control
      type="text"
      placeholder="Paste the location here"
      value={location}
      onChange={handlelocation}
      required
      />
    </Form.Group>

    
    
    <div className="mb-3 w-96">
          <label
            htmlFor="formFile"
            className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
          >
         Add  photo
          </label>
          <input
            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
            type="text"
            value={image}
            onChange={handleimage}

           id="formFile"
          />
      </div>
    <Button 
    type="submit"
    // onClick={handleSubmit}
    style={{float: 'right'}}
    className='signbut'
    >
    Add
    </Button>
  </Form>

    </div>
  )
}

export default Propertyadding