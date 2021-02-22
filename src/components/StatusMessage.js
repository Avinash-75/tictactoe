import React from 'react';

const StatusMessage = ({ winner, current }) => {
  // const Message = winner
  //   ? `Winner is ${winner}`
  //   : `Next player is ${current.isXNext ? 'X' : 'O'}`;

  const noMovesLeft = current.board.every(el => el !== null);

  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-orange' : 'text-green'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          Next player is{' '}
          <span className={current.isXNext ? 'text-green' : 'text-orange'}>
            {current.isXNext ? 'X' : 'O'}{' '}
          </span>
        </>
      )}
      {!winner && noMovesLeft && (
        <>
          <span className="text-green">X</span> and{' '}
          <span className="text-orange">O</span> Tied
        </>
      )}
    </div>
  );
};

export default StatusMessage;
