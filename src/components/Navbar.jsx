import React from 'react';
import Logo from '../assets/logo.png';
import { AiOutlineUser, AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Furniro Logo" className="w-10" />
        <span className="text-2xl font-bold font-montserrat">Furniro</span>
      </div>

      <ul className="hidden md:flex gap-10 font-medium text-black">
        <li className="cursor-pointer hover:text-gray-500">Home</li>
        <li className="cursor-pointer hover:text-gray-500">Shop</li>
        <li className="cursor-pointer hover:text-gray-500">About</li>
        <li className="cursor-pointer hover:text-gray-500">Contact</li>
      </ul>

      <div className="flex gap-6 text-2xl">
        <AiOutlineUser className="cursor-pointer" />
        <AiOutlineSearch className="cursor-pointer" />
        <AiOutlineHeart className="cursor-pointer" />
        <AiOutlineShoppingCart className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;