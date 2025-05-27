import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FileText } from 'lucide-react';

const TermsConditions: React.FC = () => {
  useEffect(() => {
    document.title = 'Terms & Conditions - Crickets11';
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
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Terms & Conditions</h1>
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
                Welcome to Crickets11, the flagship fantasy sports platform operated by <strong>STOCKLIFT SOLUTIONS PRIVATE LIMITED</strong>. By accessing or using our services, you agree to be bound by the following <strong>Terms and Conditions</strong> ("Terms"), including any additional terms that may be introduced from time to time.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  These Terms constitute a <strong>legally binding agreement</strong> between you (“User” or “You”) and Crickets11. If you do not agree with any part of these Terms, please refrain from using our Platform.
                </p>
              </div>
              
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <p className="mb-2">Your continued use of the Crickets11 platform implies your <strong>full acceptance of these Terms</strong>, including any <strong>supplemental rules or conditions</strong> that may apply to specific contests or services.</p>
                    <p className="mb-2">In the event of a conflict between these Terms and any contest-specific rules or additional terms, such additional terms shall prevail.</p>
                    <p className='mb-2'>By accepting these Terms, you also <strong>consent to receive communications</strong> from Crickets11 and/or its authorized partners, including:</p>
                    <ul className='list-disc list-inside mb-2'>
                      <li>Promotional announcements</li>
                      <li>Administrative notifications</li>
                      <li>Contest updates</li>
                      <li>Direct account messages</li>
                      <li>Other relevant communications through email, SMS, or in-app notifications</li>
                    </ul>
                    <p>To ensure proper delivery, please mark Crickets11 as a <strong>safe sender</strong> across your email and SMS platforms.</p>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">2. User Account Registration</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <p className="mb-2">To access Crickets11 services, you must register and maintain an active <strong>User Account</strong>. During registration, you may be required to submit and update the following details:</p>
                    <ul className='list-disc list-inside mb-2'>
                      <li>Full name</li>
                      <li>Chosen team name</li>
                      <li>Mobile number</li>
                      <li>Residential address and state</li>
                      <li>Gender</li>
                      <li>Date of birth</li>
                      <li>Aadhaar number or other valid ID</li>
                      <li>PAN (Permanent Account Number)</li>
                      <li>UPI ID or bank account details</li>
                    </ul>
                    <p>We reserve the right to <strong>verify your identity (KYC)</strong> at any point, either to comply with applicable laws or at our discretion</p>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">3.Eligibility to Participate</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <p className="mb-2">To participate in <strong>Paid Contests</strong> on Crickets11, you must:</p>
                    <ul className='list-disc list-inside'>
                      <li>Be an Indian citizen,</li>
                      <li>Be at least 18 years of age, and</li>
                      <li>Have a valid Indian mobile number for verification and account creation</li>
                    </ul>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">4. Restricted States</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <p className="mb-2">As per applicable Indian laws and judicial interpretations, real-money gaming is restricted in certain states. Accordingly, <strong>users residing in the following states are prohibited from participating in Paid Contests</strong> on Crickets11:</p>
                    <ul className='list-disc list-inside'>
                      <li>Andhra Pradesh</li>
                      <li>Assam</li>
                      <li>Nagaland</li>
                      <li>Sikkim</li>
                      <li>Telangana</li>
                    </ul>
                    <p className='mb-2'>By accessing any Paid Contest, you <strong>confirm and declare </strong> that you are <strong>not a resident of any of these Restricted States</strong> and that you <strong>will not provide false information or misrepresent your location</strong> to bypass the law.</p>
                    <p>Violation of this provision may lead to <strong>permanent suspension of your account</strong> and <strong>legal reporting</strong> in accordance with applicable laws ("Applicable Law").</p>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">5. Modifications</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <p className="mb-2">Crickets11 reserves the right to <strong>update or modify these Terms</strong> at any time. Changes will be posted on the platform, and continued use of the platform after any modifications constitutes <strong>acceptance of the revised Terms</strong>.</p>
                  </div>
                </div>
                <div className="mb-8">
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <p className="mb-2">For any queries related to these Terms, you may reach out to our Help & Support team through the platform.</p>
                    <p><strong>Thank you for choosing Crickets11 — Play responsibly. Win fairly. 🏏</strong></p>
                  </div>
                </div>
                <div className="mb-8">
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <p><strong>Thank you for choosing Crickets11 — Play responsibly. Win fairly. 🏏</strong></p>
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

export default TermsConditions;