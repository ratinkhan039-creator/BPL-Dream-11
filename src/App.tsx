import { Suspense, useState } from 'react';
import { Hero } from './components/Hero'
import Navbar from './components/Navber'
import Plears from './components/Plears/Plears';
import type { IPlearType } from './types/PlearType';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';

function App() {
  const plearData = async (): Promise<IPlearType[]> => {
    const response = await fetch('/plearData.json');
    const data = await response.json();
    return data;
  }
  const [coin, setCoin] = useState(2000)
  return (
    <>
      <div className='relative'>
        <Navbar coin={coin} />
        <Hero />
        <Suspense fallback={<p>Loasing....</p>}>
          <Plears plearsData={plearData()} coin={coin} setCoin={setCoin} />
        </Suspense>
        <div className="absolute left-0 right-0 bottom-0">
          <Newsletter />
        </div>
        <div className='sm:h-52 h-65 bg-[#050817]'>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
