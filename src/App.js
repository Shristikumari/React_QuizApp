import './App.css';
import { useState, useContext } from "react";
import Mainmenu from './Components/Mainmenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';

import { QuizContext } from "./Helpers/Contexts"
function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h2>Quiz App</h2>
      <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
        {gameState === "menu" && <Mainmenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endscreeen" && <EndScreen />}

      </QuizContext.Provider>

    </div>
  );
}

export default App;
