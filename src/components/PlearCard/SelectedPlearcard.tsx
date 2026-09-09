import { FaRegTrashAlt } from "react-icons/fa";
import type { IPlearType } from "../../types/PlearType";

interface SelectedPlayerCardProps {
    plear: IPlearType
    handaleDeleteButton: (plear: IPlearType) => void
}
function SelectedPlayerCard({ plear, handaleDeleteButton }: SelectedPlayerCardProps) {
    return (
        <>
            <div className="w-full rounded-3xl border border-gray-200 bg-white sm:px-8 sm:py-7 px-4
            py-4 shadow-sm">
                <div className="flex items-center justify-between">

                    {/* Left Side */}
                    <div className="flex items-center md:gap-8 sm:gap-5 gap-3">
                        {/* Player Image */}
                        <img src={plear.image} className="sm:h-18 sm:w-18 md:h-28 md:w-28 h-13 w-13 rounded-2xl bg-gray-300" />

                        {/* Player Info */}
                        <div>
                            <h2 className="md:text-3xl sm:text-2xl font-bold text-gray-900">
                                {plear.playername}
                            </h2>

                            <p className="sm:mt-3 md:text-xl text-gray-500">
                                {plear.battingStyle}
                            </p>
                        </div>
                    </div>

                    {/* Delete Button */}
                    <button className="btn sm:h-15 sm:w-15 rounded-xl text-red-500 transition hover:text-red-600" onClick={() => handaleDeleteButton(plear)}>
                        <FaRegTrashAlt className="h-15" />
                    </button>

                </div>
            </div>
        </>
    );
};

export default SelectedPlayerCard