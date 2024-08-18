import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import appLogo from '/favicon.svg'
//import PWABadge from './PWABadge.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Importar los estilos css 
import './App.css'
//Importa los componentes de las paginas que se usaran en las rutas
import Home from './pages/Alcaldia/Home'
import Gob_Municipal from './pages/Alcaldia/Gob_Municipal'
import Gob_Electronico from './pages/Alcaldia/Gob_Electronico'
import Gaceta from './pages/Alcaldia/Gaceta'
import Contact from './pages/Alcaldia/Contact'
import NoPage from './pages/Alcaldia/NoPage' //Importa un componente para manejar rutas no encontradas 
import Patentes_Municipales from './pages/patentes/Patentes_Municipales' 
import ResendotpCode from './auth/ResendotpCode'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        {/*Uso de Stricted Routes patra las rutas del sitio web*/}

        <Route index element={<Home />}/>
        <Route path ="/home" element ={<Home/>}/>
        <Route path ="/gobierno-municipal" element ={<Gob_Municipal/>}/>
        <Route path ="/gobierno-linea" element ={<Gob_Electronico/>}/>
        <Route path ="/gaceta" element ={<Gaceta/>}/>
        <Route path ="/contactos" element ={<Contact/>}/>
        <Route path ="*" element ={<NoPage/>}/>
        {/* Rutas Proyegidas en el proyecto */}
        <Route path ="signup/otp-code" element ={<ResendotpCode/>}/>
        <Route path ="gobierno-linea/patentes" element ={<Patentes_Municipales/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
