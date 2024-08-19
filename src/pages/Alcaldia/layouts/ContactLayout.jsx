/**
 * @component   : ContactLayout
 * @author      : ale (ale@ale)
 * @created     : domingo ago 18, 2024 15:33:35 -04
 * @description : ContactLayout
 */
import React from 'react';

const ContactLayout = () => (
  <div className="text-gray-800 bg-gray-100">
    {/* Imagen Hero con Título y Texto */}
    <section
      className="relative h-screen bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="px-6 py-8 text-center text-white bg-black rounded-lg bg-opacity-60">
          <h1 className="mb-4 text-4xl font-bold">Alcaldía de Shinahota</h1>
          <p className="mb-6 text-xl">Contactos</p>
          {/* Botón opcional, si necesitas uno */}
          {/* <button className="px-4 py-2 text-black bg-gray-300 rounded hover:bg-gray-400 transition">Más Información</button> */}
        </div>
      </div>
    </section>

    {/* Contenedor Principal */}
    <div className="container px-4 py-8 mx-auto">
      {/* Información de Contacto y Formulario */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Información de Contacto */}
        <section className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
          <h2 className="mb-4 text-xl font-semibold text-green-600">Información de Contacto</h2>
          <ul className="space-y-2">
            <li><strong>Dirección:</strong> Calle Ejemplo 123, Shinahota</li>
            <li><strong>Teléfono:</strong> +123 456 7890</li>
            <li><strong>Correo Electrónico:</strong> contacto@shinahota.gob.bo</li>
          </ul>
        </section>

        {/* Formulario de Contacto */}
        <section className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
          <h2 className="mb-4 text-xl font-semibold text-green-600">Formulario de Contacto</h2>
          <form action="#" method="POST">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Nombre:</label>
              <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Correo Electrónico:</label>
              <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">Mensaje:</label>
              <textarea id="message" name="message" rows="4" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600" required></textarea>
            </div>
            <button type="submit" className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition">Enviar</button>
          </form>
        </section>
      </div>

      {/* Mapa y Horarios de Atención */}
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
        <h2 className="mb-4 text-xl font-semibold text-green-600">Ubicación y Horarios de Atención</h2>

        {/* Mapa */}
        <div className="relative pb-[56.25%] mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.5610105378237!2d-65.25107071693562!3d-16.996130342121962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e44fcef728759b%3A0xe8cfb162108a3e65!2sAlcaldia%20Municipal%20Shinahota!5e0!3m2!1ses-419!2sbo!4v1724007803384!5m2!1ses-419!2sbo"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Horarios de Atención */}
        <div>
          <h3 className="mb-2 text-lg font-semibold text-blue-600">Horarios de Atención</h3>
          <ul className="space-y-1">
            <li><strong>Lunes a Viernes:</strong> 9:00 AM - 5:00 PM</li>
            <li><strong>Sábados:</strong> 10:00 AM - 2:00 PM</li>
            <li><strong>Domingos:</strong> Cerrado</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default ContactLayout;

