import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from "react-router-dom";
import { PriBtn, SecBtn } from '../components/Buttons.jsx'
import Menu from '../assets/svgs/menu-btn.svg'



function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: 1000 });

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  useEffect(() => {
  
  if (menuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  return () => {
    document.body.style.overflow = '';
  };
}, [menuOpen]);


  return (
    <nav className='flex justify-between py-5 px-5 md:px-15  items-center relative w-full'>

      <NavLink to="/" className='text-pink-400' ><h2 className='font-bold text-2xl'>WALLETBITS</h2></NavLink>
      

        {/* navbar links */}
        {!isMobile && 
          <div className='flex items-center gap-10'>
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

        
        }

        {isMobile && 
        
        <>
          <img src={Menu} alt="" onClick={toggleMenu}/>
          
          { menuOpen &&

            <div className='flex flex-col gap-8 absolute -bottom-80 p-5  left-0 shadow-md  overflow-hidden bg-white w-full'>

              <NavLink to="/" className={({ isActive }) => isActive ? "font-medium border-b-2 border-black" : "border-b-2 border-transparent nav-links"}>Home</NavLink>

              <NavLink to="/how-it-works" className={({ isActive }) => isActive ? "font-medium border-b-2 border-black" : "border-b-2 border-transparent nav-links transition-[0.3s]"}>How it Works</NavLink>

              <NavLink to="/rates" className={({ isActive }) => isActive ? "font-medium border-b-2 border-black" : "border-b-2 border-transparent nav-links transition-[0.3s]"}>Rates</NavLink>

              <NavLink to="/about-us" className={({ isActive }) => isActive ? "font-medium border-b-2 border-black" : "border-b-2 border-transparent nav-links transition-[0.3s]"}>About us</NavLink>

              <div className='flex gap-5 items-center'>

                <NavLink to="/sign-in"><SecBtn btnText="Sign in" /></NavLink>
                <NavLink to="/register"><PriBtn btnText="Create Free Account" /></NavLink>

            </div>
          
          </div>

          }
        </>
         
        }
        
    </nav>
  );
}

export default Navbar;