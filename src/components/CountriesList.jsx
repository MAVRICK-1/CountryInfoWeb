import { useEffect, useState } from 'react'
//import countriesData from '../countriesData'
import CountryCard from './CountryCard'
import ListShimmer from './ListShimmer'





// eslint-disable-next-line react/prop-types
export default function CountriesList({qurey}) {
  const [countriesData,setData]=useState([])
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all').
    then((res)=>res.json()).
    then((data)=>setData(data))

  },[])

  return countriesData.length===0?<ListShimmer/>:(
  <>

    {/* <input onChange={(e)=>setQurey(e.target.value.toLowerCase())}></input> */}
      <div className="countries-container">
          
        {countriesData.filter((country1) => country1.name.common.toLowerCase().includes(qurey)||country1.region.toLowerCase().includes(qurey)).map((country) => {
          
        return(
          
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population}
              region={country.region}
              capital={country.capital?.[0]}
              data={country}
            />
        
        )
        
          
        })}
      </div>
    </>
  )
}
