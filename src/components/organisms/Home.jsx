import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { BACKGROUND_VIDEO } from "../../assets";

export default function Home() {
  return (
    <div className="relative" id="home">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={BACKGROUND_VIDEO} type="video/mp4" />
      </video>
      <div class="w-full">
        <p class="text-white max-w-[1100px] text-[60px] absolute bottom-[370px] ml-20 font-['Montserrat',_sans-serif] font-extrabold">
          Setiap hari, kami menyediakan menu terbaik untukmu
        </p>
        <div class="w-full">
          <p class="text-white text-[30px] max-w-[890px] absolute bottom-[280px] ml-20">
            Kami hadir sebagai solusi penuntas rasa laparmu di kala waktu sibuk
            dan malas
          </p>
        </div>
      </div>
      <ScrollLink
        to="order"
        smooth={true}
        duration={2000}
        className="py-3 w-[270px] h-[60px] hover:bg-[#783525] hover:text-[white] transition absolute cursor-pointer text-center bottom-[250px] right-36 bg-white text-[23px] text-[#4D0F27] font-semibold rounded-full"
      >
        Mulai Order
      </ScrollLink>
    </div>
  );
}
