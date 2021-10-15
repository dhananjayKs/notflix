let config = {
	//Default Configuration data
	images: { 
		base_url: "http://image.tmdb.org/t/p/",
		secure_base_url: "https://image.tmdb.org/t/p/",
		backdrop_sizes: ["w300", "w780", "w1280", "original"],
		logo_sizes: ["w45", "w92", "w154", "w185", "w300", "w500", "original"],
		poster_sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
		profile_sizes: ["w45", "w185", "h632", "original"],
		still_sizes: ["w92", "w185", "w300", "original"],
	},
	change_keys: [
		"adult",
		"air_date",
		"also_known_as",
		"alternative_titles",
		"biography",
		"birthday",
		"budget",
		"cast",
		"certifications",
		"character_names",
		"created_by",
		"crew",
		"deathday",
		"episode",
		"episode_number",
		"episode_run_time",
		"freebase_id",
		"freebase_mid",
		"general",
		"genres",
		"guest_stars",
		"homepage",
		"images",
		"imdb_id",
		"languages",
		"name",
		"network",
		"origin_country",
		"original_name",
		"original_title",
		"overview",
		"parts",
		"place_of_birth",
		"plot_keywords",
		"production_code",
		"production_companies",
		"production_countries",
		"releases",
		"revenue",
		"runtime",
		"season",
		"season_number",
		"season_regular",
		"spoken_languages",
		"status",
		"tagline",
		"title",
		"translations",
		"tvdb_id",
		"tvrage_id",
		"type",
		"video",
		"videos",
	],
};		
let defMovies = {
	//Default movies data
	top_rated: {
		page: 1,
		results: [
			{
				adult: false,
				backdrop_path: "/mHU833IrBRfZ3hhzEQsiiw2D8Nc.jpg",
				genre_ids: [27, 53],
				id: 565028,
				original_language: "en",
				original_title: "Candyman",
				overview:
					"Anthony and his partner move into a loft in the now gentrified Cabrini-Green, and after a chance encounter with an old-timer exposes Anthony to the true story behind Candyman, he unknowingly opens a door to a complex past that unravels his own sanity and unleashes a terrifying wave of violence.",
				popularity: 993.93,
				poster_path: "/dqoshZPLNsXlC1qtz5n34raUyrE.jpg",
				release_date: "2021-08-25",
				title: "Candyman",
				video: false,
				vote_average: 6.6,
				vote_count: 311,
			},
		],
		total_pages: 0,
		total_results: 0,
	},
	popular: {
		page: 1,
		results: [
			{
				adult: false,
				backdrop_path: "/mHU833IrBRfZ3hhzEQsiiw2D8Nc.jpg",
				genre_ids: [27, 53],
				id: 565028,
				original_language: "en",
				original_title: "Candyman",
				overview:
					"Anthony and his partner move into a loft in the now gentrified Cabrini-Green, and after a chance encounter with an old-timer exposes Anthony to the true story behind Candyman, he unknowingly opens a door to a complex past that unravels his own sanity and unleashes a terrifying wave of violence.",
				popularity: 993.93,
				poster_path: "/dqoshZPLNsXlC1qtz5n34raUyrE.jpg",
				release_date: "2021-08-25",
				title: "Candyman",
				video: false,
				vote_average: 6.6,
				vote_count: 311,
			},
		],
		total_pages: 0,
		total_results: 0,
	},
	upcoming: {
		dates: {
			maximum: "2021-10-18",
			minimum: "2021-10-01",
		},
		page: 1,
		results: [
			{
				adult: false,
				backdrop_path: "/mHU833IrBRfZ3hhzEQsiiw2D8Nc.jpg",
				genre_ids: [27, 53],
				id: 565028,
				original_language: "en",
				original_title: "Candyman",
				overview:
					"Anthony and his partner move into a loft in the now gentrified Cabrini-Green, and after a chance encounter with an old-timer exposes Anthony to the true story behind Candyman, he unknowingly opens a door to a complex past that unravels his own sanity and unleashes a terrifying wave of violence.",
				popularity: 993.93,
				poster_path: "/dqoshZPLNsXlC1qtz5n34raUyrE.jpg",
				release_date: "2021-08-25",
				title: "Candyman",
				video: false,
				vote_average: 6.6,
				vote_count: 311,
			},
		],
		total_pages: 0,
		total_results: 0,
	},
};
let defTv = {
	//Default shows data
	popular: {
		page: 1,
		results: [
			{
				backdrop_path: "/7UKgB00W2zFeNQl42SJ3XkJXtql.jpg",
				first_air_date: "2019-01-11",
				genre_ids: [Array],
				id: 81356,
				name: "Sex Education",
				origin_country: [Array],
				original_language: "en",
				original_name: "Sex Education",
				overview:
					"Inexperienced Otis channels his sex therapist mom when he teams up with rebellious Maeve to set up an underground sex therapy clinic at school.",
				popularity: 4498.108,
				poster_path: "/8j12tohv1NBZNmpU93f47sAKBbw.jpg",
				vote_average: 8.4,
				vote_count: 4513,
			},
		],
		total_pages: 500,
		total_results: 10000,
	},
	on_the_air: {
		page: 1,
		results: [
			{
				backdrop_path: "/4N6zEMfZ57zNEQcM8gWeERFupMv.jpg",
				first_air_date: "2021-08-11",
				genre_ids: [Array],
				id: 91363,
				name: "What If...?",
				origin_country: [Array],
				original_language: "en",
				original_name: "What If...?",
				overview:
					"Taking inspiration from the comic books of the same name, each episode explores a pivotal moment from the Marvel Cinematic Universe and turns it on its head, leading the audience into uncharted territory.",
				popularity: 2445.405,
				poster_path: "/lztz5XBMG1x6Y5ubz7CxfPFsAcW.jpg",
				vote_average: 8.6,
				vote_count: 1801,
			},
		],
		total_pages: 52,
		total_results: 1032,
	},
	top_rated: {
		page: 1,
		results: [
			{
				backdrop_path: "/o95eGnHVI4iIPrU5zJliL1KPQkU.jpg",
				first_air_date: "2021-09-03",
				genre_ids: [Array],
				id: 130392,
				name: "The D'Amelio Show",
				origin_country: [Array],
				original_language: "en",
				original_name: "The D'Amelio Show",
				overview:
					"From relative obscurity and a seemingly normal life, to overnight success and thrust into the Hollywood limelight overnight, the D’Amelios are faced with new challenges and opportunities they could not have imagined.",
				popularity: 33.674,
				poster_path: "/z0iCS5Znx7TeRwlYSd4c01Z0lFx.jpg",
				vote_average: 9.5,
				vote_count: 2405,
			},
		],
		total_pages: 103,
		total_results: 2043,
	},
};
let showDetails = {
	////Default show details data
	backdrop_path: "/7UKgB00W2zFeNQl42SJ3XkJXtql.jpg",
	created_by: [
		{
			id: 2099609,
			credit_id: "5b657a300e0a267ef4072d27",
			name: "Laurie Nunn",
			gender: 1,
			profile_path: null,
		},
	],
	episode_run_time: [50, 60],
	first_air_date: "2019-01-11",
	genres: [
		{ id: 35, name: "Comedy" },
		{ id: 18, name: "Drama" },
	],
	homepage: "https://www.netflix.com/title/80197526",
	id: 81356,
	in_production: true,
	languages: ["en"],
	last_air_date: "2021-09-17",
	last_episode_to_air: {
		air_date: "2021-09-17",
		episode_number: 8,
		id: 3099443,
		name: "",
		overview:
			"As a new day dawns, Moordale's fate hangs in the balance. Aimee spills. Eric confesses. Otis haunts the hospital. Honesty matters now, more than ever.",
		production_code: "",
		season_number: 3,
		still_path: "/gPUI3MGqdiaFuBjJ3YVBrF70bjD.jpg",
		vote_average: 8,
		vote_count: 1,
	},
	name: "Education",
	next_episode_to_air: null,
	networks: [
		{
			name: "Netflix",
			id: 213,
			logo_path: "/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",
			origin_country: "",
		},
	],
	number_of_episodes: 24,
	number_of_seasons: 3,
	origin_country: ["GB"],
	original_language: "en",
	original_name: "Sex Education",
	overview:
		"Inexperienced Otis channels his sex therapist mom when he teams up with rebellious Maeve to set up an underground sex therapy clinic at school.",
	popularity: 4136.961,
	poster_path: "/8j12tohv1NBZNmpU93f47sAKBbw.jpg",
	production_companies: [
		{
			id: 34666,
			logo_path: null,
			name: "Eleven Films",
			origin_country: "",
		},
	],
	production_countries: [{ iso_3166_1: "GB", name: "United Kingdom" }],
	seasons: [
		{
			air_date: "2019-01-11",
			episode_count: 8,
			id: 107288,
			name: "Season 1",
			overview:
				"Insecure Otis has all the answers when it comes to sex advice, thanks to his therapist mom. So rebel Maeve proposes a school sex-therapy clinic.",
			poster_path: "/u3eoZguH2tqLLKqRqWjvisF0d2U.jpg",
			season_number: 1,
		},
		{
			air_date: "2020-01-17",
			episode_count: 8,
			id: 136055,
			name: "Season 2",
			overview:
				"Otis finally loosens up—often and epically—but the pressure’s on to perform as chlamydia hits the school and mates struggle with new issues.",
			poster_path: "/rdcY9VJ5uVsCvCxdHoyZzXtKp2E.jpg",
			season_number: 2,
		},
		{
			air_date: "2021-09-17",
			episode_count: 8,
			id: 158823,
			name: "Season 3",
			overview:
				'Word of the "sex school" gets out as a new head teacher tries to control a rambunctious student body and Otis attempts to hide his secret hookup.',
			poster_path: "/8j12tohv1NBZNmpU93f47sAKBbw.jpg",
			season_number: 3,
		},
	],
	spoken_languages: [{ english_name: "English", iso_639_1: "en", name: "English" }],
	status: "Returning Series",
	tagline: "Growth is a group project.",
	type: "Scripted",
	vote_average: 8.4,
	vote_count: 4552,
};

