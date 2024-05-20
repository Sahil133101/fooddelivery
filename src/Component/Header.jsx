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

        <ul className='flex items-center gap-8'>
          <li>
            Home 
          </li>
          <li>
            Menu
            </li>
            <li>
              About Us
              </li>
              <li>
                 Sevice
              </li>


        </ul>
</div>
      <div className='flex md:hidden w-full h-full'> 
      </div>
    </header>
  )
}
