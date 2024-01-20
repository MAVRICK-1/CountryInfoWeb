import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'

import { useContext, useState } from 'react'
//import { useOutletContext } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContextcreateContext'



export default function Home() {
    const [qurey,setQurey]= useState("")
    //const [isDark]=useOutletContext()
    const [isDark] =useContext(ThemeContext)
    
    return (
        <main className={`${isDark?'dark':""}`}>
            <div className={`search-filter-container`}>
                <SearchBar setQurey={setQurey} />
                <SelectMenu setQuery={setQurey} />
            </div>
            {qurey==='unmount'?"":<CountriesList qurey={qurey}/>}
        </main>
    )
}
