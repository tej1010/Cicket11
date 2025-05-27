import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FileText } from "lucide-react";

const Technical: React.FC = () => {
    useEffect(() => {
        document.title = "Technical - Crickets11";
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
                                Technical
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
                                <p className="text-gray-300 text-xl font-bold leading-relaxed">1. Platform</p>
                                <ul className="list-disc list-inside mt-2">
                                    <li>Available on Android (APK from Crickets11 website) .</li>
                                    <li>Also accessible via Web Browser (desktop and mobile version).</li>
                                </ul>
                                <p className="text-gray-300 text-xl font-bold leading-relaxed mt-1">
                                2. Programming and Tech Stack (Behind the Scenes)
                                </p>
                                <ul className="list-disc list-inside mt-2">
                                    <li>Frontend:
                                        <ul className="list-disc list-inside my-1 pl-4">
                                            <li>ReactJS for web UI</li>
                                            <li>Swift (for iOS app)</li>
                                            <li>Kotlin / Java (for Android app)</li>
                                        </ul>
                                    </li>
                                    <li>Backend:
                                        <ul className="list-disc list-inside my-1 pl-4">
                                            <li>Node.js and Java are commonly used for real-time updates and data handling.</li>
                                            <li>Microservices architecture</li>
                                        </ul>
                                    </li>
                                    <li>Database:
                                        <ul className="list-disc list-inside my-1 pl-4">
                                            <li>MongoDB (NoSQL for flexibility and fast access).</li>
                                            <li>MySQL (for structured transactional data).</li>
                                        </ul>
                                    </li>
                                    <li>Cloud Infrastructure:
                                        <ul className="list-disc list-inside my-1 pl-4">
                                            <li>Runs mostly on Amazon Web Services (AWS) for scalability, storage, and security.</li>
                                        </ul>
                                    </li>
                                    <li>Real-Time Data:
                                        <ul className="list-disc list-inside my-1 pl-4">
                                            <li>Uses web sockets & APIs for live match updates, scoring, & instant contest updates.</li>
                                            <li>Partners with live match data providers</li>
                                        </ul>
                                    </li>
                                </ul>
                                <p className="text-gray-300 text-xl font-bold leading-relaxed mt-4">3. Security & Compliance</p>
                                <ul className="list-disc list-inside mt-2">
                                    <li><strong>SSL Encryption:</strong> Protects data transmission.</li>
                                    <li><strong>KYC Verification:</strong> Mandatory for money withdrawals (PAN card + Bank verification).</li>
                                    <li>Payment Gateways:
                                        <ul className="list-disc list-inside my-1 pl-4">
                                            <li>Supports secure payment partners like RBL Bank, Sab Paisa and Juspay.</li>
                                        </ul>
                                    </li>
                                </ul>
                                <p className="text-gray-300 text-xl font-bold leading-relaxed mt-4">4. Performance Optimization</p>
                                <ul className="list-disc list-inside mt-2">
                                    <li><strong>Load Balancers:</strong> Manage huge traffic spikes (especially during IPL, World C</li>
                                    <li><strong>Content Delivery Network (CDN):</strong>
                                        <ul className="list-disc list-inside my-1 pl-4">
                                            <li>For faster loading of app/web assets across India.</li>
                                        </ul>
                                    </li>
                                </ul>
                                <p className="text-gray-300 text-xl font-bold leading-relaxed mt-4">5. App Size</p>
                                <ul className="list-disc list-inside mt-2">
                                    <li>Android APK: ~50-70 MB</li>
                                    <li>Lightweight compared to many gaming apps because of efficient coding.</li>
                                </ul>
                                <p className="text-gray-300 text-xl font-bold leading-relaxed mt-4">6. Supported Devices</p>
                                <ul className="list-disc list-inside mt-2">
                                    <li>Android: Version 5.0 (Lollipop) and above.</li>
                                    <li>Web: Any modern browser (Chrome, Safari, Edge, Firefox</li>
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

export default Technical;
