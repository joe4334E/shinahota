import React, {useState} from "react"

function Contact(){
  return(
    <>

      <section className="py-12 bg-light" id="contact-section">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-black">Contáctanos</h2>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 mb-8 md:w-7/12 md:mb-0">
              <div
                id="exito"
                className="hidden p-4 mb-4 text-green-800 bg-green-200 rounded"
              >
                Sus datos han sido recibidos con éxito.
              </div>
              <div
                id="fracaso"
                className="hidden p-4 mb-4 text-red-800 bg-red-200 rounded"
              >
                Se ha producido un error durante el envío de datos.
              </div>

              <div id="formulario">
                <form
                  method="post"
                  className="p-6 bg-white rounded-lg shadow-md"
                  id="contact_form"
                  name="contact_form"
                >
                  <h2 className="mb-6 text-2xl font-bold text-black">
                    Formulario de Contacto
                  </h2>

                  <div className="flex flex-wrap mb-4 -mx-4">
                    <div className="w-full px-4 mb-4 md:w-1/2 md:mb-0">
                      <label className="block mb-1 text-black" for="fname">Nombre</label>
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <label className="block mb-1 text-black" for="cedula"
                      >Cédula / Pasaporte</label
                      >
                      <input
                        type="text"
                        id="cedula"
                        name="cedula"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 text-black" for="tel"
                    >Teléfono / Celular
                      <em className="text-red-500">(Obligatorio, sin guiones)</em></label
                      >
                    <input
                      type="text"
                      id="tel"
                      name="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 text-black" for="email">Correo</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 text-black" for="subject">Tema</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 text-black" for="message">Mensaje</label>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="7"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Escriba sus notas o preguntas aquí...."
                      required
                    ></textarea>
                  </div>
                  <div>
                    <input
                      type="button"
                      id="send_contact"
                      value="Enviar Mensaje"
                      className="w-full px-4 py-3 font-semibold text-white bg-blue-500 cursor-pointer rounded-md hover:bg-blue-600"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="w-full px-4 md:w-5/12">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <p className="mb-2 text-lg font-semibold">Dirección</p>
                <p className="mb-4">Panamá, Edificio Bolívar</p>

                <p className="mb-2 text-lg font-semibold">Teléfono</p>
                <p className="mb-4">Maternidad</p>
                <p className="mb-4">
                  <a href="tel:+5073662030" className="text-blue-500 hover:underline"
                  >366-2030</a
                  >
                </p>
                <p className="mb-4">
                  <a href="tel:+5073662031" className="text-blue-500 hover:underline"
                  >366-2031</a
                  >
                </p>

                <p className="mb-2 text-lg font-semibold">Afiliación</p>
                <p className="mb-4">
                  <a href="tel:+5073662020" className="text-blue-500 hover:underline"
                  >366-2020</a
                  >
                </p>

                <p className="mb-2 text-lg font-semibold">Seguro Voluntario</p>
                <p className="mb-4">
                  <a href="tel:+5075133750" className="text-blue-500 hover:underline"
                  >513-3750</a
                  >
                </p>
                <p className="mb-4">
                  <a href="tel:+5075133548" className="text-blue-500 hover:underline"
                  >513-3548</a
                  >
                </p>
                <p className="mb-4">
                  <a href="tel:+5075133736" className="text-blue-500 hover:underline"
                  >513-3736</a
                  >
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    )
}

export default Contact