let movieDetails = {
	//Default movie details data
	adult: false,
	backdrop_path: "/7XZsVVnqTsMJXg3J4CHzeV2Lro9.jpg",
	belongs_to_collection: null,
	budget: 5300000,
	genres: [
		{
			id: 28,
			name: "Action",
		},
		{
			id: 35,
			name: "Comedy",
		},
		{
			id: 18,
			name: "Drama",
		},
	],
	homepage: "",
	id: 663870,
	imdb_id: "tt11655202",
	original_language: "da",
	original_title: "Retfærdighedens ryttere",
	overview:
		"Markus, a deployed military man, has to go home to his teenage daughter, Mathilde, when his wife dies in a tragic train accident. It seems to be plain bad luck - but it turns out that it might have been a carefully orchestrated assassination, which his wife ended up being a random casualty of.",
	popularity: 24.432,
	poster_path: "/sshNnwmQLk720iBQ0dZg3GVGKfK.jpg",
	production_companies: [
		{
			id: 8288,
			logo_path: null,
			name: "Zentropa International Sweden",
			origin_country: "SE",
		},
		{
			id: 2801,
			logo_path: "/bswb1PLLsKDUXMLgy42bZtCtIde.png",
			name: "Film i Väst",
			origin_country: "SE",
		},
		{
			id: 76,
			logo_path: "/nebkQYtQKhZyHJfh5v0oGpNbPzu.png",
			name: "Zentropa Entertainments",
			origin_country: "DK",
		},
	],
	production_countries: [
		{
			iso_3166_1: "DK",
			name: "Denmark",
		},
		{
			iso_3166_1: "SE",
			name: "Sweden",
		},
	],
	release_date: "2020-11-19",
	revenue: 679505,
	runtime: 116,
	spoken_languages: [
		{
			english_name: "Danish",
			iso_639_1: "da",
			name: "Dansk",
		},
	],
	status: "Released",
	tagline: "Nothing Is Random",
	title: "Riders of Justice",
	video: false,
	vote_average: 7.4,
	vote_count: 184,
};
let selected = {
	///Default selected item data
	adult: false,
	backdrop_path: "/mHU833IrBRfZ3hhzEQsiiw2D8Nc.jpg",
	genre_ids: [27, 53],
	id: 565028,
	original_language: "en",
	original_title: "Candyman",
	overview:
		"Anthony and his partner move into a loft in the now gentrified Cabrini-Green, and after a chance encounter with an old-timer exposes Anthony to the true story behind Candyman, he unknowingly opens a door to a complex past that unravels his own sanity and unleashes a terrifying wave of violence.",
	popularity: 993.93,
	poster_path: "/dqoshZPLNsXlC1qtz5n34raUyrE.jpg",
	release_date: "2021-08-25",
	title: "Candyman",
	video: false,
	vote_average: 6.6,
	vote_count: 311,
};

