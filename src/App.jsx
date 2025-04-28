import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/log.jsx";
import { WINNING_COMBINATIONS } from "./WinningCombinations.js";

// Initial board is all nulls. Possible values are null, 'X' or 'O'
const initialBoard = [[null, null, null], [null, null, null], [null, null, null]];

// Deduces which player is active based on game turns
function deriveActivePlayer(gameTurns){
    let currentPlayer = 'X';
    if(gameTurns.length > 0 && gameTurns[0].player == 'X'){
      currentPlayer = 'O';
    }
  return currentPlayer;
}

function App() {  
  // Managing state of the game's turn data
  const [turnData, setTurnData] = useState([]);
  const activePlayer = deriveActivePlayer(turnData);

  // Determine board based on gameturns
let gameBoard = initialBoard;
for(const gameTurn of turnData){
    const {square, player} = gameTurn;
    const {row, col} = square;
    gameBoard[row][col] = player;
}

// Check for winning combinations
let winner = null;
for (const winState of WINNING_COMBINATIONS){
  const firstSquareSymbol = gameBoard[winState[0].row][winState[0].column];
  const secondSquareSymbol = gameBoard[winState[1].row][winState[1].column];
  const thirdSquareSymbol = gameBoard[winState[2].row][winState[2].column];

  // Set winner to symbol of player who won - first statement checks if first square is null or not
  if(firstSquareSymbol && firstSquareSymbol == secondSquareSymbol && firstSquareSymbol == thirdSquareSymbol){
    winner = firstSquareSymbol;
  }
}

  // 'Lifting state up' of currently active player, as it's used by both Player + GameBoard
  function handleSelectSquare(rowIndex, colIndex){

    // Keeps track of player turns for logging feature
    setTurnData(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      
      // Create a deep copy of existing turns
      // First param is a JS object consisting of square and player arguments
      const updatedTurns = [{square: {row: rowIndex, col: colIndex}, player: currentPlayer},...prevTurns];
      return updatedTurns;
    });
  }
  return (
   <main>
    <h1>Tic Tac Toe</h1>
    <div id="game-container">
      <ol id="players" className='highlight-player'>
        <Player initialName="Player 1" symbol="X" isActive={activePlayer == 'X'}/>
        <Player initialName="Player 2" symbol="O" isActive={activePlayer == 'O'}/>
      </ol>
      {winner && <p>Player {winner} has won!</p>}
      <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
    </div>
    <Log turns={turnData}/>
   </main>
  )
}

export default App
