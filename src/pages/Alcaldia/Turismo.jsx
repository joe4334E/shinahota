/**
 * @component   : Turismo
 * @author      : ale (ale@ale)
 * @created     : domingo ago 18, 2024 17:39:57 -04
 * @description : Turismo
 */
import React from 'react';
//import './styles.css'; // Asegúrate de importar el archivo de estilos si tienes uno
import Header from './components/Header'
import Footer from './components/Footer'
const Turismo = () => {
  return (
    <>
      <main>
        <Header/>
        <div className="container px-4 py-8 mx-auto">
          {/* About Us */}
          <section className="flex mb-12 bg-white rounded-lg shadow-lg">
            <img 
              src="https://via.placeholder.com/500x500?text=Shinahota+Turismo" 
              alt="Turismo en Shinahota" 
              className="object-cover w-1/3 h-auto" 
            />
            <div className="w-2/3 p-6">
              <h2 className="mb-4 text-3xl font-semibold text-green-800">Sobre la Sección de Turismo de Shinahota</h2>
              <p className="leading-relaxed text-gray-700">
                Bienvenidos a la sección dedicada al turismo del municipio de Shinahota, un rincón vibrante de Bolivia lleno de vida, cultura y naturaleza. En esta página, te ofrecemos una guía completa sobre los eventos, festividades y atractivos turísticos de Shinahota, para que puedas planificar tu visita y sumergirte en la rica tradición de esta fascinante región.
              </p>
              <p className="mt-4 leading-relaxed text-gray-700">
                Desde la colorida Festividad de la Virgen de Urkupiña hasta las impresionantes Cavernas del Repechón, Shinahota tiene algo para todos. Exploraremos juntos las celebraciones locales, los paisajes naturales y las actividades emocionantes que definen a este destino único. Nuestro objetivo es ayudarte a descubrir la auténtica esencia de Shinahota y disfrutar de una experiencia inolvidable en nuestro hermoso municipio.
              </p>
            </div>
          </section>

          {/* Sección de Eventos y Festividades */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-semibold text-green-800">Eventos y Festividades de Shinahota</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Festividad de la Virgen de Urkupiña */}
              <div className="overflow-hidden bg-white rounded-lg shadow-lg">
                <img 
                  src="https://via.placeholder.com/400x300" 
                  alt="Festividad de la Virgen de Urkupiña" 
                  className="object-cover w-full h-48" 
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-green-800">Festividad de la Virgen de Urkupiña</h3>
                  <p className="text-gray-700">
                    La festividad más importante de Shinahota es la de la Virgen de Urkupiña, que se celebra en agosto. Miles de peregrinos se reúnen para rendir culto a la Virgen y participar en una serie de actividades culturales y religiosas.
                  </p>
                  <a 
                    href="https://unibolquechua.edu.bo" 
                    className="block mt-4 text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Más información
                  </a>
                </div>
              </div>

              {/* Carnaval */}
              <div className="overflow-hidden bg-white rounded-lg shadow-lg">
                <img 
                  src="https://via.placeholder.com/400x300" 
                  alt="Carnaval" 
                  className="object-cover w-full h-48" 
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-green-800">Carnaval</h3>
                  <p className="text-gray-700">
                    El Carnaval en Shinahota es una celebración llena de color, música y alegría. Los habitantes se disfrazan, bailan y desfilan por las calles, creando un ambiente festivo.
                  </p>
                  <a 
                    href="https://mediabol.pro" 
                    className="block mt-4 text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Más información
                  </a>
                </div>
              </div>

              {/* Fiestas Patronales de las Comunidades */}
              <div className="overflow-hidden bg-white rounded-lg shadow-lg">
                <img 
                  src="https://via.placeholder.com/400x300" 
                  alt="Fiestas Patronales" 
                  className="object-cover w-full h-48" 
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-green-800">Fiestas Patronales de las Comunidades</h3>
                  <p className="text-gray-700">
                    Cada comunidad de Shinahota celebra a su santo patrono con misas, procesiones y actividades tradicionales. Son una oportunidad para fortalecer los lazos comunitarios y preservar las costumbres ancestrales.
                  </p>
                </div>
              </div>

              {/* Festivales Culturales */}
              <div className="overflow-hidden bg-white rounded-lg shadow-lg">
                <img 
                  src="https://via.placeholder.com/400x300" 
                  alt="Festivales Culturales" 
                  className="object-cover w-full h-48" 
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-green-800">Festivales Culturales</h3>
                  <p className="text-gray-700">
                    Diversos festivales culturales exhiben artesanías locales, danzas y música tradicionales, y platos típicos de la región.
                  </p>
                </div>
              </div>

              {/* Actividades Deportivas */}
              <div className="overflow-hidden bg-white rounded-lg shadow-lg">
                <img 
                  src="https://via.placeholder.com/400x300" 
                  alt="Actividades Deportivas" 
                  className="object-cover w-full h-48" 
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-green-800">Actividades Deportivas</h3>
                  <p className="text-gray-700">
                    Shinahota es sede de torneos de fútbol, ciclismo y otros deportes extremos, atrayendo a participantes de toda la región.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Sección de Atractivos Turísticos */}
          <section>
            <h2 className="mb-6 text-3xl font-semibold text-green-800">Atractivos Turísticos de Shinahota</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Cavernas del Repechón */}
              <div className="overflow-hidden bg-white rounded-lg shadow-lg">
                <img 
                  src="https://via.placeholder.com/400x300" 
                  alt="Cavernas del Repechón" 
                  className="object-cover w-full h-48" 
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-green-800">Cavernas del Repechón</h3>
                  <p className="text-gray-700">
                    Santuario de vida silvestre con diversas especies de murciélagos y otras criaturas en tres cuevas. Un lugar misterioso y fascinante.
                  </p>
                  <a 
                    href="https://www.boliviaentusmanos.com" 
                    className="block mt-4 text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Más información
                  </a>
                </div>
              </div>

              {/* Caimán Poza */}
              <div className="overflow-hidden bg-white rounded-lg shadow-lg">
                <img 
                  src="https://via.placeholder.com/400x300" 
                  alt="Caimán Poza" 
                  className="object-cover w-full h-48" 
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-green-800">Caimán Poza</h3>
                  <p className="text-gray-700">
                    Hermosa laguna donde habitan caimanes. Observar a estos reptiles en su hábitat natural es un espectáculo único.
                  </p>
                </div>
              </div>

              {/* Dogo Poza */}
              <div className="overflow-hidden bg-white rounded-lg shadow-lg">
                <img 
                  src="https://via.placeholder.com/400x300" 
                  alt="Dogo Poza" 
                  className="object-cover w-full h-48" 
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-green-800">Dogo Poza</h3>
                  <p className="text-gray-700">
                    Otra laguna de gran belleza natural, ideal para relajarse y disfrutar del paisaje.
                  </p>
                </div>
              </div>

              {/* Cavernas de los Guacharos */}
              <div className="overflow-hidden bg-white rounded-lg shadow-lg">
                <img 
                  src="https://via.placeholder.com/400x300" 
                  alt="Cavernas de los Guacharos" 
                  className="object-cover w-full h-48" 
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-green-800">Cavernas de los Guacharos</h3>
                  <p className="text-gray-700">
                    Hogar de los guacharos, aves que emiten un sonido característico. Un lugar mágico.
                  </p>
                  <a 
                    href="https://cuevasdelperu.org" 
                    className="block mt-4 text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Más información
                  </a>
                </div>
              </div>

              {/* Cañón de Vidisu */}
              <div className="overflow-hidden bg-white rounded-lg shadow-lg">
                <img 
                  src="https://via.placeholder.com/400x300" 
                  alt="Cañón de Vidisu" 
                  className="object-cover w-full h-48" 
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-green-800">Cañón de Vidisu</h3>
                  <p className="text-gray-700">
                    Un cañón impresionante con paredes rocosas y vegetación exuberante, ideal para caminatas.
                  </p>
                </div>
              </div>

              {/* Túnel del Duende y Espejo del Diablo */}
              <div className="overflow-hidden bg-white rounded-lg shadow-lg">
                <img 
                  src="https://via.placeholder.com/400x300" 
                  alt="Túnel del Duende y Espejo del Diablo" 
                  className="object-cover w-full h-48" 
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-green-800">Túnel del Duende y Espejo del Diablo</h3>
                  <p className="text-gray-700">
                    Formaciones naturales espectaculares ubicadas en Central Majo Pampa.
                  </p>
                </div>
              </div>

              {/* Parque Surubí */}
              <div className="overflow-hidden bg-white rounded-lg shadow-lg">
                <img 
                  src="https://via.placeholder.com/400x300" 
                  alt="Parque Surubí" 
                  className="object-cover w-full h-48" 
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-green-800">Parque Surubí</h3>
                  <p className="text-gray-700">
                    Espacio natural para disfrutar de la flora y fauna local, realizar caminatas y degustar gastronomía típica.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <Footer/>
      </main>
    </>
  );
};

export default Turismo;

