import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FileText } from 'lucide-react';

const Contests: React.FC = () => {
    useEffect(() => {
        document.title = 'Contests - Crickets11';
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
                            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Contests</h1>
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
                                <p className='text-gray-300 leading-relaxed'>Go to "Contests" Tab:</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>After creating a team, you'll see lots of contests (Mega, Head-to-Head, Small leagues, etc.).</p>
                                <p className='text-gray-300 leading-relaxed mt-4'>Choose a Contest:</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>Tap on any contest you like. Look at the Entry Fee and Winnings.</p>
                                <p className='text-gray-300 leading-relaxed mt-4'>Pay Entry Fee:</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>Use your wallet balance or add money.</p>
                                <p className='text-gray-300 leading-relaxed mt-4'>Confirm & Join:</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>Done! Your team is now part of that contest.</p>
                                <p className='text-gray-300 leading-relaxed mt-4'>🛡️ How to Create Your Own Contest:.</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>Select the Match you want to create a contest for.</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>Tap on "Create Contest" Button </p>
                                <p className='text-gray-300 leading-relaxed mt-4'>Set Contest Details:</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>Entry Fee (e.g., ₹50, ₹100, etc.)</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>Total Winners (how many people will win).</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>Maximum Participants (like 2, 5, 10 people).</p>
                                <p className='text-gray-300 leading-relaxed mt-4'>Customize Winnings:</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>You can decide how the prize money is split.</p>
                                <p className='text-gray-300 leading-relaxed mt-4'>Create and Share:</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>Once created, you’ll get a link.</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>Share it with your friends — they can join using the link.</p>
                                <p className='text-gray-300 leading-relaxed mt-4'>Important:</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>Minimum 2 players are needed for a private contest.</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>If contest is not filled before the match starts, it will get cancelled and money will be refunded.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contests;