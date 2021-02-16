import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); // board is state and
  // setBoard is update function to update the values from null to X or O

  // console.log(setBoard);
  // console.log(board);

  // we need another state to keep track of next player just like above setBoard
  // isXNext = boolean value, represents current player
  // setisXNext = update function from O to X & X to O

  const [isXNext, setisXNext] = useState(false);

  const handleSquareClick = position => {
    if (board[position]) {
      return;
    }

    setBoard(prev => {
      // prev -> previous state of the Board

      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : 'O';
        }

        return square;
      });
    });

    setisXNext(prev => !prev);
  };

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
