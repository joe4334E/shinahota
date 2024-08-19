import React, {useState} from "react"
import Header from './components/Header'
import Footer from './components/Footer'
import ContactLayout from './layouts/ContactLayout'
function Contact(){
  return(
    <>
      <main>
        <Header/>
        <ContactLayout/>
        <Footer/>
      </main>
    </>
    )
}

export default Contact
