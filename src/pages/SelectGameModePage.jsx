const SelectGameModePage = ({ setGameMode, currentPage, setCurrentPage }) => {

    const onClickHandler = (event) => {
        const page = currentPage;

        setGameMode(event.target.value);

        setCurrentPage( page + 1);
    }

    return (
        <div className="SelectGameModePage w-full h-full flex flex-col justify-center items-center gap-2 p-2">
            <button value={'singleplayer'} className="SinglePlayerButton w-full h-10 bg-purple-500 text-white rounded-lg" onClick={onClickHandler}>singleplayer</button>
            <button disabled value={'multiplayer'} className="MultiPlayerButton w-full h-10 bg-blue-500 text-white rounded-lg" onClick={onClickHandler}>multiplayer ( coming soon )</button>
        </div>
    )
}

export default SelectGameModePage;