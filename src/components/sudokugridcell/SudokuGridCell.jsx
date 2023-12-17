import { useContext, useEffect } from "react";
import { SudokuContext } from "../../modules/sudokumodule/SudokuContext";
import CellPencilDisplay from "../cellpencildisplay/CellPencilDisplay";
import CellMarkerDisplay from "../cellmarkerdisplay/CellMarkerDisplay";

const SudokuGridCell = ({ row, col, value, solution, editable, markings, mode }) => {

    const { selectedCell, setSelectedCell, updateCell, mistakes, setMistakes, discoveredCells, setDiscoveredCells } = useContext(SudokuContext);

    const onClickHandler = () => {
        setSelectedCell({ row: row, col: col });
    }

    useEffect(() => {
        if (value) {
            if (value === solution) {
                setDiscoveredCells(discoveredCells + 1);
                updateCell(row, col, { editable: false });
            } else if (value !== solution){
                setMistakes(mistakes + 1);
            }
        }
    }, [value])

    return (
        <div onClick={onClickHandler} className="SudokuGridCell w-full h-full">
            {
                mode === 'pencil' ?
                    <CellPencilDisplay selected={selectedCell.row === row && selectedCell.col === col} value={value} solution={solution} />
                    :
                    (
                        mode === 'marker' ?
                            <CellMarkerDisplay markings={markings} />
                            :
                            null
                    )
            }
        </div>
    )
}

export default SudokuGridCell;