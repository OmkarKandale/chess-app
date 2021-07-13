import React from "react";

const Board = ({ board }) => {
	return (
		<div className="board">
			{board.flat().map((piece, i) => (
				<div key={i} className="square">
					<p>{JSON.stringify(piece)}</p>
				</div>
			))}
		</div>
	);
};

export default Board;
