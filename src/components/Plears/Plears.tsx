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
            <div className="container mx-auto px-5 grid gap-6 my-9 md:mb-20 mb-20">
                <div className="flex sm:flex-row flex-col gap-4 items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                        {buttonType === "available"
                            ? "Available Players"
                            : `Selected Players`}
                    </h3>
                    <div className="inline-flex p-1 bg-white border border-slate-200 rounded-xl shadow-sm">
                        <button
                            onClick={() => setButtonType("available")}
                            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${buttonType === "available" ? "bg-linear-to-r from-pink-400 via-orange-300  to-yellow-400" : ""}`}
                        >
                            Available
                        </button>
                        <button
                            onClick={() => setButtonType("selected")}
                            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${buttonType === "selected" ? "bg-linear-to-r from-pink-400 via-orange-300  to-yellow-400" : ""}`}
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
