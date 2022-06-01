import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts'
import "../App.css";
export default function Mainmenu() {
    const { gameState, setGameState } = useContext(QuizContext);
    return (
        <div className="menu">
            <button onClick={() => {
                setGameState("quiz");
            }}>Start Button</button>
        </div>
    )
}
