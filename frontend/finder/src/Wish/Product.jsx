// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import Wish from './Wish';

// function Product() {
//     const [first, setFirst] = useState([])

//     useEffect(() => {
//         const handleItems = async () => {
//           try {
//             const response = await axios.get('https://property-finder-backend.onrender.com/getpro');
//             setFirst(response.data);
//           } catch (error) {
//             console.error('Error fetching data:', error);
//           }
//         };
    
//         handleItems();
//       }, []);
//   return (
//     <div>
//       {first.map((data)=>
//       <Wish data={data}/>
//       )}
//     </div>
//   )
// }

// export default Product

import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Product() {
  const notify = () => toast("Wow so easy!");
  return (
    <div>
       <button onClick={notify}>Notify!</button>
        <ToastContainer />
    </div>
  )
}

export default Product
