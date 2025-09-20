import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './components/NavBar'
import Header from './components/Header'
import ServicesGrid from "./components/ServicesGrid"
import Steps from "./components/Steps"
import InformClinic from "./components/InformClinic"
import Staff from './components/Staff'
import Advantages from './components/Advantages'
import QnAList from './components/QnAList'
import Rewiews from './components/Reviews'
import Footer from './components/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='paragDiv'>
      <p className='paragHead'>Имеются противопоказания, необходимо проконсультироваться со специалистом 18+</p>
    </div>
    <NavBar />
    <Header />
    <h2 className="card-container-h2">Наши услуги</h2>
    <ServicesGrid />
    <Steps />
    <InformClinic />
    <Staff />
    <Advantages />
    <QnAList />
    <Rewiews />
    <Footer />
    
  </StrictMode>,
)
