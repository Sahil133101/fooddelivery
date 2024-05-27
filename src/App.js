import React from 'react';
import { Header } from './Component/Header';
import { Route, Routes } from 'react-router-dom';
import  {AnimatePresence } from "framer-motion"; 
import MainContainer from './Component/MainContainer';
import Createitem from './createitem';
export default function App() { 
  return (
    <AnimatePresence>
      
<div className='w-screen h-auto flex flex-col bg-primary'>

<Header/>
<main  className='mt-24 p-8  z-10    w-full '> </main> 
<Routes>
  <Route path= '/' element={<MainContainer /> } /> 
  <Route path= '/Createitem' element={<Createitem/>}/>  
</Routes>
</div>

</AnimatePresence> 
  )
} 