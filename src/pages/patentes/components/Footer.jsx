import React, {useState} from "react"

function Footer(){
  return(
    <>
    <footer className="fixed bottom-0 left-0 w-full py-12 text-white bg-gray-800">
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap items-center justify-between">
      <div className="w-full px-4 mb-8 text-center md:w-5/12 lg:w-4/12 md:mb-0">
        <img
          src="https://i.imgur.com/UbXhg6S.jpeg"
          alt="Logo"
          className="w-32 h-auto mx-auto"
        />
      </div>

      <div className="w-full px-4 mb-8 md:w-4/12 lg:w-3/12 md:mb-0">
        <h2 className="mb-4 text-xl font-bold text-center md:text-left">
          Features
        </h2>
        <ul className="text-center space-y-2 md:text-left">
          <li><a href="#" className="text-blue-400 hover:underline">Inicio</a></li>
          <li>
            <a href="#work-section" className="text-blue-400 hover:underline"
              >Sobre nosotros</a
            >
          </li>
          <li>
            <a href="#services-section" className="text-blue-400 hover:underline"
              >Portafolio</a
            >
          </li>
          <li>
            <a href="#contact-section" className="text-blue-400 hover:underline"
              >Contáctanos</a
            >
          </li>
        </ul>
      </div>

      <div className="w-full px-4 mb-8 md:w-3/12 lg:w-3/12 md:mb-0">
        <h2 className="mb-4 text-xl font-bold text-center md:text-left">
          Síguenos
        </h2>
        <div className="flex flex-wrap justify-center md:justify-start space-x-4">
          <a
            href="https://www.youtube.com/user/csspty"
            className="text-white hover:text-gray-400"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.498 6.186c-.293-1.089-1.156-1.963-2.251-2.224-1.968-.372-9.924-.372-9.924-.372s-7.957 0-9.924.372c-1.096.261-1.96 1.135-2.252 2.224-.318 1.132-.318 3.51-.318 3.51s0 2.38.318 3.51c.293 1.089 1.156 1.964 2.252 2.225 1.968.372 9.924.372 9.924.372s7.957 0 9.924-.372c1.095-.261 1.958-1.136 2.251-2.225.318-1.13.318-3.51.318-3.51s0-2.378-.318-3.51zm-13.949 7.843v-5.777l5.289 2.888-5.289 2.889z"
              />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/csspanama/?fref=ts"
            className="text-white hover:text-gray-400"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.675 0h-21.35c-.735 0-1.325.594-1.325 1.325v21.351c0 .73.59 1.325 1.325 1.325h11.497v-9.298h-3.118v-3.645h3.118v-2.686c0-3.092 1.892-4.778 4.653-4.778 1.325 0 2.464.098 2.795.141v3.24l-1.92.001c-1.507 0-1.798.717-1.798 1.768v2.32h3.592l-.468 3.645h-3.124v9.295h6.126c.735 0 1.325-.594 1.325-1.325v-21.351c0-.73-.59-1.325-1.325-1.325z"
              />
            </svg>
          </a>
          <a
            href="https://twitter.com/CSSPanama"
            className="text-white hover:text-gray-400"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.015-.608 1.791-1.568 2.156-2.722-.951.564-2.005.975-3.127 1.193-.896-.956-2.168-1.556-3.584-1.556-2.71 0-4.912 2.202-4.912 4.913 0 .385.043.76.127 1.124-4.083-.205-7.694-2.156-10.125-5.126-.423.723-.666 1.564-.666 2.464 0 1.7.865 3.194 2.176 4.071-.803-.025-1.558-.246-2.219-.616v.061c0 2.372 1.685 4.352 3.92 4.804-.41.111-.845.171-1.288.171-.316 0-.624-.031-.928-.086.626 1.953 2.444 3.373 4.6 3.409-1.684 1.319-3.804 2.105-6.102 2.105-.396 0-.79-.023-1.175-.068 2.186 1.397 4.77 2.211 7.563 2.211 9.074 0 14.036-7.527 14.036-14.036 0-.215-.005-.429-.014-.643.964-.695 1.8-1.56 2.466-2.548z"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/csspanama/"
            className="text-white hover:text-gray-400"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.002 2.006c-.645 0-1.183.527-1.183 1.183v3.591c0 .646.537 1.183 1.183 1.183h3.591c.646 0 1.183-.537 1.183-1.183v-3.591c0-.646-.537-1.183-1.183-1.183h-3.591zm9.998 0c-.646 0-1.183.527-1.183 1.183v3.591c0 .646.537 1.183 1.183 1.183h3.591c.646 0 1.183-.537 1.183-1.183v-3.591c0-.646-.537-1.183-1.183-1.183h-3.591zM12 5.026c-3.83 0-6.973 3.142-6.973 6.972s3.143 6.972 6.973 6.972 6.973-3.142 6.973-6.972-3.143-6.972-6.973-6.972zm0 11.611c-2.587 0-4.658-2.07-4.658-4.658 0-2.587 2.071-4.658 4.658-4.658 2.587 0 4.658 2.071 4.658 4.658 0 2.588-2.071 4.658-4.658 4.658zm6.079-9.568h-2.044c-.114 0-.225.043-.308.122-.085.084-.132.199-.132.321v2.012c0 .132.047.237.132.322.083.079.194.122.308.122h2.044c.116 0 .226-.043.308-.122.086-.085.13-.2.13-.322v-2.012c0-.121-.043-.237-.13-.321-.082-.079-.192-.122-.308-.122z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div className="pt-6 mt-12 text-center border-t">
      <p className="text-sm">
        &copy;
        <script>
          document.write(new Date().getFullYear());
        </script>
        Todos los derechos reservados | CSS Panamá | DENIT
      </p>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer
