import { MENU } from "../../assets";
import { PESANAN } from "../../assets";
import { CUSTOMER } from "../../assets";

export const CardMenu = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-5 mx-20">
    <div className="relative bottom-16 justify-center items-center">
      <div className="bg-white text-white p-8 ml-14 w-[370px] h-[270px] rounded-[50px]">
        <img src={MENU} className="absolute bottom-40 left-10" />
        <h1 class="text-[#783525] text-[60px] mt-7 text-center font-bold">
          80+
        </h1>
        <p class="text-[#000000] text-[32px]  text-center font-normal">
          Menu Terbaik
        </p>
      </div>
    </div>

    <div className="relative bottom-16 ml-12 justify-center items-center">
      <div className="bg-white text-white p-8 w-[370px] h-[270px] rounded-[50px]">
        <img src={PESANAN} className="absolute top-20 w-[220px] left-60" />
        <h1 class="text-[#783525] text-[60px] mt-7 text-center font-bold">
          10.000+
        </h1>
        <p class="text-[#000000] text-[32px]  text-center font-normal">
          Pesanan
        </p>
      </div>
    </div>

    <div className="relative ml-12 bottom-16 justify-center items-center">
      <div className="bg-white text-white p-8 w-[370px] h-[270px] rounded-[50px]">
        <img src={CUSTOMER} className="absolute bottom-32 w-[250px] -left-28" />
        <h1 class="text-[#783525] text-[60px] mt-7 text-center font-bold">
          30.000+
        </h1>
        <p class="text-[#000000] text-[32px]  text-center font-normal">
          Customer
        </p>
      </div>
    </div>
  </div>
);
