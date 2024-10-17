import { useState } from "react"

export default function Team(){
    
    const [player, setPlayer] = useState(11);

    const handleAdd = () =>{
        const newPlayer = player + 1;
        setPlayer(newPlayer)
    }
    const handleRemove =() => {
        const removePlayer = player - 1;
        setPlayer(removePlayer);
    }
    const stylePlayer = {
        margin: "20px",
        padding: '20px',
        border: '2px solid green',
        borderRadius: '20px'
    }
    return (
        <div style={stylePlayer}>
            <h4>Player: {player}</h4>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}