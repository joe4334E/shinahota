import React, {useState} from "react"
import Header from './components/Header'
import Footer from './components/Footer'
import GobLineaLayout from './layouts/GobLineaLayout'
function Gob_Electronico(){
  return(
    <>
      <main>
        <Header/>
        <GobLineaLayout/>
        <Footer/>
      </main>
    </>
    )
}

export default Gob_Electronico
