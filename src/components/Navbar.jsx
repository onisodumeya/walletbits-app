import { Link } from 'react-router-dom';
import { PriBtn, SecBtn } from '../components/Buttons.jsx'



function Navbar() {
  return (
    <nav className='flex justify-between py-5 px-10  items-center'>

      <Link to="/" className='' > WALLETBITS</Link>
      
      <div className='flex items-center gap-10'>

        {/* navbar links */}
        <div className='flex gap-8'>
      
          <Link className='' to="/">Home</Link>
          <Link to="/how-it-works" >How it Works</Link>
          <Link to="/rates">Rates</Link>
          <Link to="/about-us">About us</Link>
      
        </div>
      
        {/* navbar buttons */}
        <div className='flex gap-5 items-center'>
      
          <Link to="/sign-in"><SecBtn btnText="Sign in" /></Link>
          <Link to="/register"><PriBtn btnText="Create Free Account" /></Link>
        
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;