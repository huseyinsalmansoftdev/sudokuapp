const Fail = ({ currentPage, setCurrentPage }) => {

    const onClickHandler = (event) => {
        setCurrentPage(0);
    }

    return (
        <div className="Fail w-full h-full flex flex-col justify-center items-center gap-4">
            <p className="Failed text-2xl">Fail!</p>
            <button onClick={onClickHandler} value={'play again'} className="PlayAgain w-full h-12 bg-green-400 text-white rounded-lg">Play Again</button>
        </div>
    )
}

export default Fail;