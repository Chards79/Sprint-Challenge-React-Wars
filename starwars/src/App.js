import React from "react";
import "./App.css";
import CharacterGrid from "./components/CharacterGrid";

const App = () => {

	return (
		<div className="App">
			<h1 className="Header">React Wars</h1>
			<div className="Content">
				<CharacterGrid />
			</div>
		</div>
	);
};

export default App;
