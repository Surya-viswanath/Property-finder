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
          <Form.Select aria-label="Default select example">
      <option value="1">Buy</option>
      <option value="2">Rent</option>
      <option value="3">Commercial rent</option>
      <option value="4">Commercial buy</option>
    </Form.Select>
          </Col>
          <Col xs="auto">
          <Form.Select aria-label="Default select example">
      <option value="1">Property type</option>
      <option value="2">Apartment</option>
      <option value="3">Villa</option>
      <option value="4">Townhouse</option>
      <option value="5">Penthouse</option>
      <option value="6">Compound</option>
      <option value="7">Duplex</option>
    </Form.Select>
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

