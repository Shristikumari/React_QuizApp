import React, { useState, useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/question'
export default function Quiz() {
    const { score, setScore, setGameState } = useContext(QuizContext);
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [optionChosen, setOptionChosen] = useState("")

    const NextQuestion = () => {
        if (Questions[currentQuestion].asnwer == optionChosen) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
    };
    const finishQuiz = () => {
        if (Questions[currentQuestion].asnwer == optionChosen) {
            setScore(score + 1);
        }
        setGameState("endscreeen");
    }

    return (
        <div className='quiz'>
            <h1>{Questions[currentQuestion].prompt}</h1>
            <div className='option'>
                <button onClick={() => setOptionChosen("A")}>{Questions[currentQuestion].optionA}</button>
                <button onClick={() => setOptionChosen("B")}>{Questions[currentQuestion].optionB}</button>
                <button onClick={() => setOptionChosen("C")}>{Questions[currentQuestion].optionC}</button>
                <button onClick={() => setOptionChosen("D")}>{Questions[currentQuestion].optionD}</button>

            </div>
            {currentQuestion == Questions.length - 1 ? (
                <button onClick={() => { finishQuiz() }}>Finished Quiz</button>
            ) : (
                <button onClick={() => { NextQuestion() }}>Next Questions</button>
            )
            }
        </div>
    )
}
