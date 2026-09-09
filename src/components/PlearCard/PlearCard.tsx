import { useState, type Dispatch, type SetStateAction } from "react";
import type { IPlearType } from "../../types/PlearType";
import { Bounce, toast } from "react-toastify";

interface plearCardProps {
    plear: IPlearType
    selectedPlears: IPlearType[]
    setSelectedPlears: Dispatch<SetStateAction<IPlearType[]>>
    coin: number
    setCoin: Dispatch<SetStateAction<number>>
}
const PlaerCard = ({ plear, selectedPlears, setSelectedPlears, coin, setCoin }: plearCardProps) => {
    const [isButton, setIsButton] = useState(false);
    const handalButton = () => {
        const newCoin = coin - plear.price
        if (newCoin < 0) {
            setIsButton(false)
            toast.error('Not seleted player becuse Your coin is 0', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            return
        }
        setCoin(newCoin)
        setIsButton(true);
        setSelectedPlears([...selectedPlears, plear])
        return toast.success(`${plear.playername} are selected `, {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    return (
        <div className="w-full overflow-hidden rounded-2xl bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            {/* Player Image */}
            <div className=" h-72 overflow-hidden bg-gray-200">
                <img
                    src={plear.image}
                    alt={plear.playername}
                    className="h-full w-full object-cover transition duration-500 hover:scale-110"
                />
            </div>

            {/* Card Content */}
            <div className="p-5">

                {/* Name & Country */}
                <div className="mb-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-gray-900">
                            {plear.playername}
                        </h2>
                        {/* Role Badge */}
                        <span className="rounded-full w-43 py-1 text-sm font-semibold text-black text-end">
                            {plear.role}
                        </span>
                    </div>

                    <p className="mt-1 text-sm text-gray-500">
                        🌍 {plear.playercountry}
                    </p>
                </div>

                {/* Player Information */}
                <div className="space-y-3 border-t border-gray-200 pt-4">

                    <div className="flex justify-between">
                        <span className="text-gray-500">Batting</span>
                        <span className="font-medium text-gray-800">
                            {plear.battingStyle}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-500">Bowling</span>
                        <span className="font-medium text-gray-800">
                            {plear.bowlingStyle}
                        </span>
                    </div>

                </div>

                {/* Price */}
                <div className="mt-5 flex items-center justify-between">
                    <div>
                        <p className="text-xs text-gray-500">Player Price</p>
                        <p className="text-xl font-bold text-black">
                            ${plear.price.toLocaleString()}
                        </p>
                    </div>

                    <button onClick={handalButton} className="rounded-lg bg-gray-200 px-5 py-2.5 font-medium text-black transition hover:bg-linear-to-r from-pink-400 via-orange-300 to-yellow-400">
                        {isButton ? `Player Selected` : `Choose Player`}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default PlaerCard;