import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FileText } from 'lucide-react';

const Payment: React.FC = () => {
    useEffect(() => {
        document.title = 'Payment - Crickets11';
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
                            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Payment</h1>
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
                                <p className='text-gray-300 leading-relaxed'>Tap the Wallet icon (top-right corner) or your Profile Picture (top-left corner) on the homepage.</p>
                                <p className='text-gray-300 leading-relaxed mt-4'>Initiate the Add Cash Process:</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>Click on "Add Cash".</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>Enter the amount you wish to add.</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>Choose a Payment Method:</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>UPI: Select your preferred UPI app (e.g., GPay, PhonePe, Paytm) or enter your UPI ID.</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>Credit/Debit Cards: Enter your card details. Note that American Express and international cards are not accepted.</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>Wallets: Use popular wallets like Paytm, PhonePe, or Amazon Pay.
                                    Net Banking: Choose your bank and follow the prompts.</p>
                                <p className='text-gray-300 leading-relaxed mt-4'>Complete the Transaction:</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>Follow the on-screen instructions to finalize the payment.</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>Note: Deposits are typically instant but can take up to 24 hours. If the amount isn't credited within this timeframe, it will be auto-refunded to your source account.</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>How to Withdraw Winnings from Crickets11</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>Tap your Profile Picture &gt; My Balance &gt; Withdraw.</p>
                                <p className='text-gray-300 leading-relaxed mt-4'>Ensure Verification:</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>PAN Card: Verify your PAN details.</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>Bank Account: Add and verify your bank account details.</p>
                                <p className='text-gray-300 leading-relaxed mt-4'>Initiate Withdrawal:</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>Enter the amount you wish to withdraw (must meet the minimum withdrawal limit)</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>Confirm the withdrawal request.</p>
                                <p className='text-gray-300 leading-relaxed mt-1'>Note: Withdrawals beyond the daily instant limit may take up to 24 hours to process. The amount may take up to 3 working days to reflect in your bank account.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Payment;