import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FileText } from 'lucide-react';

const RefundpPolicy: React.FC = () => {
  useEffect(() => {
    document.title = 'Refund and Cancellation Policy - Crickets11';
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
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Refund and Cancellation Policy</h1>
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
                <p className="text-gray-300 leading-relaxed">
                At <strong>Crickets11</strong>, we strive to offer a seamless and fair gaming experience. This <strong>Refund and Cancellation Policy</strong> outlines the conditions under which refunds may be issued for real-money fantasy cricket contests conducted on our platform.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                By registering and participating in contests on Crickets11, you agree to the terms set forth below.
                </p>
              </div>
              
              <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">1. Refund Eligibility</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <ul className='list-disc list-inside mb-2'>
                      <li>If there is an <strong>error in the services</strong> provided by Crickets11, and such error is verified upon internal investigation, the <strong>Entry Fee may be refunded</strong> at our sole discretion.</li>
                      <li><strong>Requests for refunds must be genuine and clearly justified.</strong> All claims will undergo a thorough internal review process.</li>
                    </ul>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">2. Contest Participation & Cancellations</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <ul className='list-disc list-inside mb-2'>
                      <li><strong>Please read the rules of each Game or Contest carefully before participating.</strong> Entry into a contest is considered final once confirmed.</li>
                      <li><strong>Registrations are non-cancellable</strong> by users once a contest has been joined.</li>
                      <li>However, in <strong>exceptional cases</strong>, such as:
                        <ul className='list-disc list-inside mb-2 ml-4'>
                            <li>Payment failures or duplicate payments</li>
                            <li>Technical issues arising due to Crickets11 systems or partner payment gateways
                            We may, at our discretion, cancel the participation and refund the Entry Fee.</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">3. Refund Processing Timeline</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <ul className='list-disc list-inside mb-2'>
                      <li>If your participation is cancelled due to an eligible issue, the Entry Fee will be refunded within a <strong>reasonable time frame</strong>, typically within <strong>2 business days</strong>.</li>
                      <li>Refunds will be credited to the <strong>original payment method</strong> used during the transaction—whether a credit/debit card, UPI, or wallet via payment gateway.</li>
                    </ul>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">4. All Transactions Are Final</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <ul className='list-disc list-inside mb-2'>
                      <li>All <strong>deposits, purchases, and entry fees paid</strong> on Crickets11 are considered <strong>final and non-refundable</strong>, except in cases of verifiable errors.</li>
                      <li><strong>No refunds will be provided</strong> for dissatisfaction arising from gameplay outcomes or user decisions.</li>
                    </ul>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">5. Reporting Transaction Errors</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <ul className='list-disc list-inside mb-2'>
                      <li>If you believe there has been an <strong>error in your transaction</strong>, you must notify us within <strong>3 (three) days</strong> of the transaction date.</li>
                      <li>Please submit details of the transaction through the <strong>Help & Support</strong> section.</li>
                      <li>Our team will review the claim and determine the resolution at <strong>our sole discretion</strong>.</li>
                    </ul>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">6. Idle Account Balance</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <ul className='list-disc list-inside mb-2'>
                      <li>Users must utilize any amount available in their <strong>Crickets11 account within 365 days.</strong></li>
                      <li>Crickets11 reserves the right to <strong>forfeit any unused balance</strong> after this period.</li>
                      <li>Withdrawals of idle funds will be allowed <strong>only in exceptional cases,</strong> based on a <strong>case-by-case evaluation</strong> by Crickets11’s support team.</li>
                    </ul>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">7. Refund Method and Timelines</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <ul className='list-disc list-inside mb-2'>
                      <li>Once a refund is approved, the amount will be processed within <strong>2 working days</strong> and returned to the original payment source.</li>
                      <li>Refunds via credit/debit cards, UPI, or payment gateways may take additional time based on your bank’s processing policies.</li>
                    </ul>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">8. Need Help?</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <p className='mb-2'>For refund or cancellation-related queries, please contact our <strong> Help & Support</strong> team through the app or website. Kindly provide:</p>
                    <ul className='list-disc list-inside mb-2'>
                      <li>Transaction ID</li>
                      <li>Date and time of transaction</li>
                      <li>Screenshot or payment reference, if available</li>
                    </ul>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">8. Need Help?</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <p><strong>Note:</strong> Crickets11 reserves the right to modify or amend this Refund and Cancellation Policy at any time. Continued use of the platform constitutes acceptance of any changes.</p>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <p><strong>Thank you for playing on Crickets11 – Where your skills meet fair play. 🏏💰</strong></p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default RefundpPolicy;