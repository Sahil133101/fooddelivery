import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assests/logo.png';
import { MdShoppingBasket } from "react-icons/md";
import Avtar from '../Assests/avatar.png';
  import {motion}  from "framer-motion"; 
export const Header = () => {
  return (
    <header className='fixed z-50 w-full p-6 px-16 bg-primary'>
      {/* Desktop */}
      <div className='hidden md:flex w-full h-full items-center justify-between'>
        <Link to={"/ "} className='flex items-center gap-2'>
          <img src={logo} className='w-8 object-cover' alt="logo" />
          <p className='text-headingColor text-xl font-bold'>City</p>
        </Link>
        
        <div className='flex items-center'>
          <ul className='flex items-center gap-8'>
            <li className='text-base text-textcolor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
              Home
            </li>
            <li className='text-base text-textcolor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
              Menu
            </li>
            <li className='text-base text-textcolor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
              About Us
            </li>
            <li className='text-base text-textcolor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
              Service
            </li>
          </ul>

          <div className='relative flex items-center justify-center ml-8'>
            <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
            <div className='absolute -top-4 -right-1 w-5 h-5 rounded-full bg-cartNumfig flex items-center justify-center'>
              <p className='text-sn text-white font-semibold'>2</p>
            </div>
          </div>
          <motion.img  whileTap={ {scale: -0.9} }
          src={Avtar} className='w-10 h-10 rounded-full ml-6 cursor-pointer drop-shadow-xl' alt="user profile" />
        </div>
      </div>

      <div className='flex md:hidden w-full h-full'>
        {/* Mobile view content */}
        hii
      </div>
    </header>
  );
}
