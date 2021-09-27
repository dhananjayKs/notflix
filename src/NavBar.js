import React from 'react'
import { SearchBar } from './SearchBar';
import {NavLink} from 'react-router-dom'
import './CSS/NavBar.css'

export const NavBar = () => {                                           //Used to create the navbar component
    return (
        <nav className="navBar">
            <NavLink to='/Movies' className='links'>Movies</NavLink>
            <NavLink to='/Tv' className='links'>Tv Shows</NavLink>
            <NavLink to='/Details' className='links'>Details</NavLink>
            <SearchBar/>
        </nav>
        
    )
}
