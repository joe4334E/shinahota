/**
 * @component   : App
 * @author      : ale (ale@ale)
 * @created     : jueves sep 19, 2024 11:31:33 -04
 * @description : App
 */
import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import appLogo from '/favicon.svg'
//import PWABadge from './PWABadge.jsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// Importar los estilos css 
import './App.css'
//Importa los componentes de las paginas que se usaran en las rutas
import Home from './pages/Alcaldia/Home'
import Gob_Municipal from './pages/Alcaldia/Gob_Municipal'
import Gob_Electronico from './pages/Alcaldia/Gob_Electronico'
import Contact from './pages/Alcaldia/Contact'
import NoPage from './pages/Alcaldia/NoPage' //Importa un componente para manejar rutas no encontradas 
import Turismo from './pages/Alcaldia/Turismo' 
import ResendotpCode from './auth/ResendotpCode'
// Si PatentesMun es necesario para otro uso, asegúrate de importarlo también.

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        {/* Uso de Strict Routes para las rutas del sitio web */}
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gobierno-municipal" element={<Gob_Municipal />} />
        <Route path="/gobierno-linea" element={<Gob_Electronico />} />
        <Route path="/contactos" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
        {/* Rutas protegidas en el proyecto */}
        <Route path="signup/otp-code" element={<ResendotpCode />} />
        {/* Redirigir a un sitio externo */}
        <Route path="gobierno-municipal/turismo" element={<Turismo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

