import { useState } from "react";
// Initial board is all nulls. Possible values are null, 'X' or 'O'
const initialBoard = [[null, null, null], [null, null, null], [null, null, null]];

export default function GameBoard({onSelectSquare, currSymbol}){
    // Manages state of gameboard
    const [gameBoard, setGameBoard] = useState(initialBoard);

    // Handles button click event of the game square
    function handleSelect(rowIndex, columnIndex){
        setGameBoard((prevBoard) => {
            // Arrays are immutable - create a deep copy and assign symbol to given square
            const updatedBoard = [...prevBoard.map(innerArr => [...innerArr])];
            updatedBoard[rowIndex][columnIndex] = currSymbol;
            return updatedBoard;
        });
        // This is the handleSelectSquare method from App.jsx
        onSelectSquare();
    }
    return (
        <ol id='game-board'>
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((symbol, columnIndex) => (
                            <li key={columnIndex}><button onClick={() => handleSelect(rowIndex, columnIndex)}>{symbol}</button></li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}