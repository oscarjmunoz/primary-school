import React, { useState } from "react";
import Logo from "../../../public/escudo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between relative">
        {/* Logo y Título */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-14 mr-2" />
          <h4 className="text-2xl font-bold ml-4">Instituto Froebel</h4>
        </div>

        {/* Menú hamburguesa para pantallas pequeñas y medianas */}
        <button
          onClick={toggleMenu}
          className="md:hidden border border-transparent rounded-md p-2 text-gray-800 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 absolute top-2 right-0"
        >
          <span className="sr-only">Toggle mobile menu</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Menú */}
        <ul
          className={`md:flex flex-col md:flex-row space-x-4 absolute md:relative top-full right-0 md:left-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
          style={{
            maxHeight: "calc(100vh - 64px)",
            transition: "max-height 0.8s ease-in-out",
          }}
        >
          <li>
            <a
              href="#"
              className="text-black block px-4 py-2 rounded-t-md hover:bg-gray-100"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black block px-4 py-2 hover:bg-gray-100"
            >
              La Institución
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black block px-4 py-2 hover:bg-gray-100"
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black block px-4 py-2 hover:bg-gray-100"
            >
              Noticias
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black block px-4 py-2 rounded-b-md hover:bg-gray-100"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
