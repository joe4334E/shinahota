import React, {useState} from "react"

function Questions(){
  return(
    <>


      <div class="text-center mb-8 px-4">
        <h2 class="text-black text-3xl font-bold">Preguntas Frecuentes</h2>
      </div>

      <div class="max-w-4xl mx-auto bg-white shadow-md rounded-lg">
        <div class="border-b">
          <input
            type="checkbox"
            id="accordion-1"
            class="accordion-checkbox hidden peer"
          />
          <label
            for="accordion-1"
            class="flex items-center justify-between cursor-pointer px-4 py-2 font-semibold bg-gray-100 border-b border-gray-200 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 peer-checked:bg-gray-200"
          >
            <span>Accordion 1</span>
            <span
              class="transition-transform duration-300 ease-in-out peer-checked:rotate-45"
            >+</span
            >
          </label>
          <div class="accordion-content px-4 py-2 hidden peer-checked:block">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </p>
          </div>
        </div>

        <div class="border-b">
          <input
            type="checkbox"
            id="accordion-2"
            class="accordion-checkbox hidden peer"
          />
          <label
            for="accordion-2"
            class="flex items-center justify-between cursor-pointer px-4 py-2 font-semibold bg-gray-100 border-b border-gray-200 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 peer-checked:bg-gray-200"
          >
            <span>Accordion 2</span>
            <span
              class="transition-transform duration-300 ease-in-out peer-checked:rotate-45"
            >+</span
            >
          </label>
          <div class="accordion-content px-4 py-2 hidden peer-checked:block">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Questions
