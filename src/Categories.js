import React from "react";
import { Card } from "./Card";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//import "./CSS/Categories.css";
export function Categories(props) {
	const history = useHistory();
	function select(id, component) {
		let type = component === "MovieDetails" ? "MovieId" : "TvId"; //Uses the data sent from the lower component to decide the route for the new details component
		history.push(`${props.url}/${component}/${type}=${id}`); //Creates the route fot the details page and pushes it to the history api
	}

	let baseUrl = useSelector((state) => state.config.images.base_url); //Gets the base url for the images from the config object

	let cards = props.content.results.map((ele) => {
		//Creates the cards for each of the movie objects returned from the server
		return (
			<Card
				key={ele.title ? ele.title : ele.name}
				title={ele.title ? ele.title : ele.name}
				data={ele}
				baseUrl={baseUrl}
				select={select}
				posterSize="w185"
			/>
		);
	});
	return <div className="flex flex-wrap justify-center w-11/12 mx-auto z-0">{cards}</div>;
}
