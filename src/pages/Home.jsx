import { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive';
import { PriBtn, SecBtn } from "../components/Buttons.jsx";
import { Link } from 'react-router-dom';

import CountUp from 'react-countup';
import Hero from '../assets/pngs/hero-image.png';
import Navbar from "../components/Navbar.jsx";
import Cards from '../components/Cards.jsx';
import TestimonialCarousel from "../components/TestimonialCarousel.jsx";
import Footer from "../components/Footer.jsx";

import image from '../assets/pngs/img1.png'
import imag from '../assets/pngs/img2.png'
import imags from '../assets/pngs/img3.png'

function Home() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

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
              <Link to='/register'><PriBtn btnText="Start Trading" /></Link>
              <Link to='/rates'><SecBtn btnText="Check Rates" /></Link>
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

      <section className="flex flex-col items-center gap-5 px-5 md:px-15 pt-10">
        <Cards image={image}
          title=" why choose walletbits?"
          description= "Walletbits is a smart choice for everyone looking to exchange gift cards quickly, securely, and at competitive rates. Walletbits makes the entire process seamless—whether you are trading Amazon, iTunes, Steam, or other popular gift cards. Customers can enjoy instant payouts into their Nigerian bank accounts in naira—backed by 24/7 customer support."
          link="/register"
          buttonText="Register Now"/> 
        <Cards image={imag}
          title="Best Transaction Rates"
          description="When you choose walletbits, you dont just exchange gift cards, you unlock nigeria's most competitive rate on the market.we constantly benchmark our exchange rate against leading platforms like cardtonic, apexpay and our rate consistently comes out ahead of others. that means more value to your unused Amazon, itunes, goggle play or other gift cards"
          link="/rates"
          buttonText="Check Rates"/>
        <Cards image={imags}
          title="Secure and hassle free"
          description="Walletbits offers secure and hassle free experience to everyone looking to exchange giftcards with confidence.your transactions are protected with industry-standard encryption and multi-layered verification, ensuring your data and funds remains safe at all times. from card submission to instant payout,everytime happens quickly and transparently"
          link="/sign-in"
          buttonText="Start Trading"/>
      </section>

        <TestimonialCarousel />

      <Footer/>
    </>
  )
  
}
export default Home;