import { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive';
import { PriBtn, SecBtn } from "../components/Buttons.jsx";
import CountUp from 'react-countup'
import Hero from '../assets/pngs/hero-image.png'
import Navbar from "../components/Navbar.jsx";

function Home() {
  const isMobile = useMediaQuery({ maxWidth: 769 });

  return(
    <>
      <Navbar />
      <section className='hero flex flex-col md:flex-row justify-between px-5 md:px-15 pt-10 items-center'>
        <div className="flex flex-col gap-5 text w-[100%] md:w-[80%] lg:w-[60%] justify-start text-center md:text-start">
          <h1 className="font-bold text-5xl leading-14">“Instantly Convert Gift cards To Naira”</h1>
          <h3 className="text-2xl leading-10">-Fast, Secure & Hassle Free</h3>
          {!isMobile &&
          <>
            <p>Trade your unused gift cards for instant  cash deposits into your Nigerian bank account. No delays, no hidden fees.</p>
            <div className="flex gap-5">
              <PriBtn btnText="Start Trading" />
              <SecBtn btnText="Check Rates" />
            </div>
          </>
          }
          {!isMobile &&
          
            <>
              <div className="flex gap-5 p-4 bg-gray-200 rounded-lg w-fit">
            <div className="flex items-center gap-2">
              <div className="text-4xl font-bold">
                <CountUp end={2900} duration={2} />+
              </div>
              <p>Happy customers</p>
            </div>
            <div className="flex items-center gap-2">
              <h2 className="text-3xl font-bold">$1M+</h2>
              <p>Happy customers</p>
            </div>
            
          </div>
            </>

          }
        </div>
        <img src={Hero} alt="" className="w-[80%] md:w-[40%]" />

        {isMobile && 

          <div className="flex flex-col text-center w-4/5 items-center gap-5 mt-10">
            <p>Trade your unused gift cards for instant  cash deposits into your Nigerian bank account. No delays, no hidden fees.</p>
            
            <div className="flex gap-5">
              <PriBtn btnText="Start Trading" />
              <SecBtn btnText="Check Rates" />
            </div>

            <div className="flex gap-5 p-4 text-start bg-gray-200 rounded-lg w-fit">
              <div className="flex items-center gap-2">
                <div className="text-3xl font-bold">
                  <CountUp end={2900} duration={2} />+
                </div>
                <p>Happy customers</p>
              </div>
              <div className="flex items-center gap-2">
                <h2 className="text-3xl font-bold">$1M+</h2>
                <p>Happy customers</p>
              </div>
            </div>
          </div>

        }
      </section>
    </>
  )
  
}
export default Home;