/**
 * @component   : GobLineaLayout
 * @author      : ale (ale@ale)
 * @created     : domingo ago 18, 2024 16:38:00 -04
 * @description : GobLineaLayout
 */
import React from 'react';

const GobLineaLayout = () => {
    return (
        <div className="py-8 text-gray-800 bg-gray-100">
            <div className="container px-4 mx-auto">

                {/* Sección de Introducción */}
                <section className="flex flex-col items-center p-8 mb-12 border border-blue-300 shadow-lg bg-blue-50 rounded-xl lg:flex-row-reverse">
                    <div className="mb-6 lg:w-1/2 lg:pl-8 lg:mb-0">
                        <img src="https://via.placeholder.com/400x300" alt="Gobierno Digital" className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="mb-6 text-3xl font-bold text-blue-700">Gobierno Digital en Bolivia</h2>
                        <p className="mb-4 text-lg leading-relaxed">En Bolivia, el gobierno digital busca simplificar y modernizar los trámites administrativos, ofreciendo a los ciudadanos acceso fácil y rápido a los servicios públicos. A través de plataformas en línea, el gobierno facilita la gestión de documentos y trámites, promoviendo la transparencia y eficiencia en la administración pública.</p>
                        <p className="text-lg leading-relaxed">La plataforma de Gobierno en Línea ofrece herramientas y recursos para realizar trámites relacionados con las patentes municipales y otros servicios, mejorando la experiencia del usuario y la accesibilidad de la información.</p>
                    </div>
                </section>

                {/* Introducción */}
                <section className="flex flex-col items-center p-8 mb-12 bg-white border border-gray-200 shadow-lg rounded-xl lg:flex-row">
                    <div className="mb-6 lg:w-1/2 lg:pr-8 lg:mb-0">
                        <img src="https://via.placeholder.com/400x300" alt="Patentes Municipales" className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="mb-6 text-3xl font-bold text-blue-700">Patentes Municipales</h2>
                        <p className="text-lg leading-relaxed">Aquí encontrarás información relevante sobre las patentes municipales, incluyendo recursos y documentos importantes.</p>
                    </div>
                </section>

                {/* Listado de Recursos */}
                <section className="mb-8">
                    <div className="flex flex-wrap justify-center">
                        {/* Ley de Patentes Municipales */}
                        <div className="relative max-w-xs bg-gradient-to-b from-blue-200 to-blue-100 rounded-lg p-6 m-4 shadow-lg overflow-hidden hover:translate-y-[-10px] transition-transform duration-300">
                            <p className="mb-2 text-xl font-semibold text-gray-800">Ley de Patentes Municipales</p>
                            <p className="mb-4 text-sm text-gray-600">Consulta el documento oficial sobre las leyes que regulan las patentes municipales en Shinahota.</p>
                            <a href="https://www.economiayfinanzas.gob.bo/sites/default/files/2022-11/PATENTES_SHINAHOTA_N%C2%B054.pdf" className="block px-4 py-2 font-bold text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">Ver Ley de Patentes Municipales</a>
                            <div className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 font-mono text-xl text-white bg-gradient-to-br from-blue-500 to-blue-700 rounded-bl-xl">→</div>
                        </div>

                        {/* Carta Orgánica del Gobierno Autónomo Municipal de Shinahota */}
                        <div className="relative max-w-xs bg-gradient-to-b from-blue-200 to-blue-100 rounded-lg p-6 m-4 shadow-lg overflow-hidden hover:translate-y-[-10px] transition-transform duration-300">
                            <p className="mb-2 text-xl font-semibold text-gray-800">Carta Orgánica del Gobierno Autónomo Municipal de Shinahota</p>
                            <p className="mb-4 text-sm text-gray-600">Accede al documento que detalla la carta orgánica del gobierno municipal.</p>
                            <a href="https://www.sea.gob.bo/wp-content/uploads/2021/09/CO-Shinahota.pdf" className="block px-4 py-2 font-bold text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">Ver Carta Orgánica</a>
                            <div className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 font-mono text-xl text-white bg-gradient-to-br from-blue-500 to-blue-700 rounded-bl-xl">→</div>
                        </div>

                        {/* Patentes Municipales */}
                        <div className="relative max-w-xs bg-gradient-to-b from-blue-200 to-blue-100 rounded-lg p-6 m-4 shadow-lg overflow-hidden hover:translate-y-[-10px] transition-transform duration-300">
                            <p className="mb-2 text-xl font-semibold text-gray-800">Patentes Municipales</p>
                            <p className="mb-4 text-sm text-gray-600">Accede a la sección de patentes municipales para realizar trámites y consultar información.</p>
                            <a href="/gobierno-linea/patentes" className="block px-4 py-2 font-bold text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">Ir a Patentes Municipales</a>
                            <div className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 font-mono text-xl text-white bg-gradient-to-br from-blue-500 to-blue-700 rounded-bl-xl">→</div>
                        </div>

                        {/* Formulario de Denuncia */}
                        <div className="relative max-w-xs bg-gradient-to-b from-blue-200 to-blue-100 rounded-lg p-6 m-4 shadow-lg overflow-hidden hover:translate-y-[-10px] transition-transform duration-300">
                            <p className="mb-2 text-xl font-semibold text-gray-800">Formulario de Denuncia</p>
                            <p className="mb-4 text-sm text-gray-600">Descarga el formulario de denuncia para reportar cualquier incidencia o problema.</p>
                            <a href="URL_DEL_PDF_DE_DESCARGA" className="block px-4 py-2 font-bold text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">Descargar Formulario de Denuncia</a>
                            <div className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 font-mono text-xl text-white bg-gradient-to-br from-blue-500 to-blue-700 rounded-bl-xl">→</div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default GobLineaLayout;

