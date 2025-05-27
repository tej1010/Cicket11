import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Shield } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    document.title = 'Privacy Policy - Crickets11';
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
                <Shield className="h-8 w-8 text-blue-400" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Privacy Policy</h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Last Updated: November 1, 2025
              </p>
            </div>
          </div>
        </div>
        
        {/* Privacy policy content */}
        <div className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#132548] rounded-xl p-8 mb-8">
                <p className="text-gray-300 leading-relaxed">
                At <strong>Crickets11</strong>, operated by <strong>Stocklift Solutions Private Limited</strong>, we value your trust and are fully committed to protecting your personal information. This Privacy Policy outlines how we collect, use, share, and safeguard your data when you use our platform, in compliance with the applicable laws of India, including the Information Technology Act, 2000 and its allied rules
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                By accessing or using our platform, you agree to the terms of this Privacy Policy. Capitalized terms not defined herein shall have the meaning ascribed to them in our <strong>Terms and Conditions</strong>
                </p>
              </div>
              

                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <p className="mb-2">We collect information to enhance your experience and provide our services securely and effectively.</p>
                    <p className='mb-2'><strong>A. Information You Provide Directly</strong></p>
                    <ul className='list-disc list-inside mb-2'>
                      <li>Full Name and Username</li>
                      <li>Email Address</li>
                      <li>Date of birth</li>
                      <li>State of Residence</li>
                      <li>Government-issued Identification (Aadhaar, PAN, etc)</li>
                    </ul>
                    <p className='mb-2'><strong>B. Information We Collect Automatically</strong></p>
                    <ul className='list-disc list-inside mb-2'>
                      <li>Device type and specifications.</li>
                      <li>Operating system and browser version</li>
                      <li>IP address and network provider</li>
                      <li>Location data (where permitted)</li>
                    </ul>
                    <p>We may also collect <strong>sensitive personal information</strong>, such as UPI ID or bank account details, strictly for processing payments. We do <strong>not store full financial data</strong> beyond the transaction purpose.</p>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <p className="mb-2">The information collected is used to:</p>
                    <ul className='list-disc list-inside mb-2'>
                      <li>Operate and improve our platform, services, and user experience.</li>
                      <li>Communicate important updates, offers, and contest-related information.</li>
                      <li>Share promotional content from our affiliates and partners (with your consent).</li>
                    </ul>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">3. Sharing and Disclosure of Information</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <p className="mb-2">We may share your information with:</p>
                    <ul className='list-disc list-inside mb-2'>
                      <li><strong>Authorized service providers</strong> for payment processing, analytics, or technical support.</li>
                      <li><strong>Marketing and affiliate partners for </strong>promotional campaigns (under strict confidentiality obligations).</li>
                      <li><strong>Regulatory authorities or enforcement agencies</strong> when required by applicable law.</li>
                    </ul>
                    <p>By using our platform, you consent to such sharing, including <strong>data transfers outside India</strong>, in accordance with this Privacy Policy.</p>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">4. Cookies and Tracking Technologies</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <p className="mb-2">We use <strong>cookies, pixels, and other tracking tools</strong> to:</p>
                    <ul className='list-disc list-inside mb-2'>
                      <li>Store user preferences and session data</li>
                      <li>Deliver personalized advertisements and offers</li>
                      <li>Analyze user behavior and improve platform performance</li>
                    </ul>
                    <p>You may manage cookie preferences through your browser settings. Disabling cookies may affect certain features and functionality.</p>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <p className="mb-2">We implement robust, industry-standard security measures to protect your information, including:</p>
                    <ul className='list-disc list-inside mb-2'>
                      <li>Encrypted data transmission and secure server environments</li>
                      <li>Password-protected access and role-based control mechanisms</li>
                    </ul>
                    <p>While we strive for full security, no digital system is completely immune to threats. Data may be processed or stored outside India, subject to applicable safeguards.</p>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">6. Advertising and Analytics</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <p className="mb-2">We may share <strong>anonymized and aggregated</strong> user data with advertising networks or analytics providers. This data does <strong>not include personally identifiable information</strong>, unless explicitly consented to by you.</p>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">7. Data Retention</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <p className="mb-2">Your personal data is retained:</p>
                    <ul className='list-disc list-inside mb-2'>
                      <li>As long as it is necessary for the purposes mentioned in this Privacy Policy</li>
                      <li>As required by applicable law or legitimate business interests</li>
                    </ul>
                    <p>Once no longer needed, data will be securely deleted or anonymized.</p>
                    <p className='mt-2'><strong>User Account Data:</strong> Retained for the duration your account remains active and for a period of 5 years thereafter for compliance with applicable laws, including tax and regulatory requirements.</p>
                    <p className='mt-2'><strong>Gameplay and Transaction Data:</strong> Retained for 8 years from the date of transaction to comply with statutory obligations under applicable laws including the Income Tax Act and GST laws.</p>
                    <p className='mt-2'><strong>KYC Documents:</strong> Retained for 5 years from the date of closure of account or last transaction, whichever is later, as mandated under the Prevention of Money Laundering Act, 2002 (PMLA).</p>
                    <p className='mt-2'><strong>Cookies and Device Information:</strong> Retained for up to 2 years or as long as necessary for analytics and platform optimization purposes.</p>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">8. Your Rights – Account & Data Deletion</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <p className="mb-2">You may request:</p>
                    <ul className='list-disc list-inside mb-2'>
                      <li><strong>Account deactivation or deletion</strong></li>
                      <li><strong>Removal of personal data</strong></li>
                    </ul>
                    <p>Such requests can be initiated via the <strong>Help & Support</strong> section. Your data will be removed or anonymized within <strong>30 working days</strong>, subject to any mandatory retention obligations.</p>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">9. Governing Law and Jurisdiction</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <p>This Privacy Policy shall be governed by and construed in accordance with the <strong>laws of India.</strong> Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the courts mentioned in our Terms and Conditions.</p>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">10. Updating Your Information</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <p>You are responsible for ensuring that your personal information remains accurate and up-to-date. You can modify your details anytime through your <strong>account settings</strong>.</p>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <p>If you have any questions or concerns regarding this Privacy Policy or your personal information, please contact our <strong>Help & Support</strong> team through the app or website.</p>
                  </div>
                </div>
                <div className="mb-8">
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <p>Thank you for choosing Crickets11. Your privacy matters to us. 🏏</p>
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

export default PrivacyPolicy;