import { FaRegTrashAlt } from "react-icons/fa";
import type { IPlearType } from "../../types/PlearType";

interface SelectedPlayerCardProps {
    plear: IPlearType
    handaleDeleteButton: (plear: IPlearType) => void
}
function SelectedPlayerCard({ plear, handaleDeleteButton }: SelectedPlayerCardProps) {
    return (
        <>
            <div className="w-full rounded-3xl border border-gray-200 bg-white px-8 py-7 shadow-sm">
                <div className="flex items-center justify-between">

                    {/* Left Side */}
                    <div className="flex items-center gap-8">
                        {/* Player Image */}
                        <img src={plear.image} className="h-28 w-28 rounded-2xl bg-gray-300" />

                        {/* Player Info */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900">
                                {plear.playername}
                            </h2>

                            <p className="mt-3 text-xl text-gray-500">
                                {plear.battingStyle}
                            </p>
                        </div>
                    </div>

                    {/* Delete Button */}
                    <button className="btn h-15 w-15 text-red-500 transition hover:text-red-600" onClick={() => handaleDeleteButton(plear)}>
                        <FaRegTrashAlt className="h-15" />
                    </button>

                </div>
            </div>
        </>
    );
};

export default SelectedPlayerCard