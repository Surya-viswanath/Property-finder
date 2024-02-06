
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios';

function Addplace() {

    const [Email, setEmail] = useState('');
  const [description, setdescription] = useState('');
  const [address, setaddress] = useState('');
  const [regularPrice, setregularPrice] = useState('');
  const [discountPrice, setdiscountPrice] = useState('');
  const [bathrooms, setbathrooms] = useState('');
  const [bedrooms, setbedrooms] = useState('');
  const [furnished, setfurnished] = useState('');
  const [parking, setparking] = useState('');
  const [type, settype] = useState('');
  const [offer, setoffer] = useState('');
  const [image, setimage] = useState('');
  const [size, setsize] = useState('');
  const [name, setname] = useState('');
  const [phone, setphone] = useState('');



  const handleemail =(event)=>{
    setEmail(event.target.value);
  };
  const handledescription=(event)=>{
    setdescription(event.target.value);
  };
  const handleaddress=(event)=>{
    setaddress(event.target.value);
  };
  const handleregularPrice=(event)=>{
    setregularPrice(event.target.value);
  };
  const handlediscountPrice=(event)=>{
    setaddress(event.target.value);
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
  const handleoffer=(event)=>{
    setoffer(event.target.value);
  };
  const handleimage=(event)=>{
    setimage(event.target.value);
  };
  const handlesize=(event)=>{
    setsize(event.target.value);
  };
  const handlename=(event)=>{
    setname(event.target.value);
  };
  const handlephone=(event)=>{
    setphone(event.target.value);
  };

  const handleSubmit = async (event)=>{
    event.preventDefault();
    const display=await axios.post('http://localhost:5005/email',{Email,Password})
    console.log(display.data);
  }

  return (
    <div>
      <div>
  <Form style={{alignItems:'center',margin:'5% 25% 10% 25%'}}>
  <h1 style={{fontSize:'42px',marginBottom:'5%'}}>Add your property here...</h1>
     <Form.Group className="mb-3" controlId="formBasicemail">
      <Form.Label>Type</Form.Label>
      <Form.Control
      type="text"
      placeholder="villa,apartment"
      value={type}
      onChange={handletype}
      required
       />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicemail">
      <Form.Label>Description</Form.Label>
      <Form.Control
      type="text"
      placeholder="description"
      value={description}
      onChange={handledescription}
      required
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicemail">
      <Form.Label>Address</Form.Label>
      <Form.Control
      type="text"
      placeholder="Address"
      value={address}
      onChange={handleaddress}
      required
       />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicemail">
      <Form.Label>Price</Form.Label>
      <Form.Control
      type="text"
      placeholder="regular price"
      value={regularPrice}
      onChange={handleregularPrice}
      required
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicemail">
      <Form.Label>Offer-price</Form.Label>
      <Form.Control
      type="text"
      placeholder="offer-price"
      value={discountPrice}
      onChange={handlediscountPrice}
      required
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicemail">
      <Form.Label>Number of bathrooms</Form.Label>
      <Form.Control
      type="text"
      placeholder="Bathrooms"
      value={bathrooms}
      onChange={handlebathrooms}
      required
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicemail">
      <Form.Label>Number of Bedrooms</Form.Label>
      <Form.Control
      type="text"
      placeholder="Bedrooms"
      value={bedrooms}
      onChange={handlebedrooms}
      required
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicemail">
      <Form.Label>Furnished or not</Form.Label>
      <Form.Control
      type="text"
      placeholder="yes or no"
      value={furnished}
      onChange={handlefurnished}
      required
      />
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicemail">
      <Form.Label>Parking</Form.Label>
      <Form.Control
      type="text"
      placeholder="yes or no"
      value={parking}
      onChange={handleparking}
      required
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicemail">
      <Form.Label>Offer</Form.Label>
      <Form.Control
      type="text"
      placeholder="yes or no"
      value={Email}
      onChange={handleoffer}
      required
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicemail">
      <Form.Label>Property size</Form.Label>
      <Form.Control
      type="text"
      placeholder="how much sqr. feet"
      value={size}
      onChange={handlesize}
      required
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicemail">
      <Form.Label>Agent name</Form.Label>
      <Form.Control
      type="text"
      placeholder="Agent name"
      value={name}
      onChange={handlename}
      required
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicemail">
      <Form.Label>Phone</Form.Label>
      <Form.Control
      type="text"
      placeholder="your number"
      value={phone}
      onChange={handlephone}
      required
      />
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicemail">
      <Form.Label>Email</Form.Label>
      <Form.Control
      type="text"
      placeholder="email"
      value={Email}
      onChange={handleemail}
      required
      />
    </Form.Group>
    {/* <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload images</Form.Label>
        <Form.Control type="file" 
         value={Password}
         onChange={handlepassword}
         required
        />
      </Form.Group> */}

    
    {/* <TEInput
      type="text"
      id="exampleFormControlInput1"
      label="Example label"
    ></TEInput> */}
   {/* <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}


<div className="mb-3 w-96">
          <label
            htmlFor="formFile"
            className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
          >
          Default file input example
          </label>
          <input
            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
            type="file"
           id="formFile"
          />
      </div>

    <Button 
    type="submit"
    onClick={handleSubmit}

    >
    Signup
    </Button>
  </Form>
     
     
    </div>

    </div>
  )
}

export default Addplace
