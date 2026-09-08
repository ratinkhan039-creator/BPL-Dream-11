import { Suspense, useState } from 'react';
import { Hero } from './components/Hero'
import Navbar from './components/Navber'
import Plears  from './components/Plears/Plears';
import type { IPlearType } from './types/PlearType';

function App() {
  const plearData = async():Promise<IPlearType[]> => {
    const response = await fetch('/plearData.json');
    const data = await response.json();
    return data;
  }
  const [coin,setCoin] = useState(2000)
  return (
    <>
      <Navbar coin={coin}  />
      <Hero />
      <Suspense fallback={<p>Loasing....</p>}>
      <Plears plearsData={plearData()} coin={coin} setCoin={setCoin}/>
      </Suspense>
    </>
  )
}

export default App
