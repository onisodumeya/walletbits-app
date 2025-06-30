import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from "react-router-dom";
import { PriBtn, SecBtn } from '../components/Buttons.jsx';

import { gsap } from 'gsap/all'

import Menu from '../assets/svgs/menu-btn.svg';



function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(navRef.current,
        { y: -50, opacity: 1 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  const isMobile = useMediaQuery({ maxWidth: 1000 });

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  useEffect(() => {

    const menuBtn = document.querySelector('.menu-btn')

    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      menuBtn?.classList.add("bg-gray-100")
    } else {
      document.body.style.overflow = '';
      menuBtn?.classList.remove("bg-gray-100")
    }

    return () => {
      document.body.style.overflow = '';
      menuBtn?.classList.remove("bg-gray-100")
    };
  }, [menuOpen]);


  return (
    <>
    <nav ref={navRef} className='top-0 opacity-0 z-50 -translate-y-8 transition-all duration-500 flex justify-between py-5 px-5 md:px-15 items-center w-full'>

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

      {isMobile && <img className='menu-btn p-2 rounded-md' src={Menu} alt="" onClick={toggleMenu} />}

    </nav>

      {isMobile && menuOpen &&

        <div className="z-40 fixed top-[80px] left-0 w-full bg-white shadow-md px-5 py-8 flex flex-col gap-6">

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
  );
}

export default Navbar;