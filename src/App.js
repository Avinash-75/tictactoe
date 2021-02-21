import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helpers';

import './styles/root.scss';

const App = () => {

  const [board, setBoard] = useState(Array(9).fill(null)); // board is state and
  // setBoard is update function to update the values from null to X or O

  // console.log(setBoard);
  // console.log(board);

  // we need another state to keep track of next player just like above setBoard
  // isXNext = boolean value, represents current player
  // setisXNext = update function from O to X & X to O

  const [isXNext, setisXNext] = useState(false);

  const winner = calculateWinner(board);
  const Message = winner
  ? `Winner is ${winner}`
  : `Next player is ${isXNext ? 'X' : 'O' }`;

  const handleSquareClick = position => {
    if (board[position] || winner) {
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

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{Message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;
