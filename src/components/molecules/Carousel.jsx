import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Carousel = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex w-full bg-cover transition-transform ease-out duration-1000"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute mt-[700px] inset-[100px] left-[300px] justify-between p-28">
        <button
          onClick={prev}
          className="p-5 ml-[664px] rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={next}
          className="p-5 rounded-full ml-60 shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <FaArrowRight />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((s, i) => (
            <div
              key={i}
              className={`transition-all w-1.5 h-1.5 bg-white rounded-full  ${
                curr === i ? "p-0.5" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
