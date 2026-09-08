import HeroLogo from '../assets/banner-main.png';
import './hero.css'
export function Hero() {
    
    return (
        <>
        <section>
            <div className='hero-section container mx-auto max-w-374 flex flex-col justify-center items-center h-140 bg-black bg-cover rounded-2xl mt-7 gap-8'>
                <img src={HeroLogo} alt="" />
                <h3 className="text-4xl text-white font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h3>
                <p className='text-gray-400 text-2xl'>Beyond Boudaries Beyond Limits</p>
                <div className='border-2 border-[#d4ff00] py-1.5 px-1.5 rounded-2xl'>
                    <button className='bg-[#d4ff00] font-bold py-1.5 px-3 rounded-xl'>Claim Free Cradit</button>
                </div>
            </div>
        </section>
        </>
    )
}