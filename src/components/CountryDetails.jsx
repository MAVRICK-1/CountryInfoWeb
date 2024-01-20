/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { Link, useLocation, useParams } from 'react-router-dom'
import './CountryDetails.css'
import { useContext, useEffect, useState } from "react"
import ShrimmerCountrydetails from './ShrimmerCountrydetails'
import { ThemeContext } from '../contexts/ThemeContextcreateContext'


export default function CountryDetails() {
    //const isDark=useOutletContext()
    const [isDark] =useContext(ThemeContext)
    const [countryData,setData]=useState(null)
    const [Notfound,setNotfound]=useState(<ShrimmerCountrydetails/>)
    const params = useParams()
    const {state}=useLocation()
    const countryName=params.country
    function updatedCountrystate(data){
        setData({
            name:data.name.common,
            native: Object.values(data.name.nativeName)[0].common,
            population:data.population,
            region:data.region,
            subregion:data.subregion,
            capital:data.capital.join(' '),
            currency:Object.values(data.currencies)
            .map((currency) => currency.name).join(', '),
            tld:data.tld,
            img:data.flags.svg,
            languages:Object.values(data.languages).join(', '),
            borders:[]
        })
        if(!data.borders){
            data.borders=[]
        }
        Promise.all(data.borders.map((border)=>{
            return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((res) => res.json())
            .then(([borderCountry]) => borderCountry.name.common)
        })).
        then((borders)=>{
            setTimeout(()=> setData((previousstate)=>({...previousstate,borders})))
        })

    }
    useEffect(()=>{

        if(state){
            updatedCountrystate(state)
            return
        }
        fetch(`https://restcountries.com/v3.1/name/${countryName}/?fullText=true`).
        then((res)=>res.json()).
        then(([data])=>{
            setData({
                name:data.name.common,
                native: Object.values(data.name.nativeName)[0].common,
                population:data.population,
                region:data.region,
                subregion:data.subregion,
                capital:data.capital.join(' '),
                currency:Object.values(data.currencies)
                .map((currency) => currency.name).join(', '),
                tld:data.tld,
                img:data.flags.svg,
                languages:Object.values(data.languages).join(', '),
                borders:[]
            })
            if(!data.borders){
                data.borders=[]
            }
            Promise.all(data.borders.map((border)=>{
                return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                .then((res) => res.json())
                .then(([borderCountry]) => borderCountry.name.common)
            })).
            then((borders)=>{
                
                setTimeout(()=> setData((previousstate)=>({...previousstate,borders})))
            })
            
        }).catch((error)=>{
            console.log(error);
            setNotfound(<h1>Country Not Found</h1>)
        }
        )
    } ,[countryName]) //jokhon country name chance hobe page load hobe
    
    
    return countryData=== null?Notfound:(
        <>
            <main className={ isDark?'dark':" "}>
                
            <Link className="back-button" to="/" >
                        <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
                    </Link>
                    
                    <div className="country-details">
                    <img src={countryData.img} alt="" />
                    <div className="details-text-container">
                        <h1>{countryData.name}</h1>
                        <div className="details-text">
                        <p><b>Native Name: {countryData.native}</b><span className="native-name"></span></p>
                        <p><b>Population: {countryData.population} </b><span className="population"></span></p>
                        <p><b>Region: {countryData.region}</b><span className="region"></span></p>
                        <p><b>Sub Region: {countryData.subregion} </b><span className="sub-region"></span></p>
                        <p><b>Capital: {countryData.capital}</b><span className="capital"></span></p>
                        <p>
                            <b>Top Level Domain:  {countryData.tld}</b><span className="top-level-domain"></span>
                        </p>
                        <p><b>Currencies: {countryData.currency}</b><span className="currencies"></span></p>
                        <p><b>Languages: {countryData.languages} </b><span className="languages"></span></p>
                        </div>
                        {countryData.borders.length !==0? <div className="border-countries"><b>Border Countries: {
                            countryData.borders.map((border)=> <Link key={border}to={`/${border}`}>{border}</Link>) 
                            
                        } </b>&nbsp;</div>:""}
                    </div>
                    </div>
                    
            </main>
        </>
    )
}
