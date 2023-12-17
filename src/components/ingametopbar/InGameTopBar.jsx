import { useContext } from "react";
import { SudokuContext } from "../../modules/sudokumodule/SudokuContext";

const InGameTopBar = ({ setCurrentPage}) => {

    const { mistakesAllowed, mistakes } = useContext(SudokuContext);

    const onClickHandler = (event) => {
        setCurrentPage(0);
    }

    return (
        <div className="InGameTopBar w-full h-12  border-2 border-gray-400 flex flex-row justify-between p-1">
            <button onClick={onClickHandler} className="BackButton bg-gray-400 text-white rounded-md px-2">Back</button>
            <div className="Errors h-full flex flex-row-reverse gap-1">
                {Array.from({ length: mistakes }, (_, index) => {
                    return <div key={index} className="Error h-full aspect-square rounded-3xl bg-red-400 border-2 border-gray-400"></div>;
                })}
                {Array.from({ length: mistakesAllowed - mistakes }, (_, index) => {
                    return <div key={index} className="Error h-full aspect-square rounded-3xl bg-green-400 border-2 border-gray-400"></div>;
                })}
            </div>
        </div>
    )
}

export default InGameTopBar;