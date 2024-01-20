/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ThemeContext= createContext('Theme')


export default function ThemeProvider({children}){
  console.log(children)
  const [isDark,setisDark]= useState(JSON.parse(localStorage.getItem('isDarkMode')))
  return(
  <ThemeContext.Provider value={[isDark,setisDark]}>
  
      {children}
  
  </ThemeContext.Provider>
  )
}