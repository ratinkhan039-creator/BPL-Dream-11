import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { IPlearType } from "../../types/PlearType";
import AvailablePlears from "./AvailablePlears";
import SelectedPlear from "./SelectedPlear";

interface plearDataProps {
    plearsData: Promise<IPlearType[]>;
    coin : number
    setCoin: Dispatch<SetStateAction<number>>
}

export default function Plears({ plearsData,coin,setCoin }: plearDataProps) {
    const [buttonType, setButtonType] = useState("available");
    const [selectedPlears,setSelectedPlears]= useState<IPlearType[]>([])
    const plears = use(plearsData);
    return (
        <>
            <div className="container mx-auto px-5 grid gap-6 my-9">
                <div className="flex justify-between">
                    <h3 className="text-2xl font-bold">
                        {buttonType === "available"
                            ? "Available Players"
                            : `Selected Players (${selectedPlears.length}/6)`}
                    </h3>
                    <div>
                        <button
                            onClick={() => setButtonType("available")}
                            className={`btn rounded-r-none rounded-l-xl ${buttonType === "available" ? "bg-[#d4ff00]" : ""}`}
                        >
                            Available
                        </button>
                        <button
                            onClick={() => setButtonType("selected")}
                            className={`btn rounded-r-xl rounded-l-none ${buttonType === "selected" ? "bg-[#d4ff00]" : ""}`}
                        >
                            Selected ({selectedPlears.length})
                        </button>
                    </div>
                </div>
                {buttonType === "available" ? (
                    <AvailablePlears plears={plears} coin={coin} setCoin={setCoin} selectedPlears={selectedPlears} setSelectedPlears={setSelectedPlears} />
                ) : (
                    <SelectedPlear selectedPlears={selectedPlears}  setSelectedPlears={setSelectedPlears} coin={coin} setCoin={setCoin} />
                )}
            </div>
        </>
    );
}
