import { useContext } from "react";
import { SudokuContext } from "../../modules/sudokumodule/SudokuContext";

const NumPadButton = ({ id, mode }) => {

    const { updateCell, getCell, selectedCell } = useContext(SudokuContext);

    const changeCell = (event) => {
        if (mode === 'pencil') {
            updateCell(selectedCell.row, selectedCell.col, { value: id, mode: 'pencil' });
        } else if (mode === 'marker') {
            const currentCell = getCell(selectedCell.row, selectedCell.col);
            const markings = currentCell.markings;
            const index = markings.indexOf(id);
            if (index >= 0) {
                markings.splice(index, 1);
            } else {
                markings.push(id);
            }
            updateCell(selectedCell.row, selectedCell.col, { markings: markings, mode: mode });
        }
    }

    return (
        <button onClick={changeCell} className="NumPadButton w-full aspect-square border-2 border-gray-400 flex justify-center items-center">{id}</button>
    )
}

export default NumPadButton;