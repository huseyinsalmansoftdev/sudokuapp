const Loading = () => {
    return (
        <div className="Loading w-full h-full flex justify-center items-center">
            <div className="LoadingGrid w-1/3 aspect-square grid grid-cols-3 grid-rows-3 gap-1">
                <div className="LoadingGridCell w-full h-full bg-blue-900 rounded-md animate-pulse flex justify-center items-center"><p className="text-white">1</p></div>
                <div className="LoadingGridCell w-full h-full bg-blue-800 rounded-md animate-pulse flex justify-center items-center"><p className="text-white">2</p></div>
                <div className="LoadingGridCell w-full h-full bg-blue-700 rounded-md animate-pulse flex justify-center items-center"><p className="text-white">3</p></div>
                <div className="LoadingGridCell w-full h-full bg-blue-800 rounded-md animate-pulse flex justify-center items-center"><p className="text-white">4</p></div>
                <div className="LoadingGridCell w-full h-full bg-blue-700 rounded-md animate-pulse flex justify-center items-center"><p className="text-white">5</p></div>
                <div className="LoadingGridCell w-full h-full bg-blue-600 rounded-md animate-pulse flex justify-center items-center"><p className="text-white">6</p></div>
                <div className="LoadingGridCell w-full h-full bg-blue-700 rounded-md animate-pulse flex justify-center items-center"><p className="text-white">7</p></div>
                <div className="LoadingGridCell w-full h-full bg-blue-600 rounded-md animate-pulse flex justify-center items-center"><p className="text-white">8</p></div>
                <div className="LoadingGridCell w-full h-full bg-blue-500 rounded-md animate-pulse flex justify-center items-center"><p className="text-white">9</p></div>
            </div>
        </div>
    )
}

export default Loading;