import { useState } from 'react';
import Navbar from '../components/Navber';
import HeroLogo from '../assets/banner-main.png';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const TeamsPage = ({coin}:{coin:number}) => {
    const [filter, setFilter] = useState('all');

    const teamsData = [
        {
            id: 1,
            name: 'Fortune Barishal',
            shortCode: 'FBA',
            category: 'franchise',
            captain: 'Tamim Iqbal',
            homeVenue: 'Barishal Divisional Stadium',
            championships: 1,
            squadSize: 18,
            bannerColor: 'from-amber-500 to-orange-600',
            logo: '🏏',
        },
        {
            id: 2,
            name: 'Comilla Victorians',
            shortCode: 'COV',
            category: 'franchise',
            captain: 'Litton Das',
            homeVenue: 'Comilla Stadium',
            championships: 4,
            squadSize: 19,
            bannerColor: 'from-red-600 to-rose-700',
            logo: '👑',
        },
        {
            id: 3,
            name: 'Rangpur Riders',
            shortCode: 'RGR',
            category: 'franchise',
            captain: 'Nurul Hasan Sohan',
            homeVenue: 'Rangpur Cricket Garden',
            championships: 1,
            squadSize: 17,
            bannerColor: 'from-emerald-600 to-teal-700',
            logo: '🔥',
        },
        {
            id: 4,
            name: 'Sylhet Strikers',
            shortCode: 'SYL',
            category: 'franchise',
            captain: 'Mashrafe Mortaza',
            homeVenue: 'Sylhet International Stadium',
            championships: 0,
            squadSize: 18,
            bannerColor: 'from-pink-600 to-rose-600',
            logo: '⚡',
        },
        {
            id: 5,
            name: 'Chattogram Challengers',
            shortCode: 'CGC',
            category: 'franchise',
            captain: 'Shuvagata Hom',
            homeVenue: 'Zahur Ahmed Chowdhury Stadium',
            championships: 0,
            squadSize: 16,
            bannerColor: 'from-blue-600 to-indigo-700',
            logo: '⚓',
        },
        {
            id: 6,
            name: 'Khulna Tigers',
            shortCode: 'KHT',
            category: 'franchise',
            captain: 'Anamul Haque Bijoy',
            homeVenue: 'Khulna Divisional Stadium',
            championships: 0,
            squadSize: 17,
            bannerColor: 'from-yellow-600 to-amber-700',
            logo: '🐅',
        },
    ];

    const filteredTeams = teamsData.filter((team) =>
        filter === 'all' ? true : team.category === filter
    );

    return (
        <>
        <Navbar coin={coin} />
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between">
            {/* Hero Banner */}
            <section>
                <div className='container mx-auto px-5'>
                    <div className='hero-section w-full flex flex-col justify-center items-center h-140 bg-black bg-cover rounded-2xl mt-6 md:gap-8 gap-5'>
                    <img src={HeroLogo} alt="" />
                    <h3 className="md:text-5xl sm:text-3xl text-xl text-white font-extrabold text-center sm:px-10 px-5 tracking-tight">Create Ultimate Dream 11 Cricket Team</h3>
                    <p className='text-gray-400 sm:text-2xl'>Beyond Boudaries Beyond Limits</p>
                    <div className='border-2 py-1.5 px-1.5 rounded-2xl border-yellow-400 transition hover:scale-105'>
                        <button className='sm:h-12 h-9 rounded-xl sm:px-6 px-5 sm:text-lg font-bold text-black bg-linear-to-r from-pink-400 via-orange-300 to-yellow-400 hover: cursor-pointer'>Claim Free Cradit</button>
                    </div>
                </div>
                </div>
            </section>

            {/* Main Teams Section */}
            <main className="container mx-auto w-full px-4 py-10 space-y-6 flex-1">
                {/* Section Header & Toggle Pill */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                        Available Teams ({filteredTeams.length})
                    </h2>

                    <div className="inline-flex p-1 bg-white border border-slate-200 rounded-xl shadow-sm">
                        <button
                            onClick={() => setFilter('all')}
                            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${filter === 'all'
                                    ? 'bg-linear-to-r from-pink-400 via-orange-300 to-yellow-400 text-slate-950 shadow-sm'
                                    : 'text-slate-600 hover:text-slate-900'
                                }`}
                        >
                            Available
                        </button>
                        <button
                            onClick={() => setFilter('franchise')}
                            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${filter === 'franchise'
                                    ? 'bg-linear-to-r from-pink-400 via-orange-300 to-yellow-400 text-slate-950 shadow-sm'
                                    : 'text-slate-600 hover:text-slate-900'
                                }`}
                        >
                            Franchise
                        </button>
                    </div>
                </div>

                {/* 3-Column Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTeams.map((team) => (
                        <div
                            key={team.id}
                            className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                        >
                            {/* Card Image Banner */}
                            <div
                                className={`h-36 rounded-xl bg-gradient-to-br ${team.bannerColor} flex items-center justify-center text-white text-5xl shadow-inner relative overflow-hidden`}
                            >
                                <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-black/30 backdrop-blur-sm text-[11px] font-bold text-white tracking-wide">
                                    {team.shortCode}
                                </div>
                                <span>{team.logo}</span>
                            </div>

                            {/* Team Details */}
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-bold text-slate-900 text-base">{team.name}</h3>
                                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">
                                        {team.squadSize} Players
                                    </span>
                                </div>

                                <div className="space-y-1.5 text-xs text-slate-600 border-y border-slate-100 py-2.5">
                                    <div className="flex justify-between">
                                        <span className="text-slate-400 font-medium">Captain:</span>
                                        <span className="font-semibold text-slate-800">{team.captain}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-400 font-medium">Venue:</span>
                                        <span className="font-semibold text-slate-800 truncate max-w-[180px]">
                                            {team.homeVenue}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-400 font-medium">Titles:</span>
                                        <span className="font-bold text-amber-600">
                                            {team.championships > 0 ? `${team.championships} Trophy` : 'Runner-up'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Action Button */}
                            <button className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors shadow-sm">
                                View Squad
                            </button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
        <Newsletter />
        <Footer />
        </>
    );
};

export default TeamsPage;