export default function GameBoard({onSelectSquare, board}){

    return (
        <ol id='game-board'>
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((symbol, columnIndex) => (
                            <li key={columnIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, columnIndex)} disabled={symbol != null}>{symbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}