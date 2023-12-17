import SudokuModule from "../modules/sudokumodule/SudokuModule";

const SudokuGamePage = ({ gameMode, gameDifficulty, currentPage, setCurrentPage }) => {
    return (
        <div className="SudokuGamePage w-full h-full p-1 flex flex-col gap-1 justify-between">
            <SudokuModule gameMode={gameMode} gameDifficulty={gameDifficulty} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    )
}

export default SudokuGamePage;