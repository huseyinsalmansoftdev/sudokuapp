import { useEffect, useState } from "react";
import SudokuGrid from '../../components/sudokugrid/SudokuGrid';
import NumPad from '../../components/numpad/NumPad';
import Loading from "../../components/loading/Loading";
import { SudokuContext } from "./SudokuContext";
import InGameTopBar from "../../components/ingametopbar/InGameTopBar";
import Fail from "../../components/fail/Fail";
import Success from "../../components/success/Success";

const SudokuModule = ({ gameMode, gameDifficulty, currentPage, setCurrentPage }) => {

    const [gameState, setGameState] = useState('loading');
    const [mistakesAllowed, setMistakesAllowed] = useState(3);
    const [mistakes, setMistakes] = useState(0);
    const [puzzleCells, setPuzzleCells] = useState(0);
    const [discoveredCells, setDiscoveredCells] = useState(-1);

    const [sudokuData, setSudokuData] = useState([
        { row: 1, col: 1, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 1, col: 2, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 1, col: 3, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 1, col: 4, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 1, col: 5, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 1, col: 6, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 1, col: 7, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 1, col: 8, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 1, col: 9, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 2, col: 1, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 2, col: 2, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 2, col: 3, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 2, col: 4, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 2, col: 5, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 2, col: 6, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 2, col: 7, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 2, col: 8, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 2, col: 9, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 3, col: 1, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 3, col: 2, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 3, col: 3, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 3, col: 4, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 3, col: 5, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 3, col: 6, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 3, col: 7, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 3, col: 8, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 3, col: 9, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 4, col: 1, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 4, col: 2, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 4, col: 3, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 4, col: 4, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 4, col: 5, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 4, col: 6, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 4, col: 7, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 4, col: 8, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 4, col: 9, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 5, col: 1, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 5, col: 2, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 5, col: 3, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 5, col: 4, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 5, col: 5, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 5, col: 6, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 5, col: 7, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 5, col: 8, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 5, col: 9, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 6, col: 1, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 6, col: 2, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 6, col: 3, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 6, col: 4, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 6, col: 5, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 6, col: 6, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 6, col: 7, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 6, col: 8, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 6, col: 9, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 7, col: 1, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 7, col: 2, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 7, col: 3, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 7, col: 4, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 7, col: 5, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 7, col: 6, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 7, col: 7, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 7, col: 8, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 7, col: 9, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 8, col: 1, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 8, col: 2, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 8, col: 3, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 8, col: 4, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 8, col: 5, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 8, col: 6, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 8, col: 7, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 8, col: 8, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 8, col: 9, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 9, col: 1, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 9, col: 2, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 9, col: 3, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 9, col: 4, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 9, col: 5, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 9, col: 6, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 9, col: 7, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 9, col: 8, value: null, solution: null, editable: null, markings: [], mode: null },
        { row: 9, col: 9, value: null, solution: null, editable: null, markings: [], mode: null },
    ]);

    const [selectedCell, setSelectedCell] = useState({ row: null, col: null });

    const updateCell = (row, col, newCellData) => {
        if (row !== null && col !== null) {
            const currentCell = getCell(selectedCell.row, selectedCell.col);

            const newSudokuData = [...sudokuData];
            const index = newSudokuData.findIndex(cell => row === cell.row && col === cell.col);
            if (newSudokuData[index].editable) {
                newSudokuData[index] = { ...newSudokuData[index], ...newCellData };
                setSudokuData(newSudokuData);
            }
        }
    }

    const getCell = (row, col) => {
        return sudokuData.find(cell => cell.row === row && cell.col === col);
    }

    useEffect(() => {
        const fetchSudokuData = async () => {
            try {
                const response = await fetch('http://localhost:5000/sudoku', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        mode: gameMode,
                        difficulty: gameDifficulty
                    }),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const payload = await response.json();
                const puzzle = payload.data.puzzle.split('');
                const solution = payload.data.solution.split('');

                const numberOfZeros = puzzle.filter(cell => cell === '0').length;
                setPuzzleCells(numberOfZeros);

                const newSudoku = sudokuData.map((cell, index) => {
                    return { ...cell, value: parseInt(puzzle[index]), solution: parseInt(solution[index]), editable: puzzle[index] !== '0' ? false : true, mode: 'pencil' }
                });

                setSudokuData(newSudoku);
                setTimeout(() => {
                    setGameState('ready');
                }, 1000);

            } catch (error) {
                console.log(error);
            }
        }

        fetchSudokuData();
    }, [])

    useEffect(() => {
        if (mistakes === mistakesAllowed) {
            setGameState('fail');
        }
    }, [mistakes]);

    useEffect(() => {
        if (puzzleCells !== 0 && puzzleCells === discoveredCells) {
            setGameState('success');
        }
    }, [discoveredCells]);

    return (
        <SudokuContext.Provider value={{ selectedCell, setSelectedCell, updateCell, getCell, mistakesAllowed, mistakes, setMistakes, puzzleCells, discoveredCells, setDiscoveredCells }}>
            <div className="SudokuGamePage w-full h-full p-1 flex flex-col gap-1 justify-between">
                {gameState === 'loading' && <Loading />}
                {gameState === 'ready' && [<InGameTopBar key={0} setCurrentPage={setCurrentPage} />, <SudokuGrid key={1} data={sudokuData} />, <NumPad key={2}/>]}
                {gameState === 'fail' && <Fail currentPage={currentPage} setCurrentPage={setCurrentPage} />}
                {gameState === 'success' && <Success currentPage={currentPage} setCurrentPage={setCurrentPage} />}
            </div>
        </SudokuContext.Provider>
    )
}

export default SudokuModule;