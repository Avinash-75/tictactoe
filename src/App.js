import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helpers';
import History from './components/History';
import StatusMessage from './components/StatusMessage';

import './styles/root.scss';

const NEW_GAME = [{ board: Array(9).fill(null), isXNext: true }];

const App = () => {
  const [history, setHistory] = useState(NEW_GAME); // board is state and
  // setBoard is update function to update the values from null to X or O

  // console.log(setBoard);
  // console.log(board);

  // we need another state to keep track of next player just like above setBoard
  // isXNext = boolean value, represents current player
  // setisXNext = update function from O to X & X to O

  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];
  // console.log('hisotry', history);

  // const [isXNext, setisXNext] = useState(false);

  const { winner, winningSquares } = calculateWinner(current.board);

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

  const onNewGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>
        TIC <span className="text-green">TAC</span> TOE
      </h1>
      <StatusMessage winner={winner} current={current} />
      <Board
        board={current.board}
        handleSquareClick={handleSquareClick}
        winningSquares={winningSquares}
      />
      <button
        style={{ fontWeight: 'bold' }}
        type="button"
        onClick={onNewGame}
        className={`btn-reset ${winner ? 'active' : ''}`}
      >
        New Game
      </button>
      <h2 style={{ fontWeight: 'normal' }}>Current Game History</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
      <div className="bg-balls" />
    </div>
  );
};

export default App;
