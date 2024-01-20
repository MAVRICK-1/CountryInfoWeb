/* eslint-disable react/prop-types */
export default function SearchBar({setQurey}) {
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="Search for a country..."  onChange={(e)=>setQurey(e.target.value.toLowerCase())}></input>
    </div>
  )
}
