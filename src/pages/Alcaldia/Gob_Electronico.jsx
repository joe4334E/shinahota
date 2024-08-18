import React, {useState} from "react"
import Header from './components/Header'
import Footer from './components/Footer'
function Gob_Electronico(){
  return(
    <>
      <main>
        <Header/>
         <button
      onClick={() => navigate('/gobierno-linea/patentes')}
      className="px-4 py-2 font-bold text-white bg-teal-500 rounded-lg shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
    >
      Ir a Patentes
    </button>
        <Footer/>
      </main>
    </>
    )
}

export default Gob_Electronico
