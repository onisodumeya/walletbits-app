import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useContext } from "react";

import Arrow from '../assets/svgs/carousel-arrow.svg'

const testimonials = [
    {
        username: "@Mosescharles",
        text: "Walletbits is the best Gift cards exchange platform that I ever used. The process was so fast and I got credited in less than 2 hours.",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        username: "@precious123",
        text: "I have been trading cryptocurrencies and Gift cards with other exchanges, not until I started using Walletbits. Their security is top notch. I highly recommend it!",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        username: "@Genevieve232",
        text: "Walletbits is far better in terms of Gift cards exchange. No other platform compares to it currently.",
        image: "https://randomuser.me/api/portraits/women/23.jpg",
    },
];

export default function TestimonialCarousel() {
    const [active, setActive] = useState(0);

    const prev = () =>
        setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

    const next = () =>
        setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

    const { username, text, image, bg } = testimonials[active];

    return (
        <div className="flex flex-col items-center justify-center bg-white text-center py-5 px-5 md:px-15 mt-10">
            <h2 className="font-bold text-3xl pb-2.5 md:pb-5">Customer`s Feedback Highlights</h2>

            <p className="w-full md:w-9/12 pb-5 md:pb-10">At walletbits, we focus on offering an outstanding trading experience. Users commend our platform for it`s strong security, fast performance,and easy to use. here is what some of our customers are saying</p>
            <div
                className={`w-full md:w-3/5 py-5 md:py-10 text-white text-center p-6 rounded-xl transition-all duration-500 shadow-xl linear-bg`}
            >
                <img
                    src={image}
                    alt={username}
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white object-cover"
                />
                <h3 className="font-bold text-lg">{username}</h3>
                <p className="text-sm mt-2">{text}</p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-6">
                
                
            </div>

            {/* Dots / Indicators */}
            <div className="flex gap-5 mt-4 items-center">
                <button
                    onClick={prev}
                    className="text-3xl font-bold text-gray-700 hover:text-black"
                >
                    <div className="flex items-center justify-center cursor-pointer bg-black hover:bg-gray-900 transition duration-300 px-3 py-2 rounded-md">
                        <img className="rotate-180" src={Arrow} alt="" />
                    </div>
                </button>
                <div className="mt-2 text-sm text-gray-500 ">
                    {active + 1} of {testimonials.length}
                </div>

                <button
                    onClick={next}
                    className="text-3xl font-bold text-gray-700 hover:text-black"
                >
                    <div className="flex items-center justify-center cursor-pointer bg-black hover:bg-gray-900 transition duration-300 px-3 py-2 rounded-md">
                        <img src={Arrow} alt="" />
                    </div>
                </button>
            </div>
        </div>
    );
}
