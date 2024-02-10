import React, {  useEffect, useState } from 'react'
import './Menu.css'
import { Button, Col, Container, Dropdown, Form, Modal, Nav, Navbar, Row } from 'react-bootstrap'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import logo from './download.png';

function Menus() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
const [first,setfirst]= useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  // const { basename = '' } = useContext(SomeContext) || {};
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  

  const handlename =(event)=>{
    setname(event.target.value);
  };
  const handleemail =(event)=>{
    setemail(event.target.value);
  };
  const handlepassword=(event)=>{
    setpassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    const pname=name;
    const pemail=email;
    event.preventDefault();
    try {
      const display = await axios.post('http://localhost:4008//login', { email, password });
      console.log(display.data);
    } catch (error) {
      console.error('Axios Error:', error);
    }
    alert(` ${name} successfully logined..!!!`)
    handleClose ();
    navigate(`/open/${pemail}/${pname}`)
     
  };



  useEffect(() => {
    const handleItems = async () => {
      try {
        const response = await axios.get('http://localhost:4008/getpro');
        setfirst(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    handleItems();
  }, []);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" style={{display:'flex'}}>
        <Container className='menuu'>
        <Link to="/" style={{textDecoration:'none'}}><img src={logo} width={'120px'}></img></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          {/* {first.map(property => (
          <li>
           <Link to={`/buy/${property.sell}`}> <Nav.Link  className='meenu'>Buy</Nav.Link></Link>
            {/* <Nav.Link href="#features"  className='meenu'>Rent</Nav.Link>
            <Nav.Link href="#pricing"  className='meenu'>Commercial</Nav.Link>
            <Nav.Link href="#pricing"  className='meenu'>New projects</Nav.Link> */}
           
          {/* </li> */}
        {/* ))} */}
            <Nav.Link href={`/buy/Buy`} className='meenu'>Buy</Nav.Link>
            <Nav.Link href={`/rent/Rent`}  className='meenu'>Rent</Nav.Link>
            <Nav.Link href={`/commercial/commercial`}  className='meenu'>Commercial</Nav.Link>
            <Nav.Link href="#pricing"  className='meenu'>New projects</Nav.Link>
            <Nav.Link href="#pricing"  className='meenu'>Find agent</Nav.Link>
           
           
            <div class="dropdown">
  <button class="dropbtn">Explore</button>
  <div class="dropdown-content">
    <a href="#"  className='meenu'> Explore with DataGuru  <span style={{marginLeft:'5px',padding:'0px 5px',backgroundColor:'#5745A0',color:'white',borderRadius:'5px',fontSize:'10px'}}>  NEW</span></a>
    <a href="#"  className='meenu'>Property Blog</a>
    <a href="#"  className='meenu'>Mo'asher: Dubai Price Index</a>
  </div>
</div>

            <Nav.Link href="#pricing"  className='meenu'>Mortgages</Nav.Link>
            <Nav.Link href="#pricing"  className='meenu' >Explore</Nav.Link>
            <Nav.Link href="#pricing"  className='meenu'>Mortgages</Nav.Link>
            
            <div class="dropdown" style={{textAlign:'center'}}>
  <button class="dropbtn"  onClick={handleShow}>Login</button>
  <div class="dropdown-content">
    <p style={{textAlign:'center',paddingTop:'10%'}}>Sign in or register to sync your favorite properties across devices</p>
    <button className="sign" style={{color:'white'}}>Sign in</button>
    <a href="#"  className='meenu'>Create new account</a>
    <a href="#"  className='meenu'>Saved properties</a>
  </div>
</div>
            </Nav>
           
          
        </Navbar.Collapse>
        </Container>
       
      </Navbar>
 {/* * */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome to Property Finder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
        <Col className='loginsub'>
        <p className='view' style={{color:'black'}}>View saved properties<br></br>
Keep search history across devices<br></br>
See which properties you have <br></br>contacted</p>
        </Col>
        <Col>
{/*  */}
        
<Form onSubmit={handleSubmit} style={{paddingTop:'25%'}}>
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
   

    <Button 
    type="submit" style={{backgroundColor:'#ef5e4e',border:'none'}}  >
    Login
    </Button>
  </Form>
     
{/*  */}
        </Col>
      </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={{backgroundColor:'#ef5e4e',border:'none'}}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose} style={{textDecoration:'none',color:'white',backgroundColor:'#ef5e4e',border:'none'}}>
           <Link to='/sign' style={{textDecoration:'none',color:'white'}}> Signup</Link>
          </Button>
        </Modal.Footer>
       
      </Modal>
     
{/*  */}
</div>
  )
}

export default Menus
