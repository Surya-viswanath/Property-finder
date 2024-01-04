import React from 'react'
import { Button, Col, Container, Form, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Menu.css'
import logo from './download.png'
function Menu() {
  return (
    <div style={{backgroundColor:'white'}}>
      

      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <img src={logo} width={'120px'} ></img>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <div style={{display:'flex'}}>
          <Nav.Link href="#features" style={{}} className='item'>Buy</Nav.Link>
          <Nav.Link href="#features" style={{}} className='item'>Rent</Nav.Link>
          <Nav.Link href="#features" style={{}} className='item'>Commercial</Nav.Link>
          <Nav.Link href="#features" style={{}} className='item'>New projects</Nav.Link>
          <Nav.Link href="#features" style={{}} className='item'>Find Agent</Nav.Link>
            <NavDropdown title="Explore" id="basic-nav-dropdown" className='item'>
              <NavDropdown.Item className='droppro' href="#action/3.1">Explore with DataGuru<span style={{backgroundColor:'#7363ba', color:'white',fontSize:'10px',padding:'5px',fontWeight:'700'}}>NEW</span></NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.2" className='droppro'>Property Blog</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='droppro'>Mo'asher: Dubai Price Index</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#features" style={{}} className='item'>Mortgages</Nav.Link>
            </div>
            </Nav>
            <Nav className="ms-auto">
            <Nav.Link href="#features" style={{}}>Login</Nav.Link>
            <Nav.Link href="#features" style={{}}>Cart</Nav.Link>
            <Nav.Link href="#features" style={{}}>Wishlist</Nav.Link>
           
          </Nav>
        </Navbar.Collapse> 
      </Container>
    </Navbar>

    </div>
  )
}

export default Menu