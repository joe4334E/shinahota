import React from 'react';
import Municipiomp4 from '../images/alcaldia/video_municipio.mp4';
import image3 from '../images/alcaldia/alcaldia.png'
const Homelayout = () => {
  return (
    <div className="font-sans bg-white">
      {/* Sección de la Alcaldía */}
      <section className="relative">
        <div className="relative overflow-hidden bg-blue-900">
          <video 
            autoPlay 
            loop 
            muted 
            className="w-full h-auto object-cover" 
          >
            <source src={Municipiomp4} type="video/mp4" />
            Tu navegador no soporta la etiqueta de video.
          </video>
          
        </div>
      </section>

      {/* Contenido Principal */}
      <main className="container p-4 mx-auto space-y-10">
        {/* Sección Hero con Slider de Imágenes */}
        <section className="relative bg-blue-900 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-white text-center py-4">Imágenes de Shinahota</h2>
          <div className="flex overflow-x-auto">
            {[
              "https://anteriorportal.erbol.com.bo/sites/default/files/img_noticias/centro_de_salud.jpg",
              "http://www.amdeco.org.bo/enlacemunicipios/allMunicipios/data1/images/shinaota3.jpg",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb0LJ6RWg6WgaoHVVmacjzJYfmm-sLzW8I_Q&s",
            ].map((src, index) => (
              <div key={index} className="flex-none w-full md:w-1/2 lg:w-1/3 p-2">
                <img src={src} alt={`Imagen ${index + 1}`} className="object-cover w-full h-auto rounded-lg shadow-md" />
              </div>
            ))}
          </div>
        </section>

        {/* Sección Sobre Shinahota */}
        <section className="p-6 rounded-lg shadow-lg bg-green-50 md:p-10">
          <h2 className="mb-6 text-3xl font-bold text-green-700 text-center">Sobre Shinahota</h2>
          <div className="flex flex-col items-center md:flex-row gap-8">
            <img src="https://lh5.googleusercontent.com/p/AF1QipOnUM2Caf9PlbJ4jUvqVye9KTu4MRFWM8qKck-J=w408-h306-k-no" alt="Shinahota" className="w-full rounded-lg shadow-lg md:w-1/2" />
            <div className="text-gray-800 md:w-1/2">
              <p className="mb-4 text-lg">
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
        </section>
      </main>
    </div>
  );
};

export default Homelayout;
