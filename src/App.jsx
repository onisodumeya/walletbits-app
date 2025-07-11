import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/AboutUs.jsx'
import HowItWorks from './pages/HowItWorks.jsx';
import Register from './pages/Register.jsx';
import SignIn from './pages/SignIn.jsx';
import { ForgotPassword, OTP } from './pages/ForgotPassword.jsx';
import ResetPassword from './pages/ResetPassword.jsx'

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
      </Routes>
    </Router>
  );
}

export default App;