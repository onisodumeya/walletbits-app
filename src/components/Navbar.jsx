import { Link } from 'react-router-dom';
import { PriBtn, SecBtn } from '../components/Buttons.jsx'



function Navbar() {
  return (
    <nav className='flex justify-between py-[20px] px-[40px]  items-center'>
      <Link to="/" className='' > WALLETBITS</Link>
      <div className='flex items-center gap-[20px]'>
        <Link to="/">Home</Link>
        <Link to="/how-it-works" >How it Works</Link>
        <Link to="/rates">Rates</Link>
        <Link to="/about-us">About us</Link>
        <Link to="/sign-in"><SecBtn btnText="Sign in" /></Link>
        <Link to="/register"><PriBtn btnText="Get started" /></Link>
      </div>
    </nav>
  );
}

export default Navbar;