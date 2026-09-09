import { Suspense, type Dispatch, type SetStateAction } from 'react';
import Navbar from '../components/Navber';
import { Hero } from '../components/Hero';
import Plears from '../components/Plears/Plears';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import type { IPlearType } from '../types/PlearType';

interface HomeProps {
    coin: number
    setCoin: Dispatch<SetStateAction<number>>
}

export default function Home({ coin, setCoin }: HomeProps) {
    const plearData = async (): Promise<IPlearType[]> => {
        const response = await fetch('/plearData.json');
        const data = await response.json();
        return data;
    }

    return (
        <>
            <Navbar coin={coin} />
            <Hero />
            <Suspense fallback={<p>Loasing....</p>}>
                <Plears plearsData={plearData()} coin={coin} setCoin={setCoin} />
            </Suspense>
            <Newsletter />
            <Footer />
        </>
    )
}