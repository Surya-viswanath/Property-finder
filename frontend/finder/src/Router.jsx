import React, { useState } from 'react'
import {Switch, BrowserRouter, Route, Routes } from 'react-router-dom'
import Menus from './components/Menus'
import Banner from './components/Banner'
import Signup from './components/Signup'
import Openpage from './components/Openpage'
import Detail from './components/Detail'
import Demo from './components/Demo'
import Homecard from './components/Homecard'

import Propertyadding from './components/Propertyadding'
import Buy from './components/Buy'
import Rent from './components/Rent'
import Commercial from './components/Commercial'
import Agent from './components/Agent'
import Card1 from './Card/Card1'
import Api from './Card/Api'
import Agentapi from './Card/Agentapi'
import Agentopen from './components/Agentopen'

function Router() {

  const [loggedInUser, setLoggedInUser] = useState(null);
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Menus/>,<Banner/>,<Api/></>}></Route>
        <Route path='/sign' element={<><Menus/>,<Signup/></>}></Route>
        
        <Route path='/open/:pemail' element={<><Menus/>,<Agentopen/>,<Demo/></>}></Route>
        <Route path='/adding' element={<><Menus/>,<Propertyadding/></>}></Route>
        <Route path='/detail/:_id/:email' element={<><Menus/>,<Detail/></>}></Route>
        <Route path='/buy/:sell' element={<><Menus/>,<Buy/></>}></Route>
        <Route path='/rent/:sell1' element={<><Menus/>,<Rent/></>}></Route>
        <Route path='/commercial/:sell2' element={<><Menus/>,<Commercial/></>}></Route>
        <Route path='/agent/:email' element={<><Menus/>,<Agent/></>}></Route>
        <Route path='/1' element={<><Agentapi/></>}></Route>
       
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
