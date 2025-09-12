import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './components/NavBar'
import Header from './components/Header'
import ServicesGrid from "./components/ServicesGrid"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='paragDiv'>
      <p className='paragHead'>Имеются противопоказания, необходимо проконсультироваться со специалистом 18+</p>
    </div>
    <NavBar />
    <Header />
    <ServicesGrid />
    
  </StrictMode>,
)
