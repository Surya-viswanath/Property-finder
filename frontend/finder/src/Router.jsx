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
import Usersignup from './User/Usersignup'
import Home2Card from './Card/Home2Card'
import Userlogin from './User/Userlogin'
import Searchhome from './components/Searchhome'
import Search1 from './Search/Search1'
import Bannerop from './components/Bannerop'
import Usermenu from './User/Usermenu'
import Agentmenu from './Agent/Agentmenu'
import Login from './auth/Login'
import Adminsignup from './Admin/Adminsignup'
import Adminmenu from './Admin/Adminmenu'
import Admindash from './Admin/Admindash'
import Agentlist from './Admin/Agentlist'
import Userlist from './Admin/Userlist'
import Propertylist from './Admin/Propertylist'
import WishlistPage from './Wish/WishlistPage'
import Category from './components/Category'
import Searched1 from './Category/Searched1'
import Dashboard from './Dash/Dashboard'
import Register from './auth/Register'
import Main from './Main/Main'
import Buysearch from './components/Buysearch'
import RequestAgent from './Agent/RequestAgent'

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
      <Route path='/Main' element={<><Main/></>}></Route>
      <Route path='/Agentrqst' element={<><Usermenu/><RequestAgent/></>}></Route>
        <Route path='/buys' element={<><Usermenu/><Buysearch/></>}></Route>
        <Route path='/dash' element={<><Dashboard/></>}></Route>
        <Route path='/admin/:id' element={<><Adminmenu/> <Admindash/></>}></Route>
        <Route path='/agentlist' element={<><Adminmenu/> <Agentlist/></>}></Route>
        <Route path='/userlist' element={<><Adminmenu/> <Userlist/></>}></Route>
        <Route path='/propertylist' element={<><Adminmenu/> <Propertylist/></>}></Route>
        <Route path='/a' element={<><Menus/> <Search/></>}></Route>
        <Route path='/aa' element={<><Menus/> <Bannersearch/></>}></Route>
        {/* <Route path='/' element={<><Menus/> <Banner/> <HomeCard/></>}></Route>
        <Route path='/home' element={<><Menus/> <Banner/> <Home2Card/></>}></Route> */}
        <Route path='/' element={<><Menus/><Banner/></>}></Route>
        {/* <Route path='/home/:email' element={<><Menus/> <Bannerop/></>}></Route> */}
        <Route path='/home' element={<><Usermenu/><Bannerop/></>}></Route>
        {/* <Route path='/home' element={<><Main/><Bannerop/></>}></Route> */}
        {/* <Route path='/sign' element={<> <Signup/></>}></Route> */}
        {/* <Route path='/Login' element={<Userlogin/>}></Route> */}
        {/* <Route path='/open/:pemail' element={<><Menus/> <Agentopen/> <Demo/></>}></Route> */}
        <Route path='/open/:pemail' element={<><Agentmenu/><Agentopen/></>}></Route>
        <Route path='/adding' element={<><Menus/> <Propertyadding/></>}></Route>
        <Route path='/detail/:_id/:ids/:email' element={<><Usermenu/> <Detail/></>}></Route>
        <Route path='/buy/:sell' element={<><Menus/> <Buy/></>}></Route>
        <Route path='/rent/:sell1' element={<><Menus/> <Rent/></>}></Route>
        <Route path='/commercial/:sell2' element={<><Menus/> <Commercial/></>}></Route>
        {/* <Route path='/agent/:email' element={<><Menus/> <Agent/></>}></Route> */}
        <Route path='/agent/:email' element={<><Menus/> <Agentdata/></>}></Route>
        <Route path='/getone/:email' element={<><Menus/> <GetoneAgentpro/></>}></Route>
        <Route path='/findagent' element={<><Menus/> <Findagent/></>}></Route>
        <Route path='/1/:pemail' element={<><Agentopen/></>}></Route>
        <Route path='/2' element={<><Register/></>}></Route>
        <Route path='/3' element={<Wishlist/>}></Route>
        
        <Route path='/wishlist/:ids/:id' element={<WishlistPage/>}></Route>
        {/* <Route path="/w" element={<Product addToWishlist={addToWishlist} />}> </Route> */}
       <Route path="/ha" element={<Editproduct/>}></Route> 
        <Route path='/toast' element={<><Menus/>,<Product/></>}></Route>

        <Route path='/search' element={<Search1/>}></Route> 
        <Route path='/Login' element={<Login/>}></Route> 
        <Route path='/adminsignup' element={<Adminsignup/>}></Route> 
        <Route path='/category' element={<Category/>}></Route> 
        <Route path='/categories' element={<Searched1/>}></Route> 
        {/* <Route path="/h" element={loggedInUser ? <Demo loggedInUser={loggedInUser} /> : <Menus setLoggedInUser={setLoggedInUser} />} />
        <Route path="/product-form" element={<Addpro loggedInUser={loggedInUser} />} />
        <Route path="/product-list" element={<Demo loggedInUser={loggedInUser} />} /> */}
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default Router
