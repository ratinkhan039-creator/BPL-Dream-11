import { CiMenuBurger } from 'react-icons/ci';
import logo from '../assets/logo.png'
const Navbar = ({coin}:{coin:number}) => {
    return (
        <nav className="w-full bg-white py-3 border-b border-gray-300">
            <div className=" flex justify-between container mx-auto px-5">

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
                            <a
                                href="#"
                                className="text-[20px] font-medium text-gray-600 transition hover:text-gray-900"
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="text-[20px] font-medium text-gray-600 transition hover:text-gray-900"
                            >
                                Fixture
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="text-[20px] font-medium text-gray-600 transition hover:text-gray-900"
                            >
                                Teams
                            </a>
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
                        className="flex md:h-16 h-10 items-center gap-3 rounded-2xl border border-gray-200
                        bg-white md:px-6 px-3 md:text-[20px] font-semibold text-gray-900
                        shadow-sm transition hover:shadow-md md:w-46">
                        <span>{coin} Coin</span>
                        {/* Coin */}
                        <span
                            className="flex md:h-7 md:w-7 h-5 w-5 items-center justify-center rounded-full
                            border-2 border-yellow-500 bg-yellow-400 text-sm">
                        </span>
                    </button>
                    <CiMenuBurger className='md:hidden block text-black' />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;