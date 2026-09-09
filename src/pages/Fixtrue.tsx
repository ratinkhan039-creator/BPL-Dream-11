import  { useState } from 'react';
import Navbar from '../components/Navber';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import { FaTrophy } from 'react-icons/fa';
interface FixtrueProps{
    coin: number
}

const FixturesPage = ({coin}:FixtrueProps) => {
    const [filter, setFilter] = useState('upcoming');

    const matches = [
        {
            id: 1,
            matchNo: 'Match 01',
            date: 'Jan 19, 2025',
            time: '01:30 PM BST',
            venue: 'Shere Bangla National Stadium, Mirpur',
            team1: { name: 'Fortune Barishal', code: 'FBA', flag: '🏏' },
            team2: { name: 'Rangpur Riders', code: 'RGR', flag: '🔥' },
            status: 'upcoming',
        },
        {
            id: 2,
            matchNo: 'Match 02',
            date: 'Jan 19, 2025',
            time: '06:30 PM BST',
            venue: 'Shere Bangla National Stadium, Mirpur',
            team1: { name: 'Comilla Victorians', code: 'COV', flag: '👑' },
            team2: { name: 'Sylhet Strikers', code: 'SYL', flag: '⚡' },
            status: 'upcoming',
        },
        {
            id: 3,
            matchNo: 'Match 03',
            date: 'Jan 20, 2025',
            time: '01:30 PM BST',
            venue: 'Zahur Ahmed Chowdhury Stadium, Chattogram',
            team1: { name: 'Chattogram Challengers', code: 'CGC', flag: '⚓' },
            team2: { name: 'Khulna Tigers', code: 'KHT', flag: '🐅' },
            status: 'upcoming',
        },
        {
            id: 4,
            matchNo: 'Match 04',
            date: 'Jan 20, 2025',
            time: '06:30 PM BST',
            venue: 'Zahur Ahmed Chowdhury Stadium, Chattogram',
            team1: { name: 'Dhaka Dominators', code: 'DHD', flag: '🦁' },
            team2: { name: 'Fortune Barishal', code: 'FBA', flag: '🏏' },
            status: 'upcoming',
        },
        {
            id: 5,
            matchNo: 'Match 05',
            date: 'Jan 22, 2025',
            time: '01:30 PM BST',
            venue: 'Sylhet International Cricket Stadium, Sylhet',
            team1: { name: 'Sylhet Strikers', code: 'SYL', flag: '⚡' },
            team2: { name: 'Rangpur Riders', code: 'RGR', flag: '🔥' },
            status: 'completed',
        },
        {
            id: 6,
            matchNo: 'Match 06',
            date: 'Jan 22, 2025',
            time: '06:30 PM BST',
            venue: 'Sylhet International Cricket Stadium, Sylhet',
            team1: { name: 'Comilla Victorians', code: 'COV', flag: '👑' },
            team2: { name: 'Khulna Tigers', code: 'KHT', flag: '🐅' },
            status: 'completed',
        },
    ];

    const filteredMatches = matches.filter((match) =>
        filter === 'all' ? true : match.status === filter
    );

    return (
        <>
        <Navbar coin={coin}/>
        <div className="container mx-auto font-sans px-5">
            {/* Top Banner Section */}
            <div className="hero-section w-full flex flex-col justify-center items-center h-140 bg-black bg-cover rounded-2xl mt-6 md:gap-8 gap-5">
                    <div className="flex flex-col items-center justify-center w-full gap-7">
                        <div className="inline-flex items-center justify-center w-23 h-23 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-2xl mb-1">
                            <FaTrophy className='h-17 w-17 text-yellow-400' />
                        </div>
                        <h1 className="text-2xl sm:text-6xl font-extrabold text-white tracking-tight">
                            BPL 2025 Match Schedule & Fixtures
                        </h1>
                        <p className="text-slate-400 text-center text-2xl">
                            Track upcoming match timings, venues, and plan your Dream 11 lineup accordingly.
                        </p>
                    </div>
            </div>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-10 space-y-6">
                {/* Filter Controls */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                            Matches ({filteredMatches.length})
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-500">Official tournament timetable</p>
                    </div>

                    {/* Pill Toggle Style */}
                    <div className="inline-flex p-1 bg-white border border-slate-200 rounded-xl shadow-sm">
                        <button
                            onClick={() => setFilter('upcoming')}
                            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${filter === 'upcoming'
                                    ? 'bg-linear-to-r from-pink-400 via-orange-300 to-yellow-400 text-slate-950 shadow-sm'
                                    : 'text-slate-600 hover:text-slate-900'
                                }`}
                        >
                            Upcoming
                        </button>
                        <button
                            onClick={() => setFilter('completed')}
                            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${filter === 'completed'
                                    ? 'bg-linear-to-r from-pink-400 via-orange-300 to-yellow-400 text-slate-950 shadow-sm'
                                    : 'text-slate-600 hover:text-slate-900'
                                }`}
                        >
                            Completed
                        </button>
                        <button
                            onClick={() => setFilter('all')}
                            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${filter === 'all'
                                    ? 'bg-linear-to-r from-pink-400 via-orange-300 to-yellow-400 shadow-sm'
                                    : 'text-slate-600 hover:text-slate-900'
                                }`}
                        >
                            All Matches
                        </button>
                    </div>
                </div>

                {/* Fixtures 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredMatches.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
                        >
                            {/* Header Info */}
                            <div className="flex items-center justify-between text-xs font-semibold text-slate-500 border-b border-slate-100 pb-3">
                                <span className="bg-slate-100 px-2.5 py-1 rounded-md text-slate-700">
                                    {item.matchNo}
                                </span>
                                <span className="text-amber-600 font-bold">{item.time}</span>
                            </div>

                            {/* Teams Matchup Block */}
                            <div className="py-2 space-y-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2.5">
                                        <span className="text-xl">{item.team1.flag}</span>
                                        <span className="text-sm font-bold text-slate-800">{item.team1.name}</span>
                                    </div>
                                    <span className="text-xs font-bold text-slate-400">{item.team1.code}</span>
                                </div>

                                <div className="text-center">
                                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                                        VS
                                    </span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2.5">
                                        <span className="text-xl">{item.team2.flag}</span>
                                        <span className="text-sm font-bold text-slate-800">{item.team2.name}</span>
                                    </div>
                                    <span className="text-xs font-bold text-slate-400">{item.team2.code}</span>
                                </div>
                            </div>

                            {/* Venue & Date */}
                            <div className="border-t border-slate-100 pt-3 space-y-1">
                                <p className="text-xs text-slate-600 font-medium truncate">📍 {item.venue}</p>
                                <p className="text-xs text-slate-400">📅 {item.date}</p>
                            </div>

                            {/* Action Button */}
                            <button className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors">
                                Create Fantasy Squad
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

export default FixturesPage;