import { useState } from 'react'
import './App.css'

import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom'

import { Home } from './pages/Home.jsx'
import Presentation from './components/presentation/Presentation.jsx'
import { About } from './pages/About.jsx'
import { Registion } from './pages/Registion.jsx'
import { UserInfo } from './pages/users/UserInfo.jsx'
import { ShoppingCart } from './pages/users/ShoppingCart.jsx'
import { ServicesList } from './pages/users/servicesList.jsx'
import { Users } from './pages/admin/Users.jsx'
import { List } from './pages/admin/List.jsx'
import { CreateList } from './pages/admin/CreateList.jsx'


function App() {
  const [count, setCount] = useState(0)

    // useEffect(()=>{
    //     document.getElementById('body').style.backgroundImage =  `url("http://localhost:5174/background.avif")`;}, []);
 
  return (
    <>
  
    <Routes>
      <Route className="appDraugas" path="/draugas">
      <Route className="draugas" path="draugas" element={<Presentation/>}></Route> //reikia sutvarkyti, kad atidarytu pirma ir rodytu klipa, bakstelejus persijungtu i about
      <Route className="about" path="about" element={<About/>}></Route>
      <Route className="home" path="home" element={<Home/>}></Route>
      <Route className="registion" path="registion" element={<Registion/>}></Route>
      <Route className="login" path="login" element={<Login/>}></Route>
      <Route className="userInfo" path="userInfo" element={<UserInfo/>}></Route>
      <Route className="shoppingChart" path="shoppingChart" element={<ShoppingCart/>}></Route>
      <Route className="servisesList" path="servisesList" element={<ServicesList/>}></Route>
      <Route className="users" path="users" element={<Users/>}></Route>
      <Route className="list" path="list" element={<List/>}></Route>
      <Route className="createList" path="createList" element={<CreateList/>}></Route>
      
      </Route>
    </Routes>



    </>
  )
}

export default App
