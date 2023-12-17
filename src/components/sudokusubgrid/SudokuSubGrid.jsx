import SudokuGridCell from "../sudokugridcell/SudokuGridCell";

const SudokuSubGrid = ({ data }) => {
    return (
        <div className="SudokuSubGrid w-full h-full grid grid-cols-3 grid-rows-3 gap-0.5 border-2 border-gray-400 bg-gray-200">
            {
                Array.from({ length: 9 }, (_, index) => {
                    const { row, col, value, solution, editable, markings, mode } = data[index];
                    return <SudokuGridCell key={index} row={row} col={col} value={value} solution={solution} editable={editable} markings={markings} mode={mode}/>
                })
            }
        </div>
    )
}

export default SudokuSubGrid;