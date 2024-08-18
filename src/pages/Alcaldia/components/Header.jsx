import React, {useState} from "react"

function Header(){
  return(
    <>
      <header className="sticky top-0 z-10 py-4 bg-white">
  <div className="container mx-auto">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <a href="http://css.gob.pa" className="text-black h5">
          <img
            src="https://i.imgur.com/UbXhg6S.jpeg"
            alt="CSS Logo"
            className="w-[160px]"
          />
        </a>
        <a href="index.html" className="text-lg font-semibold text-black"
          >Alcaldia de Shinahota</a
        >
      </div>

      <nav className="hidden md:block">
        <ul className="flex space-x-8">
          <li>
            <a
              href="#home-section"
              className="text-gray-700 nav-link hover:text-black"
              >Inicio</a
            >
          </li>
          <li>
            <a
              href="#work-section"
              className="text-gray-700 nav-link hover:text-black"
              >Gobierno Municipal</a
            >
          </li>
          <li>
            <a
              href="#services-section"
              className="text-gray-700 nav-link hover:text-black"
              >Gobierno en Linea</a
            >
          </li>
          <li>
            <a
              href="#preguntas-section"
              className="text-gray-700 nav-link hover:text-black"
              >Gaceta</a
            >
          </li>
          <li>
            <a
              href="#contact-section"
              className="text-gray-700 nav-link hover:text-black"
              >Contáctanos</a
            >
          </li>
        </ul>
      </nav>

      <div className="block md:hidden">
        <button className="text-black focus:outline-none">
          <span className="icon-menu h3">☰</span>
        </button>
      </div>
    </div>
  </div>
</header>

    </>
    )
}

export default Header
