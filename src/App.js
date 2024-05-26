import React from 'react';
import { Header } from './Component/Header';
import { Route, Routes } from 'react-router-dom';
import createitem from './createitem';
import MainContainer from './Component/MainContainer';
export default function App() { 
  return (
<div className='w-screen h-auto flex flex-col bg-primary'>

<Header/>
<main  className='mt-24 p-8  z-10    w-full '> Main Container  </main> 
<Routes>
  <Route path= '/' element={<MainContainer /> } /> 
  <Route path= '/createitem' element={<createitem  /> } />  
</Routes>
</div>
  )
} 