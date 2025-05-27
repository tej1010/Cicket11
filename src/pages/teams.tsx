import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FileText } from 'lucide-react';

const Teams: React.FC = () => {
    useEffect(() => {
        document.title = 'Teams - Crickets11';
    }, []);
    return (
        <div className="bg-[#0D1832] min-h-screen">
            <Navbar />

            <div className="pt-16 bg-[#0D1832]">
                {/* Hero section */}
                <div className="bg-gradient-to-b from-[#1a3366] to-[#0D1832] py-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <div className="inline-block bg-blue-600/20 p-4 rounded-full mb-4">
                                <FileText className="h-8 w-8 text-blue-400" />
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Teams</h1>
                            {/* <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Last Updated: November 1, 2025
              </p> */}
                        </div>
                    </div>
                </div>

                {/* Terms content */}
                <div className="py-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-[#132548] rounded-xl p-8 mb-8">
                                <p className='text-gray-300 leading-relaxed mt-4'>After registering on app or web based application:</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>On the home screen, you’ll see upcoming matches.</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>Tap on the match you want to create a team for.</p>
                                <p className='text-gray-300 leading-relaxed mt-4'>Create Your Team:</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>You’ll get 100 credits to pick your players.</p>
                                <p className='text-gray-300 leading-relaxed mt-4'>You must select:</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>1–4 Wicket-keepers </p>
                                <p className='text-gray-300 leading-relaxed mt-1'>3–6 Batsmen 🏏</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>1–4 All-rounders 🏃‍♂️</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>3–6 Bowlers 🎯</p>
                                <p className='text-gray-300 leading-relaxed mt-4'>Follow Team Rules:</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>You can pick players from both teams (not just one side).</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>You must have a total of 11 players exactly.</p>
                                <p className='text-gray-300 leading-relaxed mt-4'>Pick Captain and Vice-Captain:</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>Choose 1 Captain (he scores 2× points).</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>Choose 1 Vice-Captain (he scores 1.5× points).</p>
                                <p className='text-gray-300 leading-relaxed mt-4'>Important: Pick top performers for these roles!</p>
                                <p className='text-gray-300 leading-relaxed mt-4'>Save the Team:</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>After selecting players and captain/vice-captain, save your team.</p>
                                <p className='text-gray-300 leading-relaxed mt-4'>Join Contests:</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>Now you can use your team to enter paid contests.</p>
                                <p className='text-gray-300 leading-relaxed mt-4'>⚡ Extra Tips:</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>Always check pitch report and playing 11 before the match starts.
                                    Try creating 2-3 different teams to increase your winning chances.
                                    Balance your team — not only star players but also some underrated performers.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Teams;