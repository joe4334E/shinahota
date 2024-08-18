import React, {useState} from "react"

function About(){
  return(
    <>

<section className="py-12 bg-gray-100" id="work-section">
  <div className="container px-4 mx-auto">
    <div className="mb-10 text-center">
      <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
        Sobre Nosotros
      </h2>
      <p className="mb-4 text-lg font-semibold text-gray-600 md:text-xl">
        Reseña Histórica de la Caja de Seguro Social
      </p>
      <p className="max-w-2xl mx-auto text-base text-gray-700 md:text-lg">
        La comunidad nacional, de la cual forma parte un amplio sector de
        Patronos, Asegurados y Beneficiarios y, de manera particular, los
        funcionarios que prestamos servicios en la Caja de Seguro Social de
        Panamá, hemos venido observando cada año el amplio camino recorrido por
        la seguridad social y la impresionante transformación que esta
        Institución ha podido lograr en sus años de funcionamiento.
      </p>
    </div>
    <div className="flex justify-center">
      <div className="max-w-4xl p-6 bg-white rounded-lg shadow-lg md:p-8">
      </div>
    </div>
  </div>
</section>
    </>
    )
}
export default About

