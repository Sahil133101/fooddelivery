import React from 'react'
import logo from '../Assests/logo.png'

export const Header = () => {
  return (
    <header className='fixed z-50 w-screen  p-6 px-16 '>
{/* 
      desktop */}
      <div className='hidden md:flex w-full h-full'>
        <div className='flex item-center gap-2'> 
        <img src= {logo} className='w-8 object-cover' alt= "logo"/>
        <p className='text-headingColor text-x1 font-bold'> City </p>  

        </div>

        <ul className='flex items-center gap-8 ml-auto'>
          <li className='text-base text-textcolor hover:text-headingColor duration-100 transtion-all ease-in-out cursor-pointer'>
            Home 
          </li>
          <li className='text base text-textcolor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
            Menu
            </li>
            <li className='text base text-textcolor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
              About Us
              </li>
              <li className='text base truncate text-textcolor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
                 Sevice
              </li>


        </ul>
</div>
      <div className='flex md:hidden w-full h-full'> 
      </div>
    </header>
  )
}
