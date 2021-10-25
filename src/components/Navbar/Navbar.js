import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white dark:bg-gray-800">
            <div className="container p-6 mx-auto">
                <p className="block text-2xl font-bold text-center text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">My Shop</p>

                <div className="flex items-center justify-center mt-6 text-gray-600 capitalize dark:text-gray-300">
                    <NavLink className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6" to="/home">Home</NavLink>
                    <NavLink className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6" to="/products">products</NavLink>
                    
                    <NavLink className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6" to="/products/add">Add Products</NavLink>
                </div>
            </div>
        </nav>
    </div>
  );
};

export default Navbar;