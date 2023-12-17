import { useState } from "react";
import SelectGameModePage from "./pages/SelectGameModePage";
import SelectGameDifficultyPage from "./pages/SelectGameDifficultyPage";
import SudokuGamePage from "./pages/SudokuGamePage";

const App = () => {

  const [gameMode, setGameMode] = useState(null);
  const [gameDifficulty, setGameDifficulty] = useState(null);

  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    <SelectGameModePage setGameMode={setGameMode} currentPage={currentPage} setCurrentPage={setCurrentPage} />,
    <SelectGameDifficultyPage setGameDifficulty={setGameDifficulty} currentPage={currentPage} setCurrentPage={setCurrentPage} />,
    <SudokuGamePage gameMode={gameMode} gameDifficulty={gameDifficulty} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
  ];

  return (
    <div className="App w-full h-full">
      {
        pages[currentPage]
      }
    </div>
  )
}

export default App;