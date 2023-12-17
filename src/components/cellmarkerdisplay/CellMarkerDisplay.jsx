const CellMarkerDisplay = ({ markings }) => {
    return (
        <div className="CellMarkerDisplay grid grid-cols-3 grid-rows-3">
            {
                Array.from({ length: 9 }, (marking, index) => {
                    return (
                        <div key={index} className="MarkerCell w-full h-full flex justify-center items-center bg-white">
                            <p className={markings.includes(index + 1) ? "text-2xs text-black" : "text-2xs text-white"}>{index + 1}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CellMarkerDisplay;