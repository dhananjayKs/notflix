import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetails } from "./actions";
//import './CSS/MovieDetails.css'

export function MovieDetails(props) {
	const dispatch = useDispatch();
	const selected = useSelector((state) => state.selected);
	useEffect(() => {
		let path = window.location.href; // used to checks the entered url to check if the movie id for rendering of the appropriate data
		let id;
		if (path.indexOf("MovieId=") !== -1) {
			//checks if the id data is present in the url
			id = path.split("MovieId=")[1]; //Splits the url path to get the id
		} else {
			id = selected.id; //If no id is present in url the id from the selected item is choosen
		}

		console.log("id: " + id);
		dispatch(getDetails("movie", id)); //Calls the get details action to set the Details of the selected
		//component after getting it from the server to the Redux store
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [JSON.stringify(selected, undefined, 4)]); //set dependency array to the string, as setting it as an object will render it every time as the object address changes

	const details = useSelector((state) => state.movieDetails); //Getting the details of the selected movie
	console.log("details:" + JSON.stringify(details, undefined, 4));
	let genres = details.genres.map((ele) => {
		return <span>{ele.title} </span>;
	});
	let countries = details.production_countries.map((ele) => {
		return <span>{ele.title} </span>;
	});
	let languages = details.spoken_languages.map((ele) => {
		return <span>{ele.english_name} </span>;
	});
	let baseUrl = useSelector((state) => state.config.images.base_url);
	let posterSize = "w500"; //poster size for the main poster in the details page
	return (
		//returns the component with all the data
		<div className="bg-blue-200  overflow-hidden w-full lg:grid-cols-2 lg:grid-rows-1 lg:grid md:grid md:grid-cols-1 md:grid-rows-2">
			<div className="lg:w-full grid mx-auto sm:w-4/5 bg-blue-100">
				<img className=" w-3/4 mx-auto my-auto border rounded-md " src={`${baseUrl}${posterSize}${details.poster_path}`} alt="" />
			</div>
			<div className="bg-slateblue text-blue-50 sm:w-4/5 sm:mx-auto sm:py-8">
				<div className="text-lg lg:mt-16 w-4/5 mx-auto px-5 ">
					<p className="text-2xl mt-2">Movie</p>
					<h1 className="text-4xl mt-2">{details.title}</h1>

					<h2 className="text-2xl mt-2">{details.tagline}</h2>
					<h2 className="mt-12 text-base mb-2">Overview:</h2>
					<p className="text-justify">{details.overview}</p>
					<p className="mt-2">
						<span className="w-32 inline-block">Genres:</span> {genres}
					</p>
					<p className="mt-2">
						<span className="w-32 inline-block">Budget</span>: ${details.budget}
					</p>
					<p className="mt-2">
						<span className="w-32 inline-block">Language:</span> {languages}
					</p>
					<p className="mt-2">
						<span className="w-32 inline-block">Countries:</span> {countries}{" "}
					</p>
					<p className="mt-2">
						<span className="w-32 inline-block">Release Year:</span> {details.release_date.split("-")[0]}
					</p>
					<p className="mt-2">
						<span className="w-32 inline-block">Rating:</span> {details.vote_average}/10
					</p>
				</div>
			</div>
		</div>
	);
}
