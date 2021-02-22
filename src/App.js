import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helpers';
import History from './components/History';

import './styles/root.scss';

const App = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: true },
  ]); // board is state and
  // setBoard is update function to update the values from null to X or O

  // console.log(setBoard);
  // console.log(board);

  // we need another state to keep track of next player just like above setBoard
  // isXNext = boolean value, represents current player
  // setisXNext = update function from O to X & X to O

  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];
  // console.log('hisotry', history);

  const [isXNext, setisXNext] = useState(false);

  const winner = calculateWinner(current.board);
  const Message = winner
    ? `Winner is ${winner}`
    : `Next player is ${current.isXNext ? 'X' : 'O'}`;

  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }

    setHistory(prev => {
      // prev -> previous state of the Board
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        }

        return square;
      });

      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });

    // setisXNext(prev => !prev);
    setCurrentMove(prev => prev + 1);
  };

  const moveTo = move => {
    setCurrentMove(move);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{Message}</h2>
      <Board board={current.board} handleSquareClick={handleSquareClick} />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};

export default App;
