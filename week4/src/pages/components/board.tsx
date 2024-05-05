import Square from './square'
import calculateWinner from '../utils/calculate-winner'
import {useState} from 'react';

interface boardProps {
    xIsNext: boolean;
    squares: ('X' | 'O' | null)[];
    onPlay : (squares : ('X' | 'O' | null)[]) => void;
}

const Board: React.FC<boardProps> = ({xIsNext, squares, onPlay}) => {
    
    const PLAYER1 = 'X'
    const PLAYER2 = 'O'

    function handleClick(index : number) {
      if (squares[index] || calculateWinner(squares)) {
        return;
      }
      const nextSquares = squares.slice();
      if (xIsNext) {
        nextSquares[index] = PLAYER1;
      } else {
        nextSquares[index] = PLAYER2;
      }
      onPlay(nextSquares);
    }
  
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next Player: ' + (xIsNext ? PLAYER1 : PLAYER2);
    }
    return (
      <>
        <div className="status">{status}</div>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </>
    );

}

export default Board