import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import styled from "styled-components";

const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
`;

export default function CharacterGrid() {
	const [char, setChar] = useState([]);

	useEffect(() => {
		axios
			.get(`https://swapi.co/api/people/`)
			.then(response => {
				console.log(response.data);
				console.log(response.data.results);
				const newData = response.data.results;
				setChar(newData);
			})
			.catch(error => {
				console.log("I've got a bad feeling about this", error);
			});
	}, []);

	return (
		<CardContainer>
			{char.map(item => {
				return (
					<CharacterCard
						getName={item.name}
						getBirth={item.birth_year}
						getHair={item.hair_color}
						getEyes={item.eye_color}
						getHeight={item.height}
						getGender={item.gender}
					/>
				);
			})}
		</CardContainer>
	);
}
