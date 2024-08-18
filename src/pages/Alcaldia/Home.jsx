import React, {useState} from "react"
import Header from './components/Header'
import Footer from './components/Footer'

// Home Layputs 
import Home_Layout from './layouts/Home_Layout'
//Home page component

function Home(){
  return(
    <>
      <main>
        <Header/>
        <Home_Layout/>
        <Footer/>
      </main>
    </>
  )
}

export default Home
