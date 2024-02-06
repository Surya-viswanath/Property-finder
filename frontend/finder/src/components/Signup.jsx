
import React, { useState } from 'react'
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import './Signup.css'
import { useNavigate } from 'react-router-dom';


function Signup() {

  const navigate = useNavigate();

const [name, setname] = useState('');
const [email, setemail] = useState('');
const [password, setpassword] = useState('');
const [nationality, setnationality] = useState('');
const [languages, setlanguages] = useState('');
const [experience, setexperience] = useState('');
const [details, setdetails] = useState('');
const [phone, setphone] = useState('');
const [profile, setprofile] = useState([]);

const handlename =(event)=>{
    setname(event.target.value);
  };
  const handleemail =(event)=>{
    setemail(event.target.value);
  };
  const handlepassword=(event)=>{
    setpassword(event.target.value);
  };
  const ispasswordValid = (event)=>{
    return password.length >=6;
  };
  const handlenationality=(event)=>{
    setnationality(event.target.value);
  };
  const handlelanguages=(event)=>{
    setlanguages(event.target.value);
  };
  const handleexperience=(event)=>{
    setexperience(event.target.value);
  };
  const handledetails=(event)=>{
    setdetails(event.target.value);
  };
  const handlephone=(event)=>{
    setphone(event.target.value);
  };
  const handleprofile=(event)=>{
    setprofile(event.target.value);
  };

  
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const display = await axios.post('http://localhost:4008/createagent', { name,email, password,nationality,languages,experience,details,phone,profile});
//       console.log(display.data);
//     } catch (error) {
//       console.error('Axios Error:', error);
//     }
//   };
const handleSubmit =async(event)=>{
  const pname=name;
  const pemail=email;
    event.preventDefault()
    const display =await axios.post('http://localhost:4008/createagent',{name,email, password,nationality,languages,experience,details,phone,profile})
    console.log(display.data)
    alert(` ${name} successfully created..!!!`)
    
    navigate(`/open/${pname}/${pemail}`);
  
  }
  return (
    <div className='signup'>

<h2>Create your account</h2>
      <Form onSubmit={handleSubmit}>
<Form.Group className="mb-3" controlId="formBasicemail">
      <Form.Label>Name</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter your name"
      value={name}
      onChange={handlename}
      required
      
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicemail">
      <Form.Label>Email</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter your email"
      value={email}
      onChange={handleemail}
      required
      
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>password</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter password"
      value={password}
      onChange={handlepassword}
      required
      
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>Nationality</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter your nation"
      value={nationality}
      onChange={handlenationality}
      required
      
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>Languages</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter your nation"
      value={languages}
      onChange={handlelanguages}
      required
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>Experience since</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter your nation"
      value={experience}
      onChange={handleexperience}
      required
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>Details</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter your nation"
      value={details}
      onChange={handledetails}
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

    {/* <Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>profile</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter your phone number"
      value={profile}
      onChange={handleprofile}
      required
      />
    </Form.Group> */}
    
    <div className="mb-3 w-96">
          <label
            htmlFor="formFile"
            className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
          >
         Add profile photo
          </label>
          <input
            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
            type="file"
           id="formFile"
          />
      </div>
    <Button 
    type="submit"
    // onClick={handleSubmit}
className='signbut'
    >
    Signup
    </Button>
  </Form>
    </div>
  )
}

export default Signup
