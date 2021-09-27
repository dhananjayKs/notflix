import React from "react";
import './CSS/Card.css'
import { useDispatch } from "react-redux";
/*
Template
<Card src='' alt='pizza' prodName='Pizza' addCart={}/>
*/
export function Card(props){
     
    let dispatch=useDispatch()
    function onSelect(){                                            //Sets the data of  selected element in the redux store
        console.log('disp at card')
        dispatch({
            type:'SELECT',
            payload:{selected:props.data}
        })
        
        let component=props.data.title ? 'MovieDetails' : 'ShowDetails'         //Checks if the selected item is a movie or a TV show and selects the component to render
        let type=props.data.title ? 'Movie' : 'Show'                            //Selects the appropriate type to set the type of data stores
        dispatch({
            type:'SELECTED_TYPE',                                               //sets the data type ie movie or show
            payload:{selectedType:type}
        })
        props.select(props.data.id,component)                                   //Sends the id of the item and the type to the call back for creating the route for the page
    }
    
    return(
        <div className='product' onClick={onSelect} >
            <div className='cardImgCont'>
                <img className='cardImg'  src={`${props.baseUrl}${props.posterSize}${props.data.poster_path}`} alt={`${props.title}`} />  
            </div>
            
            <p className='name'>{props.title}</p>
            <p className='name'>{props.selected}</p>
        </div>
    )
}

