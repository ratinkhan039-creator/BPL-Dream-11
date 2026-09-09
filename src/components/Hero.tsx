import HeroLogo from '../assets/banner-main.png';
import './hero.css'
export function Hero() {

    return (
        <>
            <section>
                <div className='container mx-auto px-5'>
                    <div className='hero-section w-full flex flex-col justify-center items-center h-140 bg-black bg-cover rounded-2xl mt-6 md:gap-8 gap-5'>
                    <img src={HeroLogo} alt="" />
                    <h3 className="md:text-5xl sm:text-3xl text-xl text-white font-extrabold text-center sm:px-10 px-5 tracking-tight">Assemble Your Ultimate Dream 11 Cricket Team</h3>
                    <p className='text-gray-400 sm:text-2xl'>Beyond Boudaries Beyond Limits</p>
                    <div className='border-2 py-1.5 px-1.5 rounded-2xl border-yellow-400 transition hover:scale-105'>
                        <button className='sm:h-12 h-9 rounded-xl sm:px-6 px-5 sm:text-lg font-bold text-black bg-linear-to-r from-pink-400 via-orange-300 to-yellow-400 hover: cursor-pointer'>Claim Free Cradit</button>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}