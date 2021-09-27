import React from "react";

import './CSS/Page.css'
import {getMovies} from './actions'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Categories} from './Categories'
import { useRouteMatch, } from "react-router-dom";


export function MoviesPage(props){
    
    
    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(getMovies())                                           //using dispatch with the action to retrive the movies data from the server
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    // eslint-disable-next-line no-unused-vars
    const {path,url}=useRouteMatch()                                    //used to get the route to set neated routes

    let state=useSelector(state=>state.movies)
    console.log(state)
    let keys=Object.keys(state)                                         //Getting the categories of movies retrived
    let categories=keys.map(ele=>{
        console.log(state[ele] )
        return (
            <div>
                <h1 className='categoryName'>{ele}</h1>
                <Categories url={url} content={state[ele]} cat={ele}/>                 
            </div>
        )
    })
    return(
        <div>
            {categories}
        </div>
    )
}