import React, { useState } from 'react'
import {Switch, BrowserRouter, Route, Routes } from 'react-router-dom'
import Menus from './components/Menus'
import Banner from './components/Banner'
import Signup from './components/Signup'

import Detail from './components/Detail'


import Propertyadding from './components/Propertyadding'
import Buy from './components/Buy'
import Rent from './components/Rent'
import Commercial from './components/Commercial'
import Agent from './components/Agent'


import Agentopen from './components/Agentopen'
import HomeCard from './Card/HomeCard'
import Signupp from './components/Signupp'
import Agentdata from './Card/Agentdata'
import GetoneAgentpro from './components/GetoneAgentpro'
import Findagent from './components/Findagent'
import Wishlist from './components/Wishlist'

import Product from './Wish/Product'
import Wish from './Wish/Wish'
import Editproduct from './components/Editproduct'
import Search from './components/Search'
import Bannersearch from './components/Bannersearch'


function Router() {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    const newItem = { id: product.id, name: product.name };
    setWishlist([...wishlist, newItem]);
  };
  const [loggedInUser, setLoggedInUser] = useState(null);
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<><Menus/>  <Api/></>}></Route> */}
        <Route path='/a' element={<><Menus/> <Search/></>}></Route>
        <Route path='/aa' element={<><Menus/> <Bannersearch/></>}></Route>
        <Route path='/' element={<><Menus/> <Banner/> <HomeCard/></>}></Route>
        <Route path='/sign' element={<><Menus/> <Signup/></>}></Route>
        
        {/* <Route path='/open/:pemail' element={<><Menus/> <Agentopen/> <Demo/></>}></Route> */}
        <Route path='/open/:pemail' element={<><Menus/> <Agentopen/></>}></Route>
        <Route path='/adding' element={<><Menus/> <Propertyadding/></>}></Route>
        <Route path='/detail/:_id/:email' element={<><Menus/> <Detail/></>}></Route>
        <Route path='/buy/:sell' element={<><Menus/> <Buy/></>}></Route>
        <Route path='/rent/:sell1' element={<><Menus/> <Rent/></>}></Route>
        <Route path='/commercial/:sell2' element={<><Menus/> <Commercial/></>}></Route>
        {/* <Route path='/agent/:email' element={<><Menus/> <Agent/></>}></Route> */}
        <Route path='/agent/:email' element={<><Menus/> <Agentdata/></>}></Route>
        <Route path='/getone/:email' element={<><Menus/> <GetoneAgentpro/></>}></Route>
        <Route path='/findagent' element={<><Menus/> <Findagent/></>}></Route>
        <Route path='/1/:pemail' element={<><Agentopen/></>}></Route>
        <Route path='/2' element={<><Signupp/></>}></Route>
        <Route path='/3' element={<Wishlist/>}></Route>
        {/* <Route path="/wishlist" element={<Wish wishlist={wishlist} />}></Route>
        <Route path="/w" element={<Product addToWishlist={addToWishlist} />}> </Route> */}
       <Route path="/ha" element={<Editproduct/>}></Route> 
        {/* <Route path='/open/:pname/:pemail' element={<><Menus/>,<Openpage/>,<Demo/></>}></Route> */}

       
        
      
        {/* <Route path="/h" element={loggedInUser ? <Demo loggedInUser={loggedInUser} /> : <Menus setLoggedInUser={setLoggedInUser} />} />
        <Route path="/product-form" element={<Addpro loggedInUser={loggedInUser} />} />
        <Route path="/product-list" element={<Demo loggedInUser={loggedInUser} />} /> */}
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default Router
