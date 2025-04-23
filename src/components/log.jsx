
// Logs actions of each player in the game
export default function Log({turns}){
    return (
        <ol id="log">
            {turns.map(turn => (
                // Backticks are string literals in JS
                <li key={`${turn.square.row}${turn.square.col}`}>
                    {turn.player} selected {turn.square.row},{turn.square.col}</li>
            ))}
        </ol>
    );
}