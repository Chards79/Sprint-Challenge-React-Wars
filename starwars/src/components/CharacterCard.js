import React from "react";
import styled from "styled-components";

const Card = styled.div`
	background: lightblue;
	color: black;
	width: 500px;
	height: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	margin: 20px;
`;

const CharacterCard = props => {
	return (
		<Card>
			<h1>{props.getName}</h1>
			{/* <h3>{props.getHomeworld}</h3>
			<div className="text">
				<p>{props.getFilms}</p>
				<p>{props.getStarships}</p>
			</div> */}
		</Card>
	);
};

export default CharacterCard;
