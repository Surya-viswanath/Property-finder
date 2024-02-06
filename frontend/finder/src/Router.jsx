import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menus from './components/Menus'
import Banner from './components/Banner'
import Signup from './components/Signup'
import Openpage from './components/Openpage'
import Addpro from './components/Addpro'
import Agentcollect from './components/Agentcollect'
import Detail from './components/Detail'

function Router() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Menus/>,<Banner/></>}></Route>
        <Route path='/sign' element={<><Menus/>,<Signup/></>}></Route>
        
        <Route path='/open/:pname/:pemail' element={<><Menus/>,<Openpage/>,<Agentcollect/></>}></Route>
        <Route path='/adding' element={<><Menus/>,<Addpro/></>}></Route>
        <Route path='/detail' element={<><Menus/>,<Detail/></>}></Route>

        {/* <Route path='/login' element={<><Login2/></>}></Route>
        <Route path='/signup' element={<><Signup/></>}></Route>
        <Route path='/addrestaurant' element={<><AddRestaurant/></>}></Route>
        <Route path='/addsignup' element={<><Addsignup/></>}></Route>
        <Route path='/addlogin' element={<><Addlogin/></>}></Route> */}
        {/* <Route path='/cart' element={<><CrudData/></>}></Route> */}
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default Router
