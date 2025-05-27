import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FileText } from "lucide-react";

const Rules: React.FC = () => {
    useEffect(() => {
        document.title = "Rules - Crickets11";
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
                            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Rules
                            </h1>
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
                            <div className="bg-[#132548] rounded-xl p-8 mb-8 text-gray-300">
                                <p className="text-gray-300 text-xl font-bold leading-relaxed mt-1">
                                    1. Team Composition
                                </p>
                                <ul className="list-disc list-inside mt-2">
                                    <li>You have to select exactly 11 players.</li>
                                    <li>You must pick within a budget of 100 credits.</li>
                                    <li>Team should have:
                                        <ul className="list-disc list-inside my-1 pl-4">
                                            <li>1-4 Wicketkeepers</li>
                                            <li>3-6 Batsmen</li>
                                            <li>1-4 All-Rounders</li>
                                            <li>3-6 Bowlers</li>
                                        </ul>
                                    </li>
                                    <li>Players can be from both teams (not just one).</li>
                                </ul>
                                <p className="text-gray-300 text-xl font-bold leading-relaxed mt-4">2. Captain and Vice-Captain</p>
                                <ul className="list-disc list-inside mt-2">
                                    <li>You must choose:
                                        <ul className="list-disc list-inside my-1 pl-4">
                                            <li>1 Captain → earns 2× points.</li>
                                            <li>1 Vice-Captain → earns 1.5× points.</li>
                                        </ul>
                                    </li>
                                    <li>Picking smart Captains and VCs is crucial — they can double your total points easily!</li>
                                </ul>
                                <p className="text-gray-300 text-xl font-bold leading-relaxed mt-4">3. Substitutes Don't Score</p>
                                <ul className="list-disc list-inside mt-2">
                                    <li>Only players who are part of the starting 11 (not substitutes) earn points.</li>
                                    <li>Impact Players (in some leagues) might score if rules specify.</li>
                                </ul>
                                <p className="text-gray-300 text-xl font-bold leading-relaxed mt-4">4. Live Updates</p>
                                <ul className="list-disc list-inside mt-2">
                                    <li>Points are updated live ball-by-ball.</li>
                                    <li>Final points are confirmed after the match ends.</li>
                                </ul>
                                <p className="text-gray-300 text-xl font-bold leading-relaxed mt-4">5. Multiple Teams Allowed</p>
                                <ul className="list-disc list-inside mt-2">
                                    <li>You can create multiple teams (up to 11 in one match).</li>
                                    <li>Useful if you want to hedge your bets with different combos!</li>
                                </ul>
                                <p className="text-gray-300 text-xl font-bold leading-relaxed mt-4">6. Contests Types</p>
                                <ul className="list-disc list-inside mt-2">
                                    <li><strong>Mega Contests:</strong> Huge prizes, lots of participants.</li>
                                    <li><strong>Head-to-Head:</strong> 1v1 battles</li>
                                    <li><strong>Small Leagues:</strong>  2-100 people, better chances to win.</li>
                                    <li><strong>Private Contests:</strong> Create and invite your friends.</li>
                                </ul>
                                <p className="text-gray-300 text-xl font-bold leading-relaxed mt-4">7. Fair Play Policy</p>
                                <ul className="list-disc list-inside mt-2">
                                    <li>One account = One person.</li>
                                    <li>No fake accounts, no multiple IDs.</li>
                                    <li>Violating rules can result in account suspension.</li>
                                </ul>
                                <p className="text-gray-300 text-xl font-bold leading-relaxed mt-4">🎯 Quick Tips to Win:</p>
                                <ul className="list-disc list-inside mt-2">
                                    <li>Always check the pitch report and playing 11 just before the match.</li>
                                    <li>Pick top-order batsmen and death over bowlers (they get more opportunities).</li>
                                    <li>Don't blindly pick only star players — go for form + opportunity</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Rules;
