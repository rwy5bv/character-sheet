import { useState } from 'react';
import './App.css';

//React Components have to start with uppercase, while jsx tags have to start with lowercase.
//arguments are called props in this, have to pass arguments in object
function Square({value, handleClick}) {
  //Initial state, function updating state
  
  return (
    <button className="square" onClick={handleClick}>{value}</button>
  )
}

function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }


  function handleClick(i) {
    //copies array, make copy to maintain immutability
    const nextSquares = squares.slice();
    if(squares[i] || calculateWinner(squares)){
      return;
    }
    if (xIsNext){
      nextSquares[i] = "X";
    } 
    else{
      nextSquares[i] = "O";
    }
    setXIsNext(!xIsNext);
    setSquares(nextSquares);
  }
  //cannot just use handleClick = function without arrow function, as the React DOM renders the function
  //Immediately, leading to infinite re-rendering loop.
  return (<>
    <div className = "status">{status}</div>
    <div className="board-row">
      <Square value={squares[0]} handleClick = {() => handleClick(0)}/>
      <Square value={squares[1]} handleClick = {() => handleClick(1)}/>
      <Square value={squares[2]} handleClick = {() => handleClick(2)}/>
    </div>
    <div className="board-row">
      <Square value={squares[3]} handleClick = {() => handleClick(3)}/>
      <Square value={squares[4]} handleClick = {() => handleClick(4)}/>
      <Square value={squares[5]} handleClick = {() => handleClick(5)}/>
    </div>
    <div className="board-row">
      <Square value={squares[6]} handleClick = {() => handleClick(6)}/>
      <Square value={squares[7]} handleClick = {() => handleClick(7)}/>
      <Square value={squares[8]} handleClick = {() => handleClick(8)}/>
    </div>
  </>);

}

export function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;
