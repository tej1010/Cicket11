import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FileText } from 'lucide-react';

const CommunityGuidelines: React.FC = () => {
  useEffect(() => {
    document.title = 'Community Guidelines - Crickets11';
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
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Community Guidelines</h1>
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
                At Crickets11, we are committed to providing a <strong>safe, responsible, and law-abiding fantasy gaming experience</strong> for all users. These Community Guidelines are designed to promote a respectful environment, ensure compliance with applicable Indian laws, and protect the integrity of the platform.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                By using the Crickets11 platform, you agree to comply with these guidelines. <strong>Violations may lead to content removal, temporary suspension, permanent account bans, or legal escalation</strong> where appropriate.
                </p>
                <p className='text-gray-300 leading-relaxed mt-4 italic'>Capitalized terms used but not defined herein shall have the meanings assigned to them in our Terms & Conditions.</p>
              </div>
              
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">🔒 Restricted States for Paid Contests</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <p className="mb-2">In accordance with applicable Indian laws and judicial interpretations, <strong>participation in Paid Contests</strong> (i.e., contests involving real-money entry fees) is <strong>strictly prohibited</strong> for users residing in the following states:</p>
                    <ul className='list-disc list-inside mb-2'>
                      <li>Andhra Pradesh</li>
                      <li>Assam</li>
                      <li>Nagaland</li>
                      <li>Sikkim</li>
                      <li>Telangana</li>
                    </ul>
                    <p className='mb-2'>By entering any Paid Contest, you confirm and declare that:</p>
                    <ul className='list-disc list-inside'>
                      <li>You <strong>do not reside</strong> in any of the above-mentioned restricted states;</li>
                      <li>You will <strong>not provide any false information or misrepresentation</strong> to circumvent these restrictions;</li>
                      <li>You accept that violating these rules may lead to <strong>permanent account deactivation</strong> and <strong>legal reporting</strong> as per applicable law (“Applicable Law”).</li>
                    </ul>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">🚫 Prohibited Conduct and Content</h2>
                  <h2 className="text-xl font-semibold text-white mb-4">1. Spam and Malicious Activity</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <ul className='list-disc list-inside mb-2'>
                      <li>Do not send unsolicited or repetitive messages.</li>
                      <li>Avoid using bots, automation tools, or artificial means to manipulate results or rankings.</li>
                      <li>Malicious redirection or promotion of harmful websites is strictly forbidden.</li>
                      <li>Any attempt to influence results through unfair means, including monetary inducements, is prohibited.</li>
                    </ul>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-white mb-4">2. Misinformation & False Identity</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <ul className='list-disc list-inside mb-2'>
                      <li>Maintain accurate user information and identity details..</li>
                      <li>Impersonation of users, public figures, organizations, or Crickets11 staff is not allowed.</li>
                      <li>Sharing misleading content that could result in harm, confusion, or loss is prohibited.</li>
                      <li>Creation of duplicate or fake accounts to avoid restrictions is strictly forbidden.</li>
                    </ul>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-white mb-4">3. Violence & Unlawful Behavior</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <ul className='list-disc list-inside mb-2'>
                      <li>Content glorifying or inciting violence, criminal conduct, or self-harm will not be tolerated.</li>
                      <li>Promotion of fraudulent schemes or exploitative practices is strictly prohibited.</li>
                      <li>Threats or incitement of harm—physical, psychological, or financial—against individuals or groups is a serious violation.</li>
                    </ul>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-white mb-4">4. Harassment & Bullying</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <ul className='list-disc list-inside mb-2'>
                      <li>Engage respectfully with all users.</li>
                      <li>Do not engage in personal attacks, threats, or targeted harassment.</li>
                      <li>Sharing someone’s personal information (doxxing) without consent is not permitted.</li>
                      <li>Content mocking individuals or communities based on personal experiences, beliefs, or identity is not allowed.</li>
                    </ul>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-white mb-4">5. Hate Speech</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <ul className='list-disc list-inside mb-2'>
                      <li>Avoid any form of hate speech targeting caste, religion, ethnicity, gender, disability, or sexual orientation..</li>
                      <li>Crickets11 maintains a zero-tolerance policy toward content that incites hatred or discrimination.</li>
                    </ul>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-white mb-4">6. Copyright & Intellectual Property Violations</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <ul className='list-disc list-inside mb-2'>
                      <li>Share only original or authorized content.</li>
                      <li>Do not plagiarize or misrepresent another user’s content or creations.</li>
                      <li>Respect intellectual property rights and applicable copyright laws.</li>
                    </ul>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-white mb-4">7. Platform Security & Data Privacy</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <ul className='list-disc list-inside mb-2'>
                      <li>Do not attempt to hack, phish, or access accounts or data without authorization.</li>
                      <li>Avoid uploading or distributing malware, spyware, or harmful software.</li>
                      <li>Never share sensitive financial or identification information—your own or others’.</li>
                    </ul>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-white mb-4">8. Sexually Inappropriate or Offensive Content</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <ul className='list-disc list-inside mb-2'>
                      <li>Any content involving sexual exploitation, nudity, or suggestive depictions of minors is strictly banned.</li>
                      <li>Content promoting sexual violence or assault in any form is not permitted.</li>
                    </ul>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">📢 Reporting & Moderation Process</h2>
                  <h2 className="text-xl font-semibold text-white mb-4">Reporting Violations</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <p className='mb-2'>If you encounter any content or behavior that violates these guidelines, please report it using the in-app "Report" feature. Include:</p>
                    <ul className='list-disc list-inside mb-2'>
                      <li>Usernames or User IDs involved</li>
                      <li>Screenshots or links (if applicable)</li>
                      <li>A brief description of the issue</li>
                    </ul>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-white mb-4">Moderation Actions</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <p className='mb-2'>Our moderation team will review all reports and take appropriate action, which may include:</p>
                    <ul className='list-disc list-inside mb-2'>
                      <li>Content takedown</li>
                      <li>Account warnings or temporary suspension</li>
                      <li>Permanent bans for repeat or serious violations</li>
                    </ul>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-white mb-4">Group Management (If Applicable)</h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <p className='mb-2'>Group admins are expected to:</p>
                    <ul className='list-disc list-inside mb-2'>
                      <li>Maintain respectful dialogue within groups</li>
                      <li>Take proactive steps against violators (e.g., muting or removing them)</li>
                      <li>Alert our moderation team if further action is needed</li>
                    </ul>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">🔁 Enforcement & Updates
                  </h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <p>These guidelines are subject to change in alignment with <strong>evolving laws, industry best practices, and user safety needs.</strong> Major updates will be notified via email or in-app alerts. Continued use of the platform after such changes constitutes acceptance.</p>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">🙏 Thank You for Being Part of Crickets11
                  </h2>
                  <div className="bg-[#132548] rounded-xl p-8 text-gray-300 leading-relaxed">
                    <p className='mb-2'>By adhering to these guidelines, you help us build a responsible, secure, and fun fantasy gaming community. We appreciate your passion for cricket and your commitment to fair play.</p>
                    <p><strong>Let’s Play Responsibly. Compete Fairly. Grow Together. 🏏🚀</strong></p>
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

export default CommunityGuidelines;