/**
 * @component   : Home_Layout
 * @author      : ale (ale@ale)
 * @created     : sábado ago 17, 2024 12:49:29 -04
 * @description : Home_Layout
 */
import React from "react";

function Home_Layout() {
  return (
    <>
<section className="px-4 py-8 bg-gray-100">
  <div className="mb-8 text-center">
    <h2 className="mb-4 text-3xl font-bold text-teal-700">ALCALDÍA DE SHINAHOTA</h2>
    <div className="relative w-full h-64 md:h-80 lg:h-96"> 
      <img
        src="https://i.imgur.com/oT8Wzl8.jpeg"
        alt="Alcaldía de Shinahota"
        className="absolute inset-0 object-cover w-full h-full rounded-lg shadow-lg"
      />
    </div>
  </div>

  <div className="max-w-3xl mx-auto">
    <div className="mb-8">
      <h3 className="mb-2 text-2xl font-semibold text-teal-600">Visión</h3>
      <p className="text-gray-700">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
        aliquam enim quos corrupti! Fugit eligendi quia repellat exercitationem
        illum quas eos, omnis, quasi, quis aliquid amet doloribus fuga minima
        facilis!
      </p>
    </div>

    <div className="mb-8">
      <h3 className="mb-2 text-2xl font-semibold text-teal-600">Misión</h3>
      <p className="text-gray-700">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
        aliquam enim quos corrupti! Fugit eligendi quia repellat exercitationem
        illum quas eos, omnis, quasi, quis aliquid amet doloribus fuga minima
        facilis!
      </p>
    </div>

    <div className="mb-8">
      <h3 className="mb-2 text-2xl font-semibold text-teal-600">Valores</h3>
      <p className="text-gray-700">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
        aliquam enim quos corrupti! Fugit eligendi quia repellat exercitationem
        illum quas eos, omnis, quasi, quis aliquid amet doloribus fuga minima
        facilis!
      </p>
    </div>

    <div className="mb-8">
      <h3 className="mb-4 text-2xl font-semibold text-teal-600">Organización</h3>
      <div className="flex justify-center gap-4">
        <button className="px-4 py-2 font-bold text-white bg-teal-500 rounded-lg shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
          Dirección Municipal
        </button>
        <button className="px-4 py-2 font-bold text-white bg-teal-500 rounded-lg shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
          Gaceta Municipal
        </button>
      </div>
    </div>
  </div>
</section>

    </>
  );
}

export default Home_Layout;
