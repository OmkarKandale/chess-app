import React from "react";
import BoardSquare from "./BoardSquare";

const Board = ({ board }) => {
	return (
		<div className="board">
			{board.flat().map((piece, i) => (
				<div key={i} className="square">
					<BoardSquare piece={piece} />
				</div>
			))}
		</div>
	);
};

export default Board;
