/**
 * @component   : Home_Layout
 * @author      : ale (ale@ale)
 * @created     : domingo ago 18, 2024 17:18:31 -04
 * @description : Home_Layout
 */
import React from 'react';

const Homelayout = () => {
  return (
    <div className="font-sans bg-white">
      {/* Sección de Video */}
      <section className="relative">
        <div className="relative overflow-hidden bg-blue-900">
          <video className="w-full h-auto" autoPlay loop muted>
            <source src="https://via.placeholder.com/1280x72a0" type="video/mp4" />
            Tu navegador no soporta el formato de video.
          </video>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white bg-black bg-opacity-50">
            <h1 className="mb-2 text-3xl font-bold md:text-5xl">MUNICIPIO DE SHINAHOTA</h1>
            <p className="mb-4 text-lg">Corazón de Cochabamba</p>
            <a href="/gobierno-municipal" className="px-6 py-2 font-bold text-white bg-green-800 rounded hover:bg-green-700 transition">
              Ir a Gobierno Municipal
            </a>
          </div>
        </div>
      </section>

      {/* Banner Principal Dinámico */}
      <header className="relative bg-green-600 h-72">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex items-center justify-center h-full p-4 text-center text-white">
          <div className="w-full max-w-4xl mx-auto">
            <h1 className="mb-4 text-3xl font-bold md:text-5xl">Bienvenidos al Gobierno Municipal de Cochabamba</h1>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/gobierno-municipal" className="px-4 py-2 font-bold text-white bg-green-800 rounded hover:bg-green-700 transition">
                Gobierno Municipal
              </a>
              <a href="/gobierno-linea/patentes" className="px-4 py-2 font-bold text-white bg-green-800 rounded hover:bg-green-700 transition">
                Servicios en Línea
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="container p-4 mx-auto space-y-8">
        {/* Sección Hero con Slider de Imágenes */}
        <section className="relative text-white bg-blue-900">
          <div className="relative overflow-hidden">
            <div className="flex overflow-x-auto">
              <div className="flex-none w-full md:w-1/3">
                <img src="https://anteriorportal.erbol.com.bo/sites/default/files/img_noticias/centro_de_salud.jpg" alt="Imagen 1" className="object-cover w-full h-auto" />
              </div>
              <div className="flex-none w-full md:w-1/3">
                <img src="http://www.amdeco.org.bo/enlacemunicipios/allMunicipios/data1/images/shinaota3.jpg" alt="Imagen 2" className="object-cover w-full h-auto" />
              </div>
              <div className="flex-none w-full md:w-1/3">
                <img src="" alt="Imagen 3" className="object-cover w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Shinahota Section */}
        <section className="p-4 rounded-lg shadow-lg bg-green-50 md:p-8">
          <h2 className="mb-4 text-3xl font-semibold text-green-700">Sobre Shinahota</h2>
          <div className="flex flex-col items-center md:flex-row gap-6">
            <img src="https://lh5.googleusercontent.com/p/AF1QipOnUM2Caf9PlbJ4jUvqVye9KTu4MRFWM8qKck-J=w408-h306-k-no" alt="Shinahota" className="w-full rounded-lg shadow-lg md:w-1/2" />
            <div className="text-gray-700 md:w-1/2">
              <p className="mb-4">
                Shinahota es la Segunda Sección Municipal de la Provincia Tiraque, perteneciente a la Región del Trópico Cochabambino. Fundada el 4 de julio de 2009, es el municipio más joven del departamento de Cochabamba. Reconocido como la cuna de la revolución cocalera y sede principal de la Coordinadora de las 6 Federaciones del Trópico.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-2">
                    <li><strong>Municipio:</strong> Shinahota</li>
                    <li><strong>Características:</strong> Cuna de la Revolución</li>
                    <li><strong>Fundación:</strong> 4 de julio 2009</li>
                    <li><strong>Aniversario:</strong> 4 de julio</li>
                    <li><strong>Clima:</strong> Tropical húmedo</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li><strong>Distancia:</strong> 180 km de Cochabamba</li>
                    <li><strong>Ubicación:</strong> Av. Oquendo y Av. 9 de abril</li>
                    <li><strong>Extensión:</strong> 737,81 km²</li>
                    <li><strong>Feria Semanal:</strong> No tiene</li>
                    <li><strong>Ferias:</strong> Expofrut (1ª semana de julio)</li>
                    <li><strong>Festividad:</strong> Virgen de Urkupiña (23 al 25 de agosto)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Galería de Imágenes Distorsionadas */}
          <section className="mt-8">
            <h3 className="mb-4 text-2xl font-semibold text-green-700">Galería de Imágenes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Imagen 1 */}
              <div className="relative overflow-hidden rounded-lg">
                <img src="https://via.placeholder.com/400x300" alt="Imagen 1" className="object-cover w-full h-full transform scale-110 hover:scale-125 transition-transform duration-500" />
                <div className="absolute inset-0 bg-green-900 opacity-30"></div>
              </div>
              {/* Imagen 2 */}
              <div className="relative overflow-hidden rounded-lg">
                <img src="https://via.placeholder.com/400x300" alt="Imagen 2" className="object-cover w-full h-full transform rotate-2 hover:rotate-6 transition-transform duration-500" />
                <div className="absolute inset-0 bg-green-900 opacity-30"></div>
              </div>
              {/* Imagen 3 */}
              <div className="relative overflow-hidden rounded-lg">
                <img src="https://via.placeholder.com/400x300" alt="Imagen 3" className="object-cover w-full h-full transform -rotate-3 hover:rotate-3 transition-transform duration-500" />
                <div className="absolute inset-0 bg-green-900 opacity-30"></div>
              </div>
              {/* Imagen 4 */}
              <div className="relative overflow-hidden rounded-lg">
                <img src="https://via.placeholder.com/400x300" alt="Imagen 4" className="object-cover w-full h-full transform skew-x-6 hover:skew-x-0 transition-transform duration-500" />
                <div className="absolute inset-0 bg-green-900 opacity-30"></div>
              </div>
              {/* Imagen 5 */}
              <div className="relative overflow-hidden rounded-lg">
                <img src="https://via.placeholder.com/400x300" alt="Imagen 5" className="object-cover w-full h-full transform skew-y-6 hover:skew-y-0 transition-transform duration-500" />
                <div className="absolute inset-0 bg-green-900 opacity-30"></div>
              </div>
            </div>
          </section>
        </section>

        {/* Atractivos Turísticos Section con Tarjetas Interactivas */}
        <section className="p-4 rounded-lg shadow-lg bg-green-50 md:p-8">
          <h2 className="mb-4 text-3xl font-semibold text-green-700">Atractivos Turísticos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Caverna del Repechón */}
            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img src="https://via.placeholder.com/400x300" alt="Caverna del Repechón" className="object-cover w-full h-48 mb-4 rounded-t-lg" />
              <h3 className="mb-2 text-xl font-semibold text-green-800">Caverna del Repechón</h3>
              <p className="text-gray-700">Refugio de vida silvestre donde se pueden observar guacharos, un pájaro conocido como pájaro de aceite. Ofrece turismo recreativo, científico, fotográfico y observación de aves.</p>
            </div>
            {/* Caimán Poza */}
            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img src="https://via.placeholder.com/400x300" alt="Caimán Poza" className="object-cover w-full h-48 mb-4 rounded-t-lg" />
              <h3 className="mb-2 text-xl font-semibold text-green-800">Caimán Poza</h3>
              <p className="text-gray-700">Hermosa laguna hogar de lagartos. Es un santuario de reptiles rodeado de vegetación, ideal para la observación de estos animales.</p>
            </div>
            {/* Parlamento de Loros */}
            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img src="https://via.placeholder.com/400x300" alt="Parlamento de Loros" className="object-cover w-full h-48 mb-4 rounded-t-lg" />
              <h3 className="mb-2 text-xl font-semibold text-green-800">Parlamento de Loros</h3>
              <p className="text-gray-700">Lugar donde se reúnen loros de diversas variedades para alimentarse de greda a las 6:00 AM. Una experiencia única para los amantes de las aves.</p>
            </div>
            {/* Camino del Inca */}
            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img src="https://via.placeholder.com/400x300" alt="Camino del Inca" className="object-cover w-full h-48 mb-4 rounded-t-lg" />
              <h3 className="mb-2 text-xl font-semibold text-green-800">Camino del Inca</h3>
              <p className="text-gray-700">Ruta histórica utilizada por los antepasados hacia el trópico, que comienza en Pocona y atraviesa el Parque Nacional Carrasco hasta la comunidad Aroma.</p>
            </div>
          </div>
        </section>

        {/* Noticias y Actualizaciones */}
        <section id="noticias" className="p-4 rounded-lg shadow-lg bg-green-50 md:p-8">
          <h2 className="mb-4 text-2xl font-semibold text-green-700">Últimas Noticias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Tarjeta de Noticias */}
            <div className="overflow-hidden bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img src="https://via.placeholder.com/300x200" alt="Noticia" className="object-cover w-full h-48" />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-green-800">Título de la Noticia</h3>
                <p className="text-gray-700">Resumen breve de la noticia destacada para captar el interés del usuario...</p>
              </div>
            </div>
            {/* Repite para más noticias */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Homelayout;

