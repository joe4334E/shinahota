/**
 * @component   : tramites
 * @author      : ale (ale@ale)
 * @created     : sábado ago 17, 2024 14:37:10 -04
 * @description : tramites
 */

import React from 'react';

const VentanillaUniversal = () => {
  const consultarTramite = () => {
    // Lógica para consultar trámite
    console.log("Consultar trámite");
  };

  const ingresarTramite = () => {
    // Lógica para ingresar trámite nuevo
    console.log("Ingresar trámite nuevo");
  };

  const accesoSistema = () => {
    // Lógica para acceso al sistema
    console.log("Acceso al sistema");
  };

  const returnItem = () => {
    // Lógica para volver
    console.log("Volver");
  };

  return (
    <div className="container p-6 mx-auto">
      <div className="flex flex-col items-center md:flex-row md:space-x-6">

        {/* Imagen de Encabezado */}
        <div className="mb-8 md:mb-0 md:w-1/2">
          <img src="https://placehold.co/600x400/png" className="object-cover w-full h-auto" alt="Encabezado" />
        </div>

        {/* Contenido */}
        <div className="flex flex-col items-center md:w-1/2">

          {/* Header Logo Section */}
          <div className="mb-8 text-center">
            <div className="text-4xl font-bold text-gray-800">VENTANILLA</div>
            <div className="text-4xl font-bold text-gray-800">UNIVERSAL</div>
            <div className="text-3xl font-bold text-teal-600">PATENTES MUNICIPALES</div>
          </div>

          {/* Action Buttons */}
          <div className="w-full mb-10">
            <div className="mb-4 text-2xl font-semibold text-center text-gray-700">¿Qué desea realizar?</div>
            <div className="flex flex-col items-center space-y-4">
              <button className="w-full max-w-md px-6 py-2 font-bold text-white bg-teal-500 rounded-lg shadow hover:bg-teal-700" onClick={consultarTramite}>
                Consultar estado de trámite
                <i className="ml-2 glyph-icon icon-arrow-right"></i>
              </button>
              <button className="w-full max-w-md px-6 py-2 font-bold text-white bg-teal-500 rounded-lg shadow hover:bg-teal-700" onClick={ingresarTramite}>
                Ingresar un trámite nuevo
                <i className="ml-2 glyph-icon icon-arrow-right"></i>
              </button>
            </div>
          </div>

          {/* Information Section */}
          <div className="mb-10 text-center text-gray-700">
            GAD Municipal de Guayaquil.
          </div>

          {/* Form Section */}
          <div className="w-full max-w-lg">
            <div className="mb-6 text-2xl font-semibold text-center text-gray-700">Consultar el estado de un trámite</div>
            <form className="space-y-6">
              <div className="relative">
                <select id="selector" className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-300 rounded appearance-none focus:outline-none focus:ring-teal-500 focus:border-teal-500">
                  <option value="1">N° de Identificación</option>
                  <option value="2">N° de Requerimiento</option>
                </select>
              </div>
              <div id="id" className="relative">
                <select id="type_iden" className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-300 rounded appearance-none focus:outline-none focus:ring-teal-500 focus:border-teal-500">
                  <option value="NA">Escoja tipo Identificación...</option>
                  <option value="1">Cédula</option>
                  <option value="2">RUC</option>
                  <option value="3">Pasaporte</option>
                </select>
              </div>
              <div id="re" className="relative">
                <input id="iden" type="text" className="block w-full px-4 py-2 leading-tight bg-white border border-gray-300 rounded focus:outline-none focus:ring-teal-500 focus:border-teal-500" placeholder="Ingrese su identificación" />
              </div>
              <button type="button" id="notification-trigger" className="w-full px-4 py-2 font-bold text-white bg-teal-500 rounded-lg shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50" onClick={accesoSistema}>
                CONSULTAR
              </button>
              <button type="button" className="w-full px-4 py-2 font-bold text-white bg-gray-500 rounded-lg shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50" onClick={returnItem}>
                <i className="mr-2 glyph-icon icon-arrow-left"></i><span>VOLVER</span>
              </button>
            </form>
          </div>

          {/* Footer Section */}
          <div className="mt-10">
            <div className="flex justify-center mb-6 space-x-6">
              <img src="https://placehold.co/600x400/png" className="object-cover w-24 h-24" alt="Logo Municipio 1" />
              <img src="https://placehold.co/600x400/png" className="object-cover w-24 h-24" alt="Logo Municipio 2" />
            </div>
            <div className="text-center">
              <a href="/ConsultasWeb/Site/DownloadFile" className="font-bold text-teal-600 hover:underline">
                <img src="https://placehold.co/40/png" alt="PDF Icon" className="inline-block w-10 h-10 mr-2" />
                DESCARGAR MANUAL DE USO DE SISTEMA
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VentanillaUniversal;


