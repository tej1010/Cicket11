import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HelpCenter from './pages/HelpCenter';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import PointsTable from './pages/PointsTable';
import RefundpPolicy from './pages/refundpPolicy';
import CommunityGuidelines from './pages/communityGuidelines';
import AboutUs from './pages/aboutUs';
import Account from './pages/acoount';
import Teams from './pages/teams';
import Contests from './pages/contests';
import Payment from './pages/payment';
import Rules from './pages/rules';
import Technical from './pages/technical';
import HowToPlay from './pages/howToPlay';

function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen text-dark">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/points" element={<PointsTable />} />
          <Route path="/refundpPolicy" element={<RefundpPolicy />} />
          <Route path="/community-guidelines" element={<CommunityGuidelines />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/help/account" element={<Account />} />
          <Route path="/help/teams" element={<Teams />} />
          <Route path="/help/contests" element={<Contests />} />
          <Route path="/help/payments" element={<Payment />} />
          <Route path="/help/rules" element={<Rules />} />
          <Route path="/help/technical" element={<Technical />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;