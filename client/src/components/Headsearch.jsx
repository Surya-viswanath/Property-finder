import React from 'react'
import { Button, Col, Form, NavDropdown, Row } from 'react-bootstrap'

function Headsearch() {
  return (
    <div>
       <Form>
        <Row>
          <Col xs="auto" style={{marginLeft:'50px'}}>
            <Form.Control 
              type="text"
              placeholder="Search"
              className=" mr-sm-2 "
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" className='buttt'>
            <NavDropdown title="Buy" id="basic-nav-dropdown" className='item'>
              <NavDropdown.Item className='droppro' href="#action/3.1">Explore with DataGuru<span style={{backgroundColor:'#7363ba', color:'white',fontSize:'10px',padding:'5px',fontWeight:'700'}}>NEW</span></NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.2" className='droppro'>Property Blog</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='droppro'>Mo'asher: Dubai Price Index</NavDropdown.Item>
            </NavDropdown>
            </Button>
          </Col>
          <Col xs="auto">
            <Button type="submit" className='buttt'>hgf</Button>
          </Col>
          <Col xs="auto">
            <Button type="submit" className='buttt'>Beds & Baths</Button>
          </Col>
          <Col xs="auto">
            <Button type="submit" className='buttt'>Price</Button>
          </Col>
          <Col xs="auto">
            <Button type="submit" className='buttt'>More Filters</Button>
          </Col>
          <Col xs="auto">
            <Button type="submit" className='buttt'>Find</Button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default Headsearch

