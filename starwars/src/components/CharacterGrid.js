import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

export default function CharacterGrid() {
	const [char, setChar] = useState([]);
	// const [homeworld, setHomeworld] = useState([]);
	// const [films, setFilms] = useState([]);
	// const [starships, setStarships] = useState([]);

	useEffect(() => {
		axios
			.get(`https://swapi.co/api/people/`)
			.then(response => {
				console.log(response.data);
				console.log(response.data.results);
				setChar(response.data.results.name);
				// setHomeworld(response.data.homeworld);
				// setFilms(response.data.films);
				// setStarships(response.data.starships);
			})
			.catch(error => {
				console.log("I've got a bad feeling about this", error);
			});
	}, [char]);

	return (
		<div className="container">
			{char.map(item => {
				return (
					<CharacterCard
						getName={item}
						// getHomeworld={homeworld}
						// getFilms={films}
						// getStarships={starships}
					/>
				);
			})}
		</div>
	);
}
