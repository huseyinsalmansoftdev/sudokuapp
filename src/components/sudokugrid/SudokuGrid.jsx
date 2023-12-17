import SudokuSubGrid from "../sudokusubgrid/SudokuSubGrid";

const SudokuGrid = ({ data }) => {
    return (
        <div className="SudokuGrid w-full aspect-square grid grid-cols-3 grid-rows-3 gap-0.5">
            {
                Array.from({ length: 9 }, (_, index) => {

                    const subGridId = index + 1;
                    const startRow = Math.floor((subGridId - 1) / 3) * 3 + 1;
                    const startCol = ((subGridId - 1) % 3) * 3 + 1;

                    const subGridData = data.filter(cell =>
                        cell.row >= startRow && cell.row < startRow + 3 &&
                        cell.col >= startCol && cell.col < startCol + 3
                    );

                    return <SudokuSubGrid key={index} data={subGridData} />
                })
            }
        </div>
    )
}

export default SudokuGrid;