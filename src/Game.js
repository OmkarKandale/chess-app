import * as Chess from "chess.js";
import { BehaviorSubject } from "rxjs";

const chess = new Chess();

export const gameSubject = new BehaviorSubject();

export const initGame = () => {
	updateGame();
};

export const handleMove = (from, to) => {
	move(from, to);
};

export const move = (from, to) => {
	const legalMove = chess.move({ from, to });
	if (legalMove) {
		updateGame();
	}
};

const updateGame = () => {
	const newGame = {
		board: chess.board(),
	};
	gameSubject.next(newGame);
};
