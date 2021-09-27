import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetails } from "./actions";
import './CSS/MovieDetails.css'



export function MovieDetails(props){
    const dispatch = useDispatch()
    const selected = useSelector(state => state.selected)
    useEffect(() => {
        let path=window.location.href                       // used to checks the entered url to check if the movie id for rendering of the appropriate data
        let id
        if(path.indexOf('MovieId=')!==-1){                  //checks if the id data is present in the url
            id=path.split('MovieId=')[1]                    //Splits the url path to get the id 
        }else{
            id=selected.id                                  //If no id is present in url the id from the selected item is choosen
        }

        console.log('id: '+id)
        dispatch(getDetails('movie',id))                    //Calls the get details action to set the Details of the selected 
                                                            //component after getting it from the server to the Redux store
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(selected,undefined,4)])              //set dependency array to the string, as setting it as an object will render it every time as the object address changes


    const details=useSelector(state=> state.movieDetails)                       //Getting the details of the selected movie
    console.log('details:' + JSON.stringify(details,undefined,4))
    let genres=details.genres.map(ele=>{
        return <span>{ele.title} </span>
    })
    let countries=details.production_countries.map(ele=>{
        return <span>{ele.title} </span>
    })
    let languages=details.spoken_languages.map(ele=>{
        return <span>{ele.english_name} </span>
    })
    let baseUrl=useSelector(state=>state.config.images.base_url)
    let posterSize='w342'                                                         //poster size for the main poster in the details page
    return(                                                                       //returns the component with all the data
        <div className="movieDetailsContainer">
            <div className='mainPosterContainer'>
                <img src={`${baseUrl}${posterSize}${details.poster_path}`} alt='' />
            </div>
            <div className="movieDetails">
                <div className='movieText'>
                    <p>Movie</p>
                    <h1>{details.title}</h1>
                    
                    <h2>{details.tagline}</h2>
                    <h2>Overview:</h2>
                    <p>{details.overview}</p>
                    <p><span className='lables'>Genres:</span> {genres}</p>
                    <p><span className='lables'>Budget:</span> ${details.budget}</p>
                    <p><span className='lables'>Language:</span> {languages}</p>
                    <p><span className='lables'>Countries:</span> {countries} </p>
                    <p><span className='lables'>Release Year:</span> {details.release_date.split('-')[0]}</p>
                    <p><span className='lables'>Rating:</span> {details.vote_average}/10</p>

                </div>
                
            </div>
        </div>
    )
}
