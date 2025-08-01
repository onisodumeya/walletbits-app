import Home from './pages/Home.jsx';
import About from './pages/AboutUs.jsx'
import HowItWorks from './pages/HowItWorks.jsx';
import Register from './pages/authentication/Register.jsx';
import SignIn from './pages/authentication/SignIn.jsx';
import ResetPassword from './pages/ResetPassword.jsx'
import Overview from './pages/user-dashboard/Overview.jsx';
import Notification from './pages/user-dashboard/settings/Notification.jsx';
import Verification from './pages/user-dashboard/settings/Verification.jsx';
import ProfileSettings from './pages/user-dashboard/settings/ProfileSettings.jsx';
import PasswordSettings from './pages/user-dashboard/settings/PasswordSettings.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ForgotPassword, OTP } from './pages/ForgotPassword.jsx';
import Transaction from './pages/user-dashboard/Transaction.jsx';
import AdminDashboard from './pages/Admin/Admindashboard.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/transaction-history" element={<Transaction />} />
        <Route path="/settings/verification" element={<Verification />} />
        <Route path="/settings/notifications" element={<Notification />} />
        <Route path="/settings/profile-settings" element={<ProfileSettings />} />
        <Route path="/settings/password" element={<PasswordSettings />} />
         <Route path="/AdminDashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;