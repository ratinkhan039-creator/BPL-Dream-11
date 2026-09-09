import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { IPlearType } from "../../types/PlearType";
import AvailablePlears from "./AvailablePlears";
import SelectedPlear from "./SelectedPlear";

interface plearDataProps {
    plearsData: Promise<IPlearType[]>;
    coin: number
    setCoin: Dispatch<SetStateAction<number>>
}

export default function Plears({ plearsData, coin, setCoin }: plearDataProps) {
    const [buttonType, setButtonType] = useState<'selected' | 'available'>("available");
    const [selectedPlears, setSelectedPlears] = useState<IPlearType[]>([])
    const plears = use(plearsData);
    return (
        <>
            <div className="container mx-auto px-5 grid gap-6 my-9 md:mb-65 mb-90">
                <div className="flex items-center justify-between">
                    <h3 className="sm:text-2xl text-md font-bold">
                        {buttonType === "available"
                            ? "Available Players"
                            : `Selected Players`}
                    </h3>
                    <div>
                        <button
                            onClick={() => setButtonType("available")}
                            className={`btn border-r-0 sm:px-4 sm:w-auto sm:text-md text-[12px] px-0 w-20 rounded-r-none rounded-l-xl ${buttonType === "available" ? "bg-linear-to-r from-pink-400 via-orange-300  to-yellow-400" : ""}`}
                        >
                            Available
                        </button>
                        <button
                            onClick={() => setButtonType("selected")}
                            className={`btn border-l-0 sm:px-4 sm:w-auto px-0 w-20 sm:text-md text-[12px]  rounded-r-xl rounded-l-none ${buttonType === "selected" ? "bg-linear-to-r from-pink-400 via-orange-300  to-yellow-400" : ""}`}
                        >
                            Selected ({selectedPlears.length})
                        </button>
                    </div>
                </div>
                {buttonType === "available" ? (
                    <AvailablePlears plears={plears} coin={coin} setCoin={setCoin} selectedPlears={selectedPlears} setSelectedPlears={setSelectedPlears} />
                ) : (
                    <SelectedPlear selectedPlears={selectedPlears} setSelectedPlears={setSelectedPlears} coin={coin} setCoin={setCoin} setButtonType={setButtonType} />
                )}
                
            </div>
        </>
    );
}
