import React from "react";
import './CSS/Page.css'

import {getTv} from './actions'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Categories} from './Categories'
import {useRouteMatch, } from "react-router-dom";

export function TvPage(props){
    
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(getTv())                                               //getting the tv data from the server 
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const {path,url}=useRouteMatch()
    console.log(path)

    
    let state=useSelector(state=>state.tv)
    
    let keys=Object.keys(state)
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
        <div >
            
            {categories}
        </div>
    )
}