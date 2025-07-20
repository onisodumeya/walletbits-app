import Home from './pages/Home.jsx';
import About from './pages/AboutUs.jsx'
import HowItWorks from './pages/HowItWorks.jsx';
import Register from './pages/Register.jsx';
import SignIn from './pages/SignIn.jsx';
import ResetPassword from './pages/ResetPassword.jsx'
import Overview from './pages/user-dashboard/Overview.jsx';
import Verification from './pages/user-dashboard/profile/Verification.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ForgotPassword, OTP } from './pages/ForgotPassword.jsx';

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
        <Route path="/verification" element={<Verification />} />
      </Routes>
    </Router>
  );
}

export default App;