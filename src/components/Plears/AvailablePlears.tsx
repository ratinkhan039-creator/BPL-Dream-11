import { type Dispatch, type SetStateAction } from "react";
import type { IPlearType } from "../../types/PlearType";
import PlaerCard from "../PlearCard/PlearCard";

interface AvailablePlearsProps {
  plears: IPlearType[];
  coin: number
  setCoin: Dispatch<SetStateAction<number>>
  selectedPlears: IPlearType[]
  setSelectedPlears: Dispatch<SetStateAction<IPlearType[]>>
}
export default function AvailablePlears({ plears, coin, setCoin, selectedPlears, setSelectedPlears }: AvailablePlearsProps) {
  return (
    <>
      <div className=" grid grid-cols-3 gap-7">
        {plears.map((plear) => (
          <PlaerCard key={plear.id} plear={plear} selectedPlears={selectedPlears} setSelectedPlears={setSelectedPlears} coin={coin} setCoin={setCoin} />
        ))}
      </div>
    </>
  );
}
