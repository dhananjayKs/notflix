import React from 'react'
import { SearchBar } from './SearchBar';
import {NavLink} from 'react-router-dom'
import './CSS/NavBar.css'

export const NavBar = () => {                                           //Used to create the navbar component
    return (
        <nav className="sm:grid sm:grid-cols-6 sm:grid-rows-2 sm:h-16  lg:grid lg:grid-cols-12 lg:grid-rows-1 lg:h-8 w-full bg-slateblue">
            <NavLink to='/Movies' className='bg-slateblue text-center text-blue-50 sm:h-8 col-span-2'>Movies</NavLink>
            <NavLink to='/Tv' className='bg-slateblue text-center text-blue-50 col-span-2 sm:h-8'>Tv Shows</NavLink>
            <NavLink to='/Details' className='bg-slateblue text-center text-blue-50 sm:h-8  col-span-2'>Details</NavLink>
            <SearchBar/>
        </nav>
        
    )
}
