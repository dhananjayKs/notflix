import React from "react";
//import './CSS/SearchCard.css'
export function SearchCard(props) {
	function onSelect() {
		//sends the id and type data back to the parent component
		console.log("click");
		props.onSelect(props.data.media_type, props.data.id);
	}
	return (
		<div className="h-28 w-full grid grid-cols-12 place-items-center border border-blue-200 bg-blue-50" onClick={onSelect} >
			<div className="inline-block h-24  overflow-hidden col-span-2 ">
				<img
					className=" h-24 mx-auto"
					src={`${props.base_url}${props.imgSize}${props.data.poster_path}`}
					alt={`${props.data.name ? props.data.name : props.data.title}`}
				></img>
			</div>
			<div className="col-span-8 text-center border-blue-200">
				<p>{props.data.name ? props.data.name : props.data.title}</p>
			</div>
			<div className="col-span-2 text-center ">
				<p className=" ">{props.data.vote_average}/10</p>
			</div>
		</div>
	);
}
