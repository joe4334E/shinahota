import React, {useState} from "react"

function Hero(){
  return(
    <>
      <div className="mb-8">
  <div className="p-6 bg-white rounded-lg shadow-md">
    <div className="mb-8">
      <a href="admin/pe_solicitud_maternidad_n.php">
        <div className="flex justify-center mb-4">
          <img
            src="https://placehold.co/600x400/png"
            alt="Maternidad"
            className="object-cover rounded-full h-30 w-30"
          />
        </div>
        <h4 className="mb-2 text-xl font-semibold text-center">Maternidad</h4>
        <p className="text-left text-gray-700">
          El Subsidio de Maternidad se concederá a aquellas mujeres embarazadas
          que tengan un mínimo de nueve (9) cuotas mensuales en los 12 meses
          anteriores al séptimo mes de gravidez, es decir hasta el sexto mes
          inclusive.
        </p>
        <div className="mt-4 text-center">
          <button className="px-4 py-2 text-white bg-blue-500 rounded">
            Ver documentos a presentar
          </button>
        </div>
      </a>
    </div>

    <a href="admin/pe_solicitud_afiliacion_n.php">
      <div className="flex justify-center mb-4">
        <img
          src="https://placehold.co/600x400/png"
          alt="Afiliación"
          className="object-cover rounded-full h-30 w-30"
        />
      </div>
      <h4 className="mb-2 text-xl font-semibold text-center">Afiliación</h4>
      <p className="text-left text-gray-700">
        Afiliación a sus dependientes
        <ul className="pl-5 text-gray-700 list-disc">
          <li>Afiliación de Hijos (as)</li>
          <li>Afiliación de Padre o Madre</li>
          <li>Afiliación a Esposo (a) o Compañero (a)</li>
        </ul>
      </p>
      <div className="mt-4 text-center">
        <button className="px-4 py-2 text-white bg-blue-500 rounded">
          Ver Requisitos
        </button>
      </div>
    </a>
  </div>
</div>

    </>
    )
}

export default Hero
