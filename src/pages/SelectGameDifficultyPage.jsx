const SelectGameDifficultyPage = ({ setGameDifficulty, currentPage, setCurrentPage }) => {

    const onClickHandler = (event) => {
        const page = currentPage;

        setGameDifficulty(event.target.value);

        setCurrentPage(page + 1);
    }

    const onClickHandlerBack = () => {
        const page = currentPage;

        setCurrentPage(page - 1);
    }

    return (
        <div className="SelectGameDifficultyPage w-full h-full flex flex-col justify-center items-center gap-2 p-2">
            <button value={'very easy'} className="VeryEasy w-full h-10 bg-very-easy text-white font-bold rounded-lg " onClick={onClickHandler}>very easy</button>
            <button value={'easy'} className="VeryEasy w-full h-10 bg-easy text-white font-bold rounded-lg " onClick={onClickHandler}>easy</button>
            <button value={'medium'} className="VeryEasy w-full h-10 bg-medium text-white font-bold rounded-lg " onClick={onClickHandler}>medium</button>
            <button value={'hard'} className="VeryEasy w-full h-10 bg-hard text-white font-bold rounded-lg " onClick={onClickHandler}> hard</button>
            <button value={'very hard'} className="VeryEasy w-full h-10 bg-very-hard text-white font-bold rounded-lg " onClick={onClickHandler}>very hard</button>
            <button className="VeryEasy w-full h-10 bg-gray-500 text-white italic rounded-lg " onClick={onClickHandlerBack}>back</button>
        </div>
    )
}

export default SelectGameDifficultyPage;