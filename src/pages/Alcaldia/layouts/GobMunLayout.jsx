/**
 * @component   : GobMunLayout
 * @author      : ale (ale@ale)
 * @created     : sábado ago 17, 2024 13:10:56 -04
 * @description : GobMunLayout
 */
import React from 'react';
//import './GobMunLayout.css'; // Para los estilos personalizados
import alcaldeImg from '../images/alcaldia/luchito.png'
const GobMunLayout = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image and Title */}

      {/*<div className="relative flex items-center justify-center text-white hero-bg h-80">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent"></div>
        <h1 className="relative z-10 text-4xl font-bold drop-shadow-lg">Gobierno Municipal</h1>
      </div>
*/}
      <div className="container p-6 mx-auto">
        {/* Quiénes Somos */}
        <div className="p-6 mb-6 bg-white rounded-lg shadow-lg fade-in hover-shadow">
          <div className="flex flex-col items-center md:flex-row">
            <img src="https://pbs.twimg.com/media/E4mkuv0WYAcXBy5?format=jpg&name=small" alt="Gobierno Municipal" className="object-cover w-full mb-4 rounded-lg md:w-1/2 h-60 md:mb-0 md:mr-4" />
            <div className="md:w-1/2">
              <h2 className="mb-4 text-2xl font-semibold">Quiénes Somos</h2>
              <p className="mb-4 text-gray-700">
                El Gobierno Municipal trabaja para mejorar la calidad de vida de nuestros ciudadanos. Nuestra misión es proporcionar servicios efectivos y accesibles que fomenten el desarrollo y el bienestar de la comunidad.
              </p>
              <p className="mb-4 text-gray-700">
                <strong>Misión:</strong> Ofrecer servicios y soluciones para el crecimiento y bienestar de la ciudad.
              </p>
              <p className="mb-4 text-gray-700">
                <strong>Visión:</strong> Convertirnos en un gobierno municipal innovador y accesible, impulsando el desarrollo sostenible y la participación ciudadana.
              </p>
              <div className="p-4 mt-4 bg-gray-100 rounded-lg">
                <p className="text-gray-600">Para más detalles sobre nuestra estructura y funciones, explore los documentos oficiales disponibles en la sección correspondiente.</p>
              </div>
            </div>
          </div>
        </div>

    {/* Sección del Alcalde */}
    <section className="py-12 bg-gray-100">
          <div className="container px-6 mx-auto">
            {/* Tarjeta del Alcalde */}
            <div className="max-w-md p-6 mx-auto bg-white rounded-lg shadow-lg hover-shadow">
              <div className="flex flex-col items-center text-center">
                <img src={alcaldeImg} alt="Alcalde" className="object-cover w-40 h-40 mb-4 rounded-full" />
                <h2 className="mb-2 text-3xl font-semibold">Juan Pérez</h2>
                <p className="mb-4 text-xl text-gray-700">Alcalde</p>
                <p className="mb-4 text-gray-600">
                  Luis Arce Clemente es el actual Alcalde de nuestra ciudad, con una amplia experiencia en la gestión pública y el desarrollo comunitario. 
                  Licenciado en Administración Pública y con un máster en Desarrollo Urbano, Juan ha dedicado su carrera a mejorar la calidad de vida en la ciudad a través de políticas inclusivas y sostenibles.
                </p>
                <p className="mb-4 text-gray-600">
                  Antes de asumir el cargo de alcalde, Juan ocupó puestos clave en varias organizaciones no gubernamentales y en el gobierno local, donde implementó proyectos exitosos en educación, infraestructura y servicios públicos.
                </p>
                <a href="#" className="text-blue-500 hover:underline">Leer más sobre Juan Pérez</a>
              </div>
            </div>
          </div>
        </section>

        {/* Organigrama */}

        {/*<div className="p-6 mb-6 bg-white rounded-lg shadow-lg fade-in hover-shadow">
          <h2 className="mb-4 text-2xl font-semibold">Organigrama</h2>
          <img src="https://via.placeholder.com/1200x800" alt="Organigrama" className="w-full h-auto rounded-lg" />
        </div>
*/}
        {/* Autoridades */}
        <div className="p-6 mb-6 bg-white rounded-lg shadow-lg fade-in hover-shadow">
          <h2 className="mb-4 text-2xl font-semibold">Autoridades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Autoridad 1 */}
            <div className="p-4 rounded-lg shadow-md bg-gray-50 hover-shadow hover:bg-blue-500 hover:text-white transition-colors duration-300">
              <img src="https://via.placeholder.com/100" alt="Autoridad 1" className="w-24 h-24 mx-auto mb-4 rounded-full" />
              <h3 className="mb-2 text-xl font-semibold text-center">Juan Pérez</h3>
              <p className="mb-4 text-center text-gray-600">Alcalde</p>
              <p className="text-center text-gray-500">Juan Pérez es el actual Alcalde, con una vasta experiencia en la gestión pública y un fuerte compromiso con el desarrollo urbano y social.</p>
            </div>
            {/* Autoridad 2 */}
            <div className="p-4 rounded-lg shadow-md bg-gray-50 hover-shadow hover:bg-green-500 hover:text-white transition-colors duration-300">
              <img src="https://via.placeholder.com/100" alt="Autoridad 2" className="w-24 h-24 mx-auto mb-4 rounded-full" />
              <h3 className="mb-2 text-xl font-semibold text-center">María Gómez</h3>
              <p className="mb-4 text-center text-gray-600">Directora de Servicios Públicos</p>
              <p className="text-center text-gray-500">María Gómez supervisa la provisión de servicios básicos esenciales para la comunidad, incluyendo agua, electricidad y recolección de basura.</p>
            </div>
            {/* Autoridad 3 */}
            <div className="p-4 rounded-lg shadow-md bg-gray-50 hover-shadow hover:bg-blue-600 hover:text-white transition-colors duration-300">
              <img src="https://via.placeholder.com/100" alt="Autoridad 3" className="w-24 h-24 mx-auto mb-4 rounded-full" />
              <h3 className="mb-2 text-xl font-semibold text-center">Carlos Martínez</h3>
              <p className="mb-4 text-center text-gray-600">Secretario de Cultura</p>
              <p className="text-center text-gray-500">Carlos Martínez coordina todas las actividades culturales y deportivas, promoviendo eventos que enriquecen la vida comunitaria.</p>
            </div>
            {/* Agrega más autoridades aquí */}
          </div>
        </div>

        {/* Áreas de Gestión */}
        <div className="p-6 mb-6 bg-white rounded-lg shadow-lg fade-in hover-shadow">
          <h2 className="mb-4 text-2xl font-semibold">Áreas de Gestión</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Área 1 */}
            <div className="flex items-start mb-6 space-x-4 hover:bg-green-50 transition-colors duration-300">
              <img src="https://via.placeholder.com/150" alt="Área de Urbanismo" className="object-cover w-32 h-32 rounded-lg" />
              <div>
                <h3 className="mb-2 text-lg font-semibold">Área de Urbanismo</h3>
                <p className="text-gray-700">Responsable de la planificación y desarrollo urbano. Gestiona la construcción y mantenimiento de infraestructuras, así como la regulación de proyectos urbanísticos.</p>
              </div>
            </div>
            {/* Área 2 */}
            <div className="flex items-start mb-6 space-x-4 hover:bg-blue-50 transition-colors duration-300">
              <img src="https://via.placeholder.com/150" alt="Área de Servicios Públicos" className="object-cover w-32 h-32 rounded-lg" />
              <div>
                <h3 className="mb-2 text-lg font-semibold">Área de Servicios Públicos</h3>
                <p className="text-gray-700">Encargada de la provisión de servicios básicos como agua, electricidad, recolección de basura y mantenimiento de espacios públicos.</p>
              </div>
            </div>
            {/* Área 3 */}
            <div className="flex items-start mb-6 space-x-4 hover:bg-green-50 transition-colors duration-300">
              <img src="https://via.placeholder.com/150" alt="Área de Cultura y Deporte" className="object-cover w-32 h-32 rounded-lg" />
              <div>
                <h3 className="mb-2 text-lg font-semibold">Área de Cultura y Deporte</h3>
                <p className="text-gray-700">Promueve eventos culturales y deportivos, así como actividades recreativas que fomentan la participación y el bienestar de la comunidad.</p>
              </div>
            </div>
            {/* Área 4 */}
            <div className="flex items-start mb-6 space-x-4 hover:bg-blue-50 transition-colors duration-300">
              <img src="https://via.placeholder.com/150" alt="Área de Educación" className="object-cover w-32 h-32 rounded-lg" />
              <div>
                <h3 className="mb-2 text-lg font-semibold">Área de Educación</h3>
                <p className="text-gray-700">Gestiona programas educativos y colaboraciones con instituciones locales para mejorar la calidad de la educación en la ciudad.</p>
              </div>
            </div>
            {/* Agrega más áreas de gestión aquí */}
          </div>
        </div>

        {/* Documentos Oficiales */}
        <div className="p-6 bg-white rounded-lg shadow-lg fade-in hover-shadow">
          <h2 className="mb-4 text-2xl font-semibold">Documentos Oficiales</h2>
          <ul className="pl-6 list-disc">
            <li><a href="#" className="text-blue-500 hover:underline">Estatutos</a></li>
            <li><a href="#" className="text-blue-500 hover:underline">Reglamentos</a></li>
            <li><a href="#" className="text-blue-500 hover:underline">Manuales</a></li>
            <li><a href="#" className="text-blue-500 hover:underline">Políticas y Procedimientos</a></li>
            {/* Agrega más documentos oficiales aquí */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GobMunLayout;

