import React, { useEffect, useState } from 'react'
import './Banner.css'
import { Col, Container, Row } from 'react-bootstrap'
import banner from './Bannerhome.jpg'
import axios from 'axios';
import { IoIosSearch } from "react-icons/io";
function Banner() {

  const [properties, setProperties] = useState([]);
const [filteredProperties, setFilteredProperties] = useState([]);
const [placeFilter, setPlaceFilter] = useState('');

useEffect(() => {
  fetchData();
}, []);

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:4008/getpro');
    setProperties(response.data); // Assuming the API returns an array of properties
    setFilteredProperties(response.data); // Initialize filtered properties with all properties
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const handlePlaceFilterChange = (e) => {
  setPlaceFilter(e.target.value);
};

const filterPropertiesByPlace = () => {
  if (!placeFilter) {
    setFilteredProperties(properties); // If no filter, show all properties
  } else {
    const filtered = properties.filter(property =>
      // Assuming each property object has a 'location' property
      property.sell.toLowerCase().includes(placeFilter.toLowerCase())
    );
    setFilteredProperties(filtered);
  }
};

const handleSubmit = (e) => {
  e.preventDefault();
  filterPropertiesByPlace();
};
  return (
   
    // <div className="image-banner">
    //   <Container fluid  className='banner'>
        
    //   </Container>
    // </div>
    <div className='banner'>
      <Row>
        <Col style={{paddingTop:'8%'}}><h1 className='find'>Find your Dream Home here</h1></Col>
        <Col></Col>
      </Row>
      {/* <div style={{marginLeft:'4%'}}>
      <Row className='search'>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          placeholder="Enter place to filter by"
          value={placeFilter}
          onChange={handlePlaceFilterChange}
          style={{border:'none',backgroundColor:'transparent'}}
        />
        <button type="submit" style={{border:'none',backgroundColor:'transparent'}}><IoIosSearch /></button>
      </form>
      </Row>
      </div> */}
    </div>
  )
}

export default Banner
