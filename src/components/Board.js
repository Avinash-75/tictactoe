import React from 'react';
import Square from './Square';

const Board = ({ board, handleSquareClick }) => {

  const renderPosition = position => {
    // custom Function
    return (
      <Square
        value={board[position]}
        onClick={() => handleSquareClick(position)}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderPosition(0)}
        {renderPosition(1)}
        {renderPosition(2)}
        {/* <Square  // instead of these 4 line code use-{renderposition(var)}
          value={board[0]}   // but we have to write this
          onClick={() => {   // in every Square component
            handleSquareClick();  // so it will be not good
          }}
        /> */}
      </div>
      <div className="board-row">
        {renderPosition(3)}
        {renderPosition(4)}
        {renderPosition(5)}
      </div>
      <div className="board-row">
        {renderPosition(6)}
        {renderPosition(7)}
        {renderPosition(8)}
      </div>
    </div>
  );
};

export default Board;
