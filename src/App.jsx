import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
function App() {
  // Managing state of currently active player (X or O player)
  const [currPlayer, setCurrPlayer] = useState('X');

  // 'Lifting state up' of currently active player, as it's used by both Player + GameBoard
  // Changes which player is currently active depending on previous state
  function handleSelectSquare(){
    setCurrPlayer((currentPlayerSymbol) => currentPlayerSymbol == 'X' ? 'O' : 'X');
  }
  return (
   <main>
    <h1>Tic Tac Toe</h1>
    <div id="game-container">
      <ol id="players" className='highlight-player'>
        <Player initialName="Player 1" symbol="X" isActive={currPlayer == 'X'}/>
        <Player initialName="Player 2" symbol="O" isActive={currPlayer == 'O'}/>
      </ol>
      <GameBoard onSelectSquare={handleSelectSquare} currSymbol={currPlayer}/>
    </div>
    LOG
   </main>
  )
}

export default App
