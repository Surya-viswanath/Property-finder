import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Wish from './Wish';

function Product() {
    const [first, setFirst] = useState([])

    useEffect(() => {
        const handleItems = async () => {
          try {
            const response = await axios.get('http://localhost:4008/getpro');
            setFirst(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        handleItems();
      }, []);
  return (
    <div>
      {first.map((data)=>
      <Wish data={data}/>
      )}
    </div>
  )
}

export default Product
