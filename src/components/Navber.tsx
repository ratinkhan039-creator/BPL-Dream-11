import { CiMenuBurger } from 'react-icons/ci';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AiFillDollarCircle } from 'react-icons/ai';
const Navbar = ({ coin }: { coin: number }) => {
    const [burgerButton,setBurgerButton] = useState(false)
    function handalBergerButton(){
        if (burgerButton) {
            setBurgerButton(false);
        } else {
            setBurgerButton(true);
        }
        
    }
    return (
        <>
        <div className='w-full md:h-[120.67px] h-[69.33px]'></div>
        <nav className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200 fixed top-0 z-26">
            <div className=" flex justify-between container mx-auto px-5 py-3 md:border-none border-b border-gray-300">

                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt="Cricket Logo"
                        className="md:h-24 h-11 w-auto object-contain"
                    />
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-6">

                    {/* Navigation */}
                    <ul className="md:flex items-center gap-8 hidden">
                        <li>
                            <Link to="/">
                                <a
                                    href="#"
                                    className="text-[20px] font-medium text-gray-600 transition hover:text-gray-900"
                                >
                                    Home
                                </a>
                            </Link>
                        </li>

                        <li>
                            <Link to="/fixture"><a
                                href="#"
                                className="text-[20px] font-medium text-gray-600 transition hover:text-gray-900"
                            >
                                Fixture
                            </a></Link>
                        </li>

                        <li>
                            <Link to="/teams">
                                <a
                                    href="#"
                                    className="text-[20px] font-medium text-gray-600 transition hover:text-gray-900"
                                >
                                    Teams
                                </a>
                            </Link>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="text-[20px] font-medium text-gray-600 transition hover:text-gray-900"
                            >
                                Schedules
                            </a>
                        </li>
                    </ul>

                    {/* Coin Button */}
                    <button
                        className="flex md:h-11 h-10 items-center justify-center gap-1 rounded-2xl border border-gray-200 bg-white md:px-4 px-3 md:text-[20px] font-semibold text-gray-900 shadow-sm transition hover:shadow-md ">
                        <span>{coin}</span>
                        {/* Coin */}
                        <span className="">
                            <AiFillDollarCircle className='text-yellow-500'/>
                        </span>
                    </button>
                    <CiMenuBurger className='md:hidden block text-black' onClick={handalBergerButton} />
                </div>
            </div>
            {/*Mobile navber*/}
            {burgerButton && <ul className="flex flex-col items-end gap-3 md:hidden pr-5 py-2">
                <li>
                    <Link to="/">
                        <a
                            href="#"
                            className="text-[20px] font-medium text-gray-600 transition hover:text-gray-900"
                        >
                            Home
                        </a>
                    </Link>
                </li>

                <li>
                    <Link to="/fixture"><a
                        href="#"
                        className="text-[20px] font-medium text-gray-600 transition hover:text-gray-900"
                    >
                        Fixture
                    </a></Link>
                </li>

                <li>
                    <Link to="/teams">
                        <a
                            href="#"
                            className="text-[20px] font-medium text-gray-600 transition hover:text-gray-900"
                        >
                            Teams
                        </a>
                    </Link>
                </li>

                <li>
                    <a
                        href="#"
                        className="text-[20px] font-medium text-gray-600 transition hover:text-gray-900"
                    >
                        Schedules
                    </a>
                </li>
            </ul>}
        </nav>
        </>
    );
};

export default Navbar;