import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSearch } from "./actions";
import { SearchCard } from "./SearchCard";
import { useHistory } from "react-router-dom";
//import "./CSS/SearchBar.css";

export function SearchBar(props) {
	const [value, setValue] = useState("");

	const dispatch = useDispatch();

	const history = useHistory();

	function onChange(event) {
		//Set value typed in input to state
		setValue(event.target.value);
	}
	function clearText() {
		//Clears the value data in the state
		setValue("");
	}

	function onSelect(media, id) {
		// function that is handed to the search items to retrive the id and the media type of the selected component
		if (media === "tv") {
			console.log("Tv");
			history.push(`/Tv/ShowDetails/TvId=${id}`); //pushes the data to history api, which will cause the details component to render the data
		} else {
			console.log("movie");
			history.push(`/Movies/MovieDetails/MovieId=${id}`); //pushes the data to history api, which will cause the details component to render the data
		}
	}

	useEffect(() => {
		console.log("changes");
		dispatch(getSearch(value)); //rerenders the search data on change in input field

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	let base_url = useSelector((state) => state.config.images.base_url); //base url for image
	let results = useSelector((state) => state.search.results); //selects the results of the search that is stored in the redux store
	let searchCards;
	if (results) {
		//checks if results are present and creats the search component
		searchCards = results.map((ele) => {
			return (
				<SearchCard data={ele} base_url={base_url} imgSize={"w92"} onSelect={onSelect} />
			);
		});
	}

	return (
		<div className="mx-auto sm:col-span-4 lg:col-start-8 lg:col-end-12 bg-blue-100 w-full sm:h-8 sm:mx-auto sm:col-start-2 ">
			<input
				type="text"
				placeholder="Search for Movies, Tv ...."
				onChange={onChange}
				value={value}
				className=" max-w-lg inline-block sm:h-8 w-full col-span-1 row-span-1 overflow-x-hidden"
				onBlur={clearText}
			/>
			<div className="bg-blue-50 w-full max-w-lg max-h-96 focus:z-10 overflow-scroll overflow-x-hidden">
				{searchCards ? searchCards : ""}
			</div>
		</div>
	);
}
//onBlur={clearText}
