
import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';



export default function Login() {

    const [email, setemail] = useState('');
  const [password, setpassword] = useState('');


  const handleemail =(event)=>{
    setemail(event.target.value);
  };
  const handlepassword=(event)=>{
    setpassword(event.target.value);
  };

  const handleSubmit = async (event)=>{
    event.preventDefault();
    const display=await axios.post('http://localhost:4008/login',{email,password})
    console.log(display.data);
    
        alert(` ${email} successfully logined..!!!`)
  
  }

 
  return (
    <div>
      
      <div style={{alignItems:'center'}}>
      <h1>Login</h1>
  <Form>
    
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
      <Form.Label>Password</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter password"
      value={password}
      onChange={handlepassword}
      required
      
      />
    </Form.Group>

    <Button 
    type="submit"
    onClick={handleSubmit}>
    Login
    </Button>
  </Form>
     
     
    </div>

      
     

    </div>
  )
}
