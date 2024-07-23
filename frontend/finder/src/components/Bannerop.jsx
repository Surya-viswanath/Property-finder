import React, { useEffect, useState } from 'react'
import './Banner.css'
import { Col, Container, Row } from 'react-bootstrap'
import banner from './Bannerhome.jpg'
import axios from 'axios';
import { IoIosSearch } from "react-icons/io";
import Searchinput from '../Search/Searchinput';
import Propertilist from '../Search/Propertilist';
import Propertylist2 from '../Search/Propertylist2';
import { useNavigate, useParams } from 'react-router-dom';
import Searching from '../Search/Searching';

function Bannerop() {
const navigate = useNavigate();
const {id}=useParams();
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [placeFilter, setPlaceFilter] = useState('');
const userid= id;
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://property-finder-backend.onrender.com/getpro');
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
   <>
   
    <div className='banner'>
      <Row >
        <h1 className='find'>Find your Dream Home here</h1>
        <Searchinput value={placeFilter} onChange={handlePlaceFilterChange} onSubmit={handleSubmit} />
        
      </Row>
    </div>
     <Propertylist2 properties={filteredProperties}  userid={userid}/>
     </>
  )
}

export default Bannerop
