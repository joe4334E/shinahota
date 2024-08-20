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
              src="https://lh5.googleusercontent.com/p/AF1QipOS1JEOPhgJ6XAPW1LmF0TPJmE-SPiWxVdiah45=w540-h312-n-k-no" 
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
                  src="https://unibolquechua.edu.bo/wp-content/uploads/2022/08/2-2.jpg" 
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
                  src="https://scontent.fcbb3-1.fna.fbcdn.net/v/t39.30808-6/420299443_756660053163102_657162470782285910_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=pVrtZCLGY6kQ7kNvgFllFQo&_nc_ht=scontent.fcbb3-1.fna&oh=00_AYCHC9Uho6F6AIG_PfqGXVhAanjcXyMypo0dqTg5xNKejQ&oe=66C9E639" 
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

              {/* Fiestas Patronales de las Comunidades 
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
              */}
              {/* Festivales Culturales */}
              <div className="overflow-hidden bg-white rounded-lg shadow-lg">
                <img 
                  src="https://www.lostiempos.com/sites/default/files/styles/noticia_detalle/public/media_imagen/2022/2/27/18_me_1_jamessss.jpg?itok=NS3nDlFW" 
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
                  src="https://www.lostiempos.com/sites/default/files/styles/noticia_detalle/public/media_imagen/2023/3/31/18_dep5_los_tiempos.jpg?itok=aprGE32o" 
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
                  src="https://erbol.com.bo/sites/default/files/000245997W-750x375.jpg" 
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
                  src="https://scontent.fcbb3-1.fna.fbcdn.net/v/t39.30808-6/240586611_104564531949919_1559625204230494787_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=cqO1TtUvAH8Q7kNvgH3qegh&_nc_ht=scontent.fcbb3-1.fna&oh=00_AYDSvR5XmLc87uEk-ay53DOQCM0JwONNxr_sr7yK-NXN7Q&oe=66C9DC52" 
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

              {/* Parque Surubí */}
              <div className="overflow-hidden bg-white rounded-lg shadow-lg">
                <img 
                  src="https://scontent.fcbb3-1.fna.fbcdn.net/v/t39.30808-6/313335056_192125230012605_7516855840209422982_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=WqZtqWyUaJgQ7kNvgEkh4aP&_nc_ht=scontent.fcbb3-1.fna&oh=00_AYB7o4F4vlxb1skFw9vHacqqIgkKFifwoPfXHHA82VkvgQ&oe=66CA07F8" 
                  alt="Complejo Turistico Panchito" 
                  className="object-cover w-full h-48" 
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-green-800">Complejo Turistico Panchito</h3>
                  <p className="text-gray-700">
                    Espacio natural para disfrutar de la flora y fauna local, ofrece la posibilidad de hospedaje en cabañas y áreas para acampar y tambien realizar caminatas y degustar gastronomía típica.
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

