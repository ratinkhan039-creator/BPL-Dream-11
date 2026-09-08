
import type { Dispatch, SetStateAction } from "react";
import type { IPlearType } from "../../types/PlearType";
import SelectedPlayerCard from "../PlearCard/SelectedPlearcard";
interface SelectedPlearProps {
    selectedPlears: IPlearType[]
    setSelectedPlears: Dispatch<SetStateAction<IPlearType[]>>
    coin: number
    setCoin: Dispatch<SetStateAction<number>>
}

export default function SelectedPlear({ selectedPlears, setSelectedPlears, coin, setCoin }: SelectedPlearProps) {
    const handaleDeleteButton = (plear: IPlearType): void => {
        const newPlears: IPlearType[] = selectedPlears.filter(p => p.playername != plear.playername);
        const newCoin : number = coin + plear.price 
        setSelectedPlears(newPlears)
        setCoin(newCoin)
    }
    return (
        <>
            <div className="grid grid-cols-1 gap-5">
                {
                    selectedPlears.map(plear => <SelectedPlayerCard plear={plear} handaleDeleteButton={handaleDeleteButton} />)
                }
            </div>
        </>
    )
}