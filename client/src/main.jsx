import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/bootstrap.min.css'
import App from './App.jsx'
import './index.css'
import {
  BrowserRouter as Router, Routes, Route,
  BrowserRouter
} from 'react-router-dom'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>,  
)
