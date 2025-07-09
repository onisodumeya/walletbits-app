import { useState } from "react";
import Arrow from '../assets/svgs/carousel-arrow.svg'; 

import jpgmoses from '../assets/pngs/moses.jpg'
import jpggenevieve from '../assets/pngs/genevieve.jpg'
import jpgprecious from '../assets/pngs/precious.jpg'

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
  {
    username: "@john_doe",
    text: "Quick and easy gift card exchange. Got paid instantly without any stress.",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    username: "@vivian_zee",
    text: "They respond quickly and are very professional. I’d recommend Walletbits to anyone.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);

  const handleSlideClick = (index) => setActive(index);
  const prev = () => {
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  const next = () => {
    setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const getVisibleTestimonials = () => {
    const prevIndex = (active - 1 + testimonials.length) % testimonials.length;
    const nextIndex = (active + 1) % testimonials.length;
    return [prevIndex, active, nextIndex];
  };

  const getVisiblePagination = () => {
    const prev = (active - 1 + testimonials.length) % testimonials.length;
    const next = (active + 1) % testimonials.length;
    return [prev, active, next];
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 bg-white text-center w-full">
      {/* Feedback Cards */}
      <div className="flex space-x-4 overflow-hidden w-full max-w-5xl justify-center py-5">
        {getVisibleTestimonials().map((index) => {
          const testimonial = testimonials[index];
          const isActive = index === active;

          return (
            <div
              key={index}
              onClick={() => handleSlideClick(index)}
              className={`flex flex-col items-center p-5 rounded-xl shadow-md cursor-pointer transition-all duration-300 transform w-[300px] ${
                isActive
                ? "scale-105 bg-gradient-to-r from-[#9B3B91] via-[#383335] to-[#9B3B91] text-white rounded-3xl z-10"
                  : "scale-95 bg-[#383335] text-white z-0"
              }`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.username}
                className="w-20 h-20 rounded-full mb-4 border-2 border-white object-cover"
              />
              <h3 className="font-bold text-lg">{testimonial.username}</h3>
              <p className="text-sm mt-2">{testimonial.text}</p>
            </div>
          );
        })}
      </div>

      {/* Arrows + Fixed 3-Slot Numbering Carousel */}
      <div className="flex gap-2.5 items-center space-x-2 mt-6">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="flex items-center justify-center w-[40px] h-[50px] rounded-md bg-black text-white"
        >
          <img src={Arrow} alt="Left" className="w-4 h-4 rotate-180" />
        </button>

        {/* Numbering Carousel (3 Static Slots) */}
        <div className="flex gap-2.5 items-center space-x-2">
          {getVisiblePagination().map((index, idx) => {
            const isCenter = idx === 1;
            return (
              <div
                key={index}
                onClick={() => setActive(index)}
                className={`flex items-center justify-center text-sm rounded-[10px] cursor-pointer transition-all ${
                  isCenter
                    ? "w-[39px] h-[70px] bg-[#93487D] text-white"
                    : "w-[39px] h-[60px] bg-black text-white"
                }`}
              >
                {index + 1}
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="flex items-center justify-center w-[40px] h-[50px] rounded-md bg-black text-white"
        >
          <img src={Arrow} alt="Right" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
