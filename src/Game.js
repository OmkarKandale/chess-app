import * as Chess from "chess.js";
import { BehaviorSubject } from "rxjs";

let promotion = "rnb2bnr/pppPkppp/8/4p3/7q/8/PPPP1PPP/RNBQKBNR w KQ - 1 5";

const chess = new Chess(promotion);

export const gameSubject = new BehaviorSubject();

export const initGame = () => {
	updateGame();
};

export const handleMove = (from, to) => {
	const promotions = chess
		.moves({ verbose: true })
		.filter((m) => m.promotion);
	// console.table(promotions);

	if (promotions.some((p) => `${p.from}: ${p.to}` === `${from}: ${to}`)) {
		const pendingPromotion = { from, to, color: promotions[0].color };
		updateGame(pendingPromotion);
	}
	const { pendingPromotion } = gameSubject.getValue();

	if (!pendingPromotion) {
		move(from, to);
	}
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
