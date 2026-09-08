import logo from '../assets/logo.png'
const Navbar = ({coin}:{coin:number}) => {
    return (
        <nav className="w-full bg-white my-3">
            <div className=" flex justify-between container mx-auto px-5">

                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt="Cricket Logo"
                        className="h-24 w-auto object-contain"
                    />
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-12">

                    {/* Navigation */}
                    <ul className="flex items-center gap-14">
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
                        className="flex h-16 items-center gap-3 rounded-2xl border border-gray-200
                        bg-white px-6 text-[20px] font-semibold text-gray-900
                        shadow-sm transition hover:shadow-md">
                        <span>{coin} Coin</span>

                        {/* Coin */}
                        <span
                            className="flex h-7 w-7 items-center justify-center rounded-full
                            border-2 border-yellow-500 bg-yellow-400 text-sm">
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;