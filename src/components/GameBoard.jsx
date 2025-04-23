// Initial board is all nulls. Possible values are null, 'X' or 'O'
const initialBoard = [[null, null, null], [null, null, null], [null, null, null]];

export default function GameBoard({onSelectSquare, turns}){
    let gameBoard = initialBoard;
    for(const gameTurn of turns){
        const {square, player} = gameTurn;
        const {row, col} = square;
        gameBoard[row][col] = player;
    }
    return (
        <ol id='game-board'>
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((symbol, columnIndex) => (
                            <li key={columnIndex}><button onClick={() => onSelectSquare(rowIndex, columnIndex)}>{symbol}</button></li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}