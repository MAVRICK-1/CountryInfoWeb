/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */


//import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'

import { Outlet } from 'react-router-dom'
import ThemeProvider, { ThemeContext } from './contexts/ThemeContextcreateContext.jsx'



const App = () => {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  )
}

export default App