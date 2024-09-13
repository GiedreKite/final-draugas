import { useState } from 'react'
import './App.css'

import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom'

import { Home } from './pages/Home.jsx'
import {Presentation} from './components/presentation/Presentation.jsx'
import { About } from './pages/About.jsx'

import { UserInfo } from './pages/users/UserInfo.jsx'
import { ShoppingChart } from './pages/users/ShoppingChart.jsx'
import { ServicesList } from './pages/users/servicesList.jsx'
import { Users } from './pages/admin/Users.jsx'
import { List } from './pages/admin/List.jsx'
import { CreateList } from './pages/admin/CreateList.jsx'
import { Login } from './pages/Login.jsx'
import { Regin } from './pages/Regin.jsx'
import { Logo } from './components/header/Logo.jsx'
import { Header } from './components/header/Header.jsx'
import { AdminHeader } from './components/header/AdminHeader.jsx'


function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] =useState(false)

    // useEffect(()=>{
    //     document.getElementById('body').style.backgroundImage =  `url("http://localhost:5174/background.avif")`;}, []);
 
  return (
    <>
    <AdminHeader />
  {/* <{{user}===true ? (true ? {Header}: {Header} ) : {AdminHeader}} /> */}
    <Routes>
      <Route className="appDraugas" path="/draugas">
      <Route className="presentation" path="presentation" element={<Presentation/>}></Route> 
      <Route className="about" path="about" element={<About/>}></Route>
      <Route className="home" path="home" element={<Home/>}></Route>
      <Route className="regin" path="regin" element={<Regin/>}></Route>
      <Route className="login" path="login" element={<Login/>}></Route>
      <Route className="userInfo" path="userInfo" element={<UserInfo/>}></Route>
      <Route className="shoppingChart" path="shoppingChart" element={<ShoppingChart/>}></Route>
      <Route className="servicesList" path="servicesList" element={<ServicesList/>}></Route>
      <Route className="users" path="users" element={<Users/>}></Route>
      <Route className="list" path="list" element={<List/>}></Route>
      <Route className="createList" path="createList" element={<CreateList/>}></Route>
      
      </Route>
    </Routes>



    </>
  )
}

export default App
