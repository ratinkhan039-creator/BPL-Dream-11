import logo from '../assets/logo-footer.png'
const Footer = () => {
    return (
        <footer className="bg-[#050817] text-gray-400">

            {/* Main Footer */}
            <div className="mx-auto container px-5 py-9">

                {/* Logo */}
                <div className="mb-12 flex justify-center">
                    <img
                        src={logo}
                        alt="Cricket Logo"
                        className="h-32 w-auto object-contain"
                    />
                </div>

                {/* Footer Columns */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

                    {/* About Us */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">
                            About Us
                        </h3>

                        <p className="max-w-xs text-base leading-6">
                            We are a passionate team dedicated to providing the best
                            services to our customers.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">
                            Quick Links
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-white"
                                >
                                    ▪ Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-white"
                                >
                                    ▪ Services
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-white"
                                >
                                    ▪ About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-white"
                                >
                                    ▪ Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Subscribe */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">
                            Subscribe
                        </h3>

                        <p className="mb-5 max-w-sm leading-6">
                            Subscribe to our newsletter for the latest updates.
                        </p>

                        <form className="flex max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="
                  h-10 min-w-0 flex-1
                  rounded-l-lg
                  bg-white px-5
                  text-sm text-gray-700
                  outline-none
                  placeholder:text-gray-400
                "
                            />

                            <button
                                type="submit"
                                className="
                  h-10 rounded-r-lg
                  bg-gradient-to-r
                  from-pink-400
                  via-orange-300
                  to-yellow-400
                  px-6
                  text-sm font-bold
                  text-black
                  transition
                  hover:opacity-90
                "
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 py-7 text-center">
                <p className="text-sm text-gray-400">
                    @2026 Abdur Ratin All Rights Reserved.
                </p>
            </div>

        </footer>
    );
};

export default Footer;