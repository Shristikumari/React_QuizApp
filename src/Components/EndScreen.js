import React, { useState } from 'react'
import { useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/question';
export default function EndScreen() {
    const { score, setScore, setGameState } = useContext(QuizContext);
    const Restart = () => {
        setScore(0);
        setGameState("menu");
    }

    return (
        <div className='Endscreen'>
            <h1>Quiz Finished</h1>
            <h3>{score}/{Questions.length}</h3>
            <button onClick={() => { Restart() }}>Restart Quiz</button>
        </div>
    )
}
