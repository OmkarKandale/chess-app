import { useEffect, useState } from "react";
import "./App.css";
import { gameSubject } from "./Game";

const App = () => {
	const [board, setBoard] = useState([]);

	useEffect(() => {
		const subscribe = gameSubject.subscribe((game) => setBoard(game.board));
		return () => subscribe.unsubscribe();
	}, []);

	return <div></div>;
};

export default App;
