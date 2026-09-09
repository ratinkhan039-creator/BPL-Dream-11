
import type { Dispatch, SetStateAction } from "react";
import type { IPlearType } from "../../types/PlearType";
import SelectedPlayerCard from "../PlearCard/SelectedPlearcard";
interface SelectedPlearProps {
    selectedPlears: IPlearType[]
    setSelectedPlears: Dispatch<SetStateAction<IPlearType[]>>
    coin: number
    setCoin: Dispatch<SetStateAction<number>>
    setButtonType: Dispatch<SetStateAction<'selected' | 'available'>>
}

export default function SelectedPlear({ selectedPlears, setSelectedPlears, coin, setCoin,setButtonType }: SelectedPlearProps) {
    const handaleDeleteButton = (plear: IPlearType): void => {
        const newPlears: IPlearType[] = selectedPlears.filter(p => p.playername != plear.playername);
        const newCoin : number = coin + plear.price 
        setSelectedPlears(newPlears)
        setCoin(newCoin)
    }
    


    return (
        <>
            <div className={`grid grid-cols-1 gap-5 py-5`}>
                {
                    selectedPlears.map(plear => <SelectedPlayerCard plear={plear} handaleDeleteButton={handaleDeleteButton} />)
                }
            </div>
            <div className="border-2 border-black py-1.5 px-1.5 rounded-2xl w-fit">
                <button className="btn bg-linear-to-r from-pink-400 via-orange-300 to-yellow-400 transition hover:scale-105 font-bold py-1.5 px-3 rounded-xl hover: cursor-pointer" onClick={() => setButtonType('available')}>Add More Player</button>
            </div>
        </>
    )
}