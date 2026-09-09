const Newsletter = () => {
    return (
        <section className="relative mx-auto container px-10">

            {/* Dark Outer Container */}
            <div className="rounded-[30px] border-2 border-gray-400 p-3">

                {/* Newsletter Card */}
                <div
                    className=" relative overflow-hidden rounded-[28px] border border-gray-200 bg-white px-6 py-25 text-center sm:px-10">
                    {/* Blue Glow */}
                    <div
                        className=" absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-cyan-300/50 blur-[80px] ">
                    </div>
                    {/* Orange Glow */}
                    <div
                        className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-orange-300/60 blur-[80px]" ></div>

                    {/* Content */}
                    <div className="relative z-10 mx-auto max-w-2xl">

                        <h2 className="text-3xl font-bold text-black sm:text-4xl">
                            Subscribe to our Newsletter
                        </h2>

                        <p className="mt-4 text-base text-gray-600 sm:text-xl">
                            Get the latest updates and news right in your inbox!
                        </p>

                        {/* Form */}
                        <form className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="h-16 w-full rounded-2xl border border-gray-200 bg-white px-8 text-lg text-gray-700 outline-none placeholder:text-gray-400 focus:border-gray-400 sm:w-110" /><button type="submit" className="h-16 rounded-2xl px-8 text-lg font-bold text-black bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-400 transition hover:scale-105">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;