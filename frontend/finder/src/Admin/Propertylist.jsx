import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import './Admin.css'

function Propertylist() {
    
 const [Property, setProperty] = useState([])
 
    useEffect(() => {
        const handleItems = async () => {
          try {
            const response = await axios.get('http://localhost:4008/getpro');
            setProperty(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        handleItems();
      }, []);
    const handleDelete = async (id) => {
        try {
          await axios.delete(`http://localhost:4008/deleteList/${id}`);
          // Update the state after successful deletion
          setProperty(Property.filter(list => list._id !== id));
        } catch (error) {
          console.error('Error deleting list:', error);
        }
      };
  return (
    <div>
   
         <div className="main-head section-p1">
         <h3 className='head-restaurants'>Agent List</h3>
    <table width="100%" className='table-border '>
   
<thead style={{padding:'20px'}}>
    <tr className='table'>
       <td className='table-head'>Type</td>
        <td className='table-head'>Image</td>
        <td className='table-head'>Address</td>
        <td className='table-head'>Price</td>
        <td className='table-head'>Property size</td>
        <td className='table-head'>Email</td>
        <td className='table-head'>Remove</td>
        
    </tr>
</thead>
<tbody style={{padding:'20px'}}>
{Property.map(display =>(
    <tr className='table'>
        <td>{display.sell}</td>
        <td><img src= {display.image} alt="" width={'100px'} height={'100px'}  style={{marginBottom:'10px',maxHeight:'150px'}}/></td>
        <td>{display.address}</td>
        <td>{display.regularPrice}</td>
        <td>{display.propertysize}</td>
        <td>{display.email}</td>
        <td><MdDelete className='delete-icon' onClick={() => handleDelete(display._id)}/> </td>
       
        
    </tr>
    
    ))}
</tbody>
    </table>
    <div className='normal-btn'>
    
    </div>
    </div>
    </div>
  )
}

export default Propertylist