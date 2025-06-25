import { NavLink } from "react-router-dom";
import { PriBtn, SecBtn } from '../components/Buttons.jsx'



function Navbar() {
  return (
    <nav className='flex justify-between py-5 px-10  items-center'>

      <NavLink to="/" className='text-pink-400' ><h2 className='font-bold text-2xl'>WALLETBITS</h2></NavLink>
      
      <div className='flex items-center gap-10'>

        {/* navbar links */}
        <div className='flex gap-8'>

          <NavLink to="/" className={({ isActive }) => isActive ? "font-medium border-b-2 border-black" : "border-b-2 border-transparent nav-links"}>Home</NavLink>

          <NavLink to="/how-it-works" className={({ isActive }) => isActive ? "font-medium border-b-2 border-black" : "border-b-2 border-transparent nav-links transition-[0.3s]"}>How it Works</NavLink>
          
          <NavLink to="/rates" className={({ isActive }) => isActive ? "font-medium border-b-2 border-black" : "border-b-2 border-transparent nav-links transition-[0.3s]"}>Rates</NavLink>
          
          <NavLink to="/about-us" className={({ isActive }) => isActive ? "font-medium border-b-2 border-black" : "border-b-2 border-transparent nav-links transition-[0.3s]"}>About us</NavLink>
      
        </div>
      
        {/* navbar buttons */}
        <div className='flex gap-5 items-center'>
      
          <NavLink to="/sign-in"><SecBtn btnText="Sign in" /></NavLink>
          <NavLink to="/register"><PriBtn btnText="Create Free Account" /></NavLink>
        
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;