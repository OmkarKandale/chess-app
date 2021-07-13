import React from "react";

const Piece = ({ piece: { type, color } }) => {
	const pieceImg = `./assets/${type}_${color}.png`;
	return (
		<div>
			<img src={pieceImg} alt="" />
		</div>
	);
};

export default Piece;
