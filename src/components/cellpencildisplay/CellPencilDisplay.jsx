const CellPencilDisplay = ({ selected, value, solution }) => {

    return (
        <div className={selected ? "PencilDisplay w-full h-full bg-blue-400 flex justify-center items-center" : "PencilDisplay w-full h-full bg-white hover:bg-blue-200 flex justify-center items-center"}>
            <p className={value !== solution ? "Value text-red-400" : "Value text-black"}>{ value ? value : null }</p>
        </div>
    )
}

export default CellPencilDisplay;