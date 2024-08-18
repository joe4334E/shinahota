import React, {useState} from "react"
import Header from '../Alcaldia/components/Header'
//import Footer from '../patentes/components_patentes/Footer'

// Uso de la carpeta pages-section 
import Contact from './layouts/Contact'
import Hero from './layouts/Hero'
import Questions from './layouts/Questions'
import About from './layouts/About'
function Patentes_Page(){
  return(
    <>
      <main>
        <Header/>
        <Hero/>
        <About/>
        <Questions/>
        <Contact/>
      </main>
    </>
    )
}

export default Patentes_Page
