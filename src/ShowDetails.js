import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetails } from "./actions";
import './CSS/ShowDetails.css'

export function ShowDetails(props){
    const dispatch = useDispatch()
    const selected = useSelector(state => state.selected)                   //gets the selected item data
    const selectedType=useSelector(state=> state.selectedType)              //gets the selected data type

    useEffect(() => {
        let id
        let path=window.location.href                                       //checks is the id data is present to render the data
        if(path.indexOf('TvId=')!==-1){
            id=path.split('TvId=')[1]
        }else{
            if(selectedType==='Movie'){                                     //since the default data for the selected object is a movie 
                id=110309                                                   //loading the show details page will cause error when trying to fetch show data using movie id, so we set a default id 
            }else{
                id=selected.id                                              //if there is no info in the url and the item selected is a show the id is set
            }
            
        }

        
        console.log('id: '+id)
        dispatch(getDetails('tv',id))                                      //getting the details of the show from the server
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(selected,undefined,4)])                             //setting the dependency array item to a string

    

    const details=useSelector(state=> state.showDetails)                   //getting the data of the details fetched from store

    console.log('details:' + JSON.stringify(details,undefined,4))

    let genres=details.genres.map(ele=>{
        return <span>{ele.name}, </span>
    })
    let countries=details.production_countries.map(ele=>{
        return <span>{ele.name} </span>
    })
    let languages=details.spoken_languages.map(ele=>{
        return <span>{ele.english_name} </span>
    })
    let baseUrl=useSelector(state=>state.config.images.base_url)            //base url for the posters
    let posterSize='w342'
    return(
        <div className="showDetailsContainer">
            <div className='mainPosterContainer'>
                <img src={`${baseUrl}${posterSize}${details.poster_path}`} alt='' />
            </div>
            <div className="showDetails">
                <div className='showText'>
                    <p>TV Show</p>
                    <h1>{details.name}</h1>
                    <h2>{details.original_name}</h2>
                    <h2>{details.tagline}</h2>
                    <h2>Overview</h2>
                    <p>{details.overview}</p>
                    <p><span className='lables'>No. of Seasons:</span>{details.number_of_seasons}</p>
                    <p><span className='lables'>No. of Episodes:</span>{details.number_of_episodes}</p>
                    <p><span className='lables'>Genres: </span>{genres}</p>
                    <p><span className='lables'>Budget:</span> ${details.budget}</p>
                    <p><span className='lables'>Language:</span> {languages}</p>
                    <p><span className='lables'>Countries:</span> {countries} </p>
                    
                    <p><span className='lables'>Rating: </span>{details.vote_average}/10</p>

                </div>
                
            </div>
        </div>
    )
}