let search = {
	//Default search data
	page: 1,
	results: [
		{
			adult: false,
			backdrop_path: null,
			genre_ids: [Array],
			id: 385687,
			media_type: "movie",
			original_language: "en",
			original_title: "Fast & Furious 10",
			overview: "The tenth installment in the Fast Saga.",
			popularity: 152.436,
			poster_path: "/2DyEk84XnbJEdPlGF43crxfdtHH.jpg",
			release_date: "2023-04-06",
			title: "Fast & Furious 10",
			video: false,
			vote_average: 0,
			vote_count: 0,
		},
	],
	total_pages: 34,
	total_results: 673,
};

let selectedType = "Movie"; ///Default selected item data type

let data = {
	//default data object
	movies: defMovies,
	tv: defTv,
	config,
	selected,
	showDetails,
	movieDetails,
	search,
	selectedType,
};

export function reducer(state = data, action) {
	if (action.type === "SELECT") {
		//set selected item data reducer
		return { ...state, selected: action.payload.selected };
	}
	if (action.type === "FETCH_MOVIES") {
		////set fetched movie data reducer
		return { ...state, movies: action.payload };
	}
	if (action.type === "FETCH_TV") {
		//set fetched show data reducer
		return { ...state, tv: action.payload };
	}
	if (action.type === "FETCH_TV") {
		return { ...state, tv: action.payload };
	}
	if (action.type === "FETCH_CONFIG") {
		//set fetched Configuration data reducer
		return { ...state, config: action.payload };
	}
	if (action.type === "TV_SHOW_DETAILS") {
		//set fetched tv Show data reducer
		return {
			...state,
			showDetails: action.payload,
		};
	}
	if (action.type === "MOVIE_DETAILS") {
		//set fetched movie data reducer
		return {
			...state,
			movieDetails: action.payload,
		};
	}
	if (action.type === "SEARCH") {
		////set fetched search data reducer
		return {
			...state,
			search: action.payload,
		};
	}
	if (action.type === "SELECTED_TYPE") {
		//set selected item data type reducer
		return { ...state, selectedType: action.payload.selectedType };
	}

	return state;
}
