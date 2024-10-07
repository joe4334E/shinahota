import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const Turismo = () => {
  return (
    <>
      <main>
        <Header />
        <div className="container px-4 py-8 mx-auto">
          {/* About Us */}
          <section className="flex flex-col md:flex-row mb-12 bg-white rounded-lg shadow-lg">
            <img
              src="https://lh5.googleusercontent.com/p/AF1QipOS1JEOPhgJ6XAPW1LmF0TPJmE-SPiWxVdiah45=w540-h312-n-k-no"
              alt="Turismo en Shinahota"
              className="object-cover w-full h-64 md:w-1/3 md:h-auto"
            />
            <div className="w-full p-6 md:w-2/3">
              <h2 className="mb-4 text-3xl font-semibold text-green-800">Sobre la Sección de Turismo de Shinahota</h2>
              <p className="leading-relaxed text-gray-700">
                Bienvenidos a la sección dedicada al turismo del municipio de Shinahota, un rincón vibrante de Bolivia lleno de vida, cultura y naturaleza. En esta página, te ofrecemos una guía completa sobre los eventos, festividades y atractivos turísticos de Shinahota, para que puedas planificar tu visita y sumergirte en la rica tradición de esta fascinante región.
              </p>
              <p className="mt-4 leading-relaxed text-gray-700">
                Desde la colorida Festividad de la Virgen de Urkupiña hasta las impresionantes Cavernas del Repechón, Shinahota tiene algo para todos. Exploraremos juntos las celebraciones locales, los paisajes naturales y las actividades emocionantes que definen a este destino único.
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
                    La festividad más importante de Shinahota es la de la Virgen de Urkupiña, que se celebra en agosto.
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

              {/* Otros eventos... (similar a arriba) */}

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
                    Santuario de vida silvestre con diversas especies de murciélagos y otras criaturas en tres cuevas.
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

              {/* Otros atractivos... (similar a arriba) */}

            </div>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Turismo;
