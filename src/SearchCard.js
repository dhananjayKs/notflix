import React from "react";
import './CSS/SearchCard.css'
export function SearchCard(props){
    function onSelect(){                                                    //sends the id and type data back to the parent component 
        console.log('click')
        props.onSelect(props.data.media_type , props.data.id)               
    }
    return(
        <div className='searchCard' onClick={onSelect}>
            <div className='searchImgCont'>
                <img src={`${props.base_url}${props.imgSize}${props.data.poster_path}`}  alt={`${props.data.name ? props.data.name : props.data.title}`}></img>
            </div>
            <p className='searchCardTitle'>{props.data.name ? props.data.name : props.data.title}</p>
            <p className="searchCardScore">{props.data.vote_average}/10</p>
        </div>
    )
}

