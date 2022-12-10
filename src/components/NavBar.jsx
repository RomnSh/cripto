import React from 'react';
import img from '../img/logo.png'
const NavBar = () => {
    return ( 
        
<nav className="bg-slate-400 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div className="container flex flex-wrap items-start justify-between mx-auto">
  <a className="flex items-center">
    <img src={img} className="h-12 mr-5 sm:h-13" alt="Flowbite Logo" />
      <span className="self-center text-xl font-semibold  text-white">Crypto</span>
  </a>
     <div className="items-start justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
     
      <ul className="flex flex-row p-4 mx-5 border border-gray-100 rounded-lg bg-gray-50 ">
        <li>
          <a  className="block mx-5 text-gray-700 rounded"> Home</a>
        </li>
        <li>
          <a  className="block mx-5 text-gray-700 rounded">About</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

);
}
 
export default NavBar;