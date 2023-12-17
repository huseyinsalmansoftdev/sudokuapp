import { useState } from "react";
import NumPadButton from "../numpadbutton/NumPadButton";

const NumPad = () => {

    const [mode, setMode] = useState('pencil');

    const changeMode = (event) => {
        setMode(event.target.value);
    }

    return (
        <div className="NumPad w-full grid grid-cols-4 grid-rows-3 gap-0.5">
            <div className="NumPadContainer col-span-3 row-span-3 grid grid-cols-3 grid-rows-3 gap-0.5">
                {
                    Array.from({ length: 9 }, (_, index) => {
                        return <NumPadButton key={index} id={index + 1} mode={mode}/>
                    })
                }
            </div>
            <div className="NumPadModes col-span-1 row-span-3 grid grid-cols-1 grid-rows-2 gap-0.5">
                <button onClick={changeMode} value={'pencil'} className={mode === 'pencil' ? "Pencil flex justify-center items-center border-2 border-gray-400 bg-green-300" : "Pencil flex justify-center items-center border-2 border-gray-400"}>
                    Pencil
                </button>
                <button onClick={changeMode} value={'marker'} className={mode === 'marker' ? "Marker flex justify-center items-center border-2 border-gray-400 bg-yellow-300" : "Pencil flex justify-center items-center border-2 border-gray-400"}>
                    Marker
                </button>
            </div>
        </div>
    )
}

export default NumPad;