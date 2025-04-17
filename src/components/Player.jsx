import { useState } from "react";
export default function Player({initialName, symbol, isActive}){
    // Managing state of player name(s) entered and if we are in edit mode for said names
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    // Handles button click of Edit
    function handleEdit(){
        setIsEditing(editing => !editing);
    }

    // Handles onChange event of name textbox
    function handleChange(event){
        setPlayerName(event.target.value);
    }

    // Show textbox if state isEditing
    let editableName = <span className="player-name">{playerName}</span>;
    if(isEditing){
        editableName = <input type="text" required value={playerName} onChange={handleChange} />
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editableName}
                <span className="player-symbol">{symbol}</span>
                <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
            </span>
        </li>
    );
}