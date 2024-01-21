import CountriesList from './CountriesList'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'

import { useContext, useState } from 'react'
//import { useOutletContext } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContextcreateContext'
//import useWindowSize from '../hooks/utility'



export default function Home() {
    const [qurey,setQurey]= useState("")
    //const [isDark]=useOutletContext()
    const [isDark] =useContext(ThemeContext)
    //const windows=useWindowSize()
    
    return (
        <main className={`${isDark?'dark':""}`}>
            <div className={`search-filter-container`}>
                <SearchBar setQurey={setQurey} />
                <SelectMenu setQuery={setQurey} />
            </div>
            {/* <h1 style={{textAlign:'center'}}>{windows.width}x{windows.height}</h1> */}
            {qurey==='unmount'?"":<CountriesList qurey={qurey}/>}
        </main>
    )
}
