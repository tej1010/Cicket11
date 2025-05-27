import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const HowToPlay: React.FC = () => {
    return (
        <div className="bg-[#0D1832] min-h-screen">
            <Navbar />
            <div className="pt-16 bg-[#0D1832]">
                {/* Hero section */}
                <div className="bg-gradient-to-b from-[#1a3366] to-[#0D1832] py-8 md:py-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-2xl md:text-4xl font-bold text-white mb-0">How to Play Fantasy Cricket on Crickets11</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='pb-8 md:pb-16'>
                <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='max-w-4xl mx-auto'>
                        <div className="bg-[#132548] rounded-xl p-8 mb-8">
                            <h2 className='text-2xl font-semibold text-white mb-4'>Introduction</h2>
                            <p className='text-gray-300 leading-relaxed mt-4'>Crickets11 brings you an exciting platform to use your cricket knowledge and skills to compete in fantasy contests. Build your dream team using real-life players from upcoming matches, score points based on their real-time performance, and climb the leaderboard to win!</p>
                        </div>
                        <div className="bg-[#132548] rounded-xl p-8 mb-8">
                            <h2 className='text-2xl font-semibold text-white mb-4'>Objective</h2>
                            <p className='text-gray-300 leading-relaxed mt-4'>The goal in fantasy cricket on Crickets11 is simple:</p>
                            <ul className='list-disc list-inside text-gray-300 leading-relaxed'>
                                <li>Create your fantasy team of 11 players from any upcoming real-world cricket match.</li>
                                <li>Earn points based on how your selected players perform in the actual game (runs, wickets, catches, etc.).</li>
                                <li>Compete in contests to win rewards based on your total points and leaderboard position.</li>
                            </ul>
                        </div>
                        <div className="bg-[#132548] rounded-xl p-8 mb-8">
                            <h2 className='text-2xl font-semibold text-white mb-4'>How to Play Fantasy Cricket on Crickets11</h2>
                            <p className='text-gray-300 leading-relaxed mt-4'><strong>Step 1: Register</strong></p>
                            <p className='text-gray-300 leading-relaxed mt-2'>Download the Crickets11 App or visit our website.</p>
                            <p className='text-gray-300 leading-relaxed mt-2'>Sign up using your mobile login.</p>
                            <p className='text-gray-300 leading-relaxed mt-2'><strong>Step 2: Pick a Match</strong></p>
                            <p className='text-gray-300 leading-relaxed mt-2'>Choose any upcoming cricket match listed on the app. We feature matches from major leagues and tournaments worldwide.</p>
                            <p className='text-gray-300 leading-relaxed mt-2'><strong>Step 3: Create Your Team</strong></p>
                            <p className='text-gray-300 leading-relaxed mt-2'>Build your fantasy team of 11 players using 100 credit points.</p>
                            <p className='text-gray-300 leading-relaxed mt-2'>Keep in mind:</p>
                            <ul className='list-disc list-inside text-gray-300 leading-relaxed mt-2'>
                                <li>You can select a maximum of 7 players from one real team.</li>
                                <li>Choose wisely across batsmen, bowlers, all-rounders, and wicketkeepers.</li>
                                <li>Select a Captain (2x points) and Vice-Captain (1.5x points) for bonus scoring.</li>
                            </ul>
                            <p className='text-gray-300 leading-relaxed mt-2'><strong>Step 4: Join a Contest</strong></p>
                            <p className='text-gray-300 leading-relaxed mt-2'>Crickets11 offers multiple contest types:</p>
                            <ul className='list-disc list-inside text-gray-300 leading-relaxed mt-2'>
                                <li><strong>Practice Contests (Free):</strong> Perfect for beginners to learn and test strategies.</li>
                                <li><strong>Cash Contests:</strong> Compete for real prizes and cash rewards.</li>
                                <li><strong>Private Contests:</strong> Create or join exclusive contests with friends or colleagues.</li>
                            </ul>
                            <p className='text-gray-300 leading-relaxed mt-2'><strong>Step 5: Track Your Team’s Performance</strong></p>
                            <p className='text-gray-300 leading-relaxed mt-2'>Once the real match starts:</p>
                            <ul className='list-disc list-inside text-gray-300 leading-relaxed mt-2'>
                                <li>Monitor your players' performance live in the app.</li>
                                <li>Your team’s score updates in real-time based on player stats like runs, wickets, catches, etc.</li>
                                <li>Check your rank on the leaderboard as the match progresses.</li>
                            </ul>
                            <p className='text-gray-300 leading-relaxed mt-5'>Tips for Success</p>
                             <ul className='list-disc list-inside text-gray-300 leading-relaxed mt-2'>
                                <li>Stay updated with player form, team news, and pitch conditions.</li>
                                <li>Always check the final playing XI before the match starts.</li>
                                <li>Use practice contests to refine your strategy before entering high-stake contests.</li>
                            </ul>
                            <p className='text-gray-300 leading-relaxed mt-5'>Start playing now and turn your cricket passion into victory with <strong>Crickets11!</strong></p>
                            <p className='text-gray-300 leading-relaxed mt-1'> <strong>🏏💥 Play. Score. Win.</strong></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HowToPlay
