import { useState } from 'react'
import './App.css'
import { FirstPage } from './components/firstpage/FirstPage.jsx'
import { SecondPage } from './components/secondPage/SecondPage.jsx'
import { Header } from './components/header/Header.jsx'
import { ThirdPage } from './components/thirdPage/ThirdPage.jsx'
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom'
import { MainPage } from './components/mainPage/MainPage.jsx'
import { ForthPage } from './components/checkOut/ForthPage.jsx'
import { Home } from './pages/Home.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Header />
    <Routes>
      <Route className="appDraugas" path="/draugas">
      <Route className="home" path="home" element={<Home/>}></Route>
        <Route className="mainPage" path="main" element={<MainPage/>}></Route>
        <Route className="firstPage" path="first" element={<FirstPage/>}></Route>
        <Route className="secondPage" path="second" element={<SecondPage/>}></Route>
        <Route className="thirdPage" path="third" element={<ThirdPage/>}></Route>
        <Route className="forthPage" path="forth" element={<ForthPage/>}></Route>
      </Route>
    </Routes>
  
    

    </>
  )
}

export default App
