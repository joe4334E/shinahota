/**
 * @component   : Header
 * @description : Header navigation bar component
 */

import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownMunicipalOpen, setDropdownMunicipalOpen] = useState(false);
  const [isDropdownDigitalOpen, setDropdownDigitalOpen] = useState(false);

  const mobileMenuRef = useRef(null);
  const dropdownMunicipalRef = useRef(null);
  const dropdownDigitalRef = useRef(null);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const handleDropdownMunicipalToggle = () => {
    setDropdownMunicipalOpen(prev => !prev);
  };

  const handleDropdownDigitalToggle = () => {
    setDropdownDigitalOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
      if (dropdownMunicipalRef.current && !dropdownMunicipalRef.current.contains(event.target)) {
        setDropdownMunicipalOpen(false);
      }
      if (dropdownDigitalRef.current && !dropdownDigitalRef.current.contains(event.target)) {
        setDropdownDigitalOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="flex flex-wrap items-center justify-between p-4 mx-auto max-w-screen-xl">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://i.imgur.com/UbXhg6S.jpeg" className="h-28" alt="Logo" />
        </a>
        <button
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={isMobileMenuOpen}
          onClick={handleMobileMenuToggle}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div
          ref={mobileMenuRef}
          className={`w-full md:block md:w-auto ${isMobileMenuOpen ? '' : 'hidden'}`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/home"
                className="block px-3 py-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
              >
                Inicio
              </a>
            </li>
            <li className="relative">
              <button
                onClick={handleDropdownMunicipalToggle}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Gobierno Municipal
                <svg className={`w-2.5 h-2.5 ms-2.5 transition-transform ${isDropdownMunicipalOpen ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              {isDropdownMunicipalOpen && (
                <div
                  ref={dropdownMunicipalRef}
                  className="absolute z-10 font-normal bg-white rounded-lg shadow divide-y divide-gray-100 w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                    <li>
                      <a href="/gobierno-municipal/turismo" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Turismo</a>
                    </li>
                    <li>
                      <a href="/gobierno-municipal/noticias" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Noticias</a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                  </div>
                </div>
              )}
            </li>
            <li className="relative">
              <button
                onClick={handleDropdownDigitalToggle}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Gobierno Digital
                <svg className={`w-2.5 h-2.5 ms-2.5 transition-transform ${isDropdownDigitalOpen ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              {isDropdownDigitalOpen && (
                <div
                  ref={dropdownDigitalRef}
                  className="absolute z-10 font-normal bg-white rounded-lg shadow divide-y divide-gray-100 w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                    <li>
                      <a href="/gobierno-linea/patentes" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Patentes Municipales</a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <a
                href="/contactos"
                className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contactos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
