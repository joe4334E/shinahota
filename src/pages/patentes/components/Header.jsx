import React, {useState} from "react"

function Header(){
  return(
    <>
      <header class="bg-white py-4 sticky top-0 z-10">
  <div class="container mx-auto">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <a href="http://css.gob.pa" class="text-black h5">
          <img
            src="https://i.imgur.com/UbXhg6S.jpeg"
            alt="CSS Logo"
            class="w-[160px]"
          />
        </a>
        <a href="index.html" class="text-black text-lg font-semibold"
          >Alcladia de Shinahota</a
        >
      </div>

      <nav class="hidden md:block">
        <ul class="flex space-x-8">
          <li>
            <a
              href="#home-section"
              class="nav-link text-gray-700 hover:text-black"
              >Inicio</a
            >
          </li>
          <li>
            <a
              href="#work-section"
              class="nav-link text-gray-700 hover:text-black"
              >Sobre nosotros</a
            >
          </li>
          <li>
            <a
              href="#services-section"
              class="nav-link text-gray-700 hover:text-black"
              >Portafolio</a
            >
          </li>
          <li>
            <a
              href="#preguntas-section"
              class="nav-link text-gray-700 hover:text-black"
              >Preguntas frecuentes</a
            >
          </li>
          <li>
            <a
              href="#contact-section"
              class="nav-link text-gray-700 hover:text-black"
              >Contáctanos</a
            >
          </li>
        </ul>
      </nav>

      <div class="block md:hidden">
        <button class="text-black focus:outline-none">
          <span class="icon-menu h3">☰</span>
        </button>
      </div>
    </div>
  </div>
</header>

    </>
    )
}

export default Header
