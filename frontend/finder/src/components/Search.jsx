import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Search() {
//     const [properties, setProperties] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:4008/getpro');
//         setProperties(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };


// const filteredProperties = properties.filter(property => {
//     const propertytype = property.type|| ''; // If property.name is undefined or null, set it to an empty string
//     return propertytype.toLowerCase().includes(searchTerm.toLowerCase());
//   });

// const [properties, setProperties] = useState([]);
//   const [filteredProperties, setFilteredProperties] = useState([]);
//   const [placeFilter, setPlaceFilter] = useState('');

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:4008/getpro');
//       setProperties(response.data); // Assuming the API returns an array of properties
//       setFilteredProperties(response.data); // Initialize filtered properties with all properties
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handlePlaceFilterChange = (e) => {
//     setPlaceFilter(e.target.value);
//   };

//   const filterPropertiesByPlace = () => {
//     if (!placeFilter) {
//       setFilteredProperties(properties); // If no filter, show all properties
//     } else {
//       const filtered = properties.filter(property =>
//         // Assuming each property object has a 'location' property
//         property.location.toLowerCase().includes(placeFilter.toLowerCase())
//       );
//       setFilteredProperties(filtered);
//     }
//   };

//   useEffect(() => {
//     filterPropertiesByPlace();
//   }, [placeFilter]);

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
    <div>
      {/* <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredProperties.map(property => (
          <li key={property.id}>{property.name}</li>
        ))}
      </ul> */}

{/* <input
        type="text"
        placeholder="Enter place to filter by"
        value={placeFilter}
        onChange={handlePlaceFilterChange}
      />
      <ul>
        {filteredProperties.map(property => (
          <li key={property.id}>{property.name}</li>
          // Replace property.name with whatever property information you want to display
        ))}
      </ul> */}

<form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter place to filter by"
          value={placeFilter}
          onChange={handlePlaceFilterChange}
        />
        <button type="submit">Filter</button>
      </form>
      <ul>
        {filteredProperties.map(property => (
          <li key={property.id}>{property.
            bedrooms
            }</li>
          // Replace property.name with whatever property information you want to display
        ))}
      </ul>
    </div>
  )
}

export default Search
