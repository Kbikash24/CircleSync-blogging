import React from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";

const Search = ({setIsSearch,setSearchInput}) => {
  return (
    <div className='flex items-center'><input
    placeholder="search here"
    className="outline-none px-2 py-1 bg-white  text-[15px] from-fuchsia-500 "
    onChange={(e)=>setSearchInput(e.target.value)}
  ></input><IoIosCloseCircleOutline size={25} onClick={()=>{setIsSearch(false); 
    setSearchInput("");}}/></div>
  )
}

export default Search