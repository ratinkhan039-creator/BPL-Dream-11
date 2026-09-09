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
        // <div className="w-full overflow-hidden rounded-2xl bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

        //     {/* Player Image */}
        //     <div className=" h-72 overflow-hidden bg-gray-200">
        //         <img
        //             src={plear.image}
        //             alt={plear.playername}
        //             className="h-full w-full object-cover transition duration-500 hover:scale-110"
        //         />
        //     </div>

        //     {/* Card Content */}
        //     <div className="p-5">

        //         {/* Name & Country */}
        //         <div className="mb-4">
        //             <div className="flex items-center justify-between">
        //                 <h2 className="text-2xl font-bold text-gray-900">
        //                     {plear.playername}
        //                 </h2>
        //                 {/* Role Badge */}
        //                 <span className="rounded-full w-43 py-1 text-sm font-semibold text-black text-end">
        //                     {plear.role}
        //                 </span>
        //             </div>

        //             <p className="mt-1 text-sm text-gray-500">
        //                 🌍 {plear.playercountry}
        //             </p>
        //         </div>

        //         {/* Player Information */}
        //         <div className="space-y-3 border-t border-gray-200 pt-4">

        //             <div className="flex justify-between">
        //                 <span className="text-gray-500">Batting</span>
        //                 <span className="font-medium text-gray-800">
        //                     {plear.battingStyle}
        //                 </span>
        //             </div>

        //             <div className="flex justify-between">
        //                 <span className="text-gray-500">Bowling</span>
        //                 <span className="font-medium text-gray-800">
        //                     {plear.bowlingStyle}
        //                 </span>
        //             </div>

        //         </div>

        //         {/* Price */}
        //         <div className="mt-5 flex items-center justify-between">
        //             <div>
        //                 <p className="text-xs text-gray-500">Player Price</p>
        //                 <p className="text-xl font-bold text-black">
        //                     ${plear.price.toLocaleString()}
        //                 </p>
        //             </div>

        //             <button onClick={handalButton} disabled={isButton} className="rounded-lg bg-gray-200 px-5 py-2.5 font-medium text-black transition hover:bg-linear-to-r from-pink-400 via-orange-300 to-yellow-400">
        //                 {isButton ? `Player Selected` : `Choose Player`}
        //             </button>
        //         </div>

        //     </div>
        // </div>
        <div className="w-full md:max-w-sm bg-white rounded-3xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-all font-sans">
            {/* Player Profile Image */}
            <div className="relative w-full h-65 md:h-70 sm:h-80 overflow-hidden rounded-2xl mb-4 bg-slate-100">
                <img
                    src={plear.image}
                    alt={plear.playername}
                    className="w-full h-full object-cover object-top"
                />
            </div>

            {/* Player Name with User Icon */}
            <div className="flex items-center space-x-2.5 text-slate-900 font-bold text-lg mb-2">
                <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center text-white text-xs">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                </div>
                <span>{plear.playername}</span>
            </div>

            {/* Country & Role Badge */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                <div className="flex items-center space-x-1.5 text-slate-400 text-sm font-medium">
                    <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z" />
                    </svg>
                    <span>{plear.playercountry}</span>
                </div>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg">
                    {plear.role}
                </span>
            </div>

            {/* Stats & Pricing Details */}
            <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-900">Rating</span>
                </div>

                <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-900">{plear.battingStyle}</span>
                    <span className="text-slate-400 font-medium">{plear.battingStyle}</span>
                </div>

                <div className="flex justify-between items-center pt-1">
                    <span className="font-bold text-slate-900">
                        Price: ${plear.price}
                    </span>
                    <button
                        onClick={handalButton}
                        className={`px-4 py-2 border rounded-xl text-xs font-semibold transition-all ${isButton
                                ? 'bg-slate-900 text-white border-slate-900'
                                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                            }`} disabled={isButton}
                    >
                        {isButton ? 'Selected' : 'Choose Player'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlaerCard;