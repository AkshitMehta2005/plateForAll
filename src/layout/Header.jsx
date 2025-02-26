import React from 'react'
import { useState } from 'react';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
             {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center fixed w-full top-0 z-10">
        <div className=""><img src="./logo.png" alt="logo"  height={110} width={110}/></div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-yellow-500 transition duration-300">Home</a>
          <a href="#" className="hover:text-yellow-500 transition duration-300">About</a>
          <a href="#" className="hover:text-yellow-500 transition duration-300">Programs</a>
          <a href="#" className="hover:text-yellow-500 transition duration-300">Contact</a>
        </div>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hidden md:block hover:bg-yellow-600 transition duration-300">Donate Now</button>
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-white shadow-md p-4 fixed w-full top-16 left-0">
          <a href="#" className="hover:text-yellow-500 py-2 w-full text-center border-b">Home</a>
          <a href="#" className="hover:text-yellow-500 py-2 w-full text-center border-b">About</a>
          <a href="#" className="hover:text-yellow-500 py-2 w-full text-center border-b">Programs</a>
          <a href="#" className="hover:text-yellow-500 py-2 w-full text-center border-b">Contact</a>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-yellow-600 transition duration-300">Donate Now</button>
        </div>
      )}

    </div>
  )
}

export default Header