import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/log.jsx";

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
  const activePlayer = deriveActivePlayer(gameTurns);

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
        <Player initialName="Player 1" symbol="X" isActive={currPlayer == 'X'}/>
        <Player initialName="Player 2" symbol="O" isActive={currPlayer == 'O'}/>
      </ol>
      <GameBoard onSelectSquare={handleSelectSquare} turns={turnData}/>
    </div>
    <Log turns={turnData}/>
   </main>
  )
}

export default App
