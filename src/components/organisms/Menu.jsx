import Carousel from "../molecules/Carousel";
import TopMenu from "../molecules/TopMenu";
import { TOP_MENU } from "../../assets";

const slides = [
  "./1.png", 
  "./2.png", 
  "./3.png", 
  "./4.png", 
  "./5.png"];

export default function Menu() {
  return (
    <div className="relative max-w-[1700px]">
      <div class="w-full h-[1403px] flex flex-col">
        <Carousel autoSlide={true}>
          {[...slides.map((s) => <img src={s} />)]}
        </Carousel>
      </div>
      <div
        className="absolute mt-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-full h-[600px] rounded-tl-[198px] rounded-tr-[198px]"
        id="menu"
      >
        <div class="w-full relative max-w-[700px] mt-[110px] ml-[120px] min-h-[auto]">
          <p class="text-[#1d1d1d] text-[50px] font-bold">Top menu kami</p>
          <p class="text-[#1d1d1d] text-[25px] text-left ">
            Menu pilihan kesukaan pelanggan kami, yang rekomendasi dan wajib
            kamu coba
          </p>
        </div>
        <div class="flex">
          <img
            src={TOP_MENU}
            className="ml-[700px] absolute inset-x-60 w-[500px] bottom-[200px] "
          />
        </div>
      </div>
      <TopMenu />
    </div>
  );
}
