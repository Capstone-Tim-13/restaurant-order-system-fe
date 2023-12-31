import { BG_SERVICES } from "../../assets";
import { PLAYSTORE } from "../../assets";
import { APPSTORE } from "../../assets";
import { HANDPHONE } from "../../assets";

export default function Services() {
  const handlePlayStore = () => {
    const playStoreUrl = "https://play.google.com";
    window.open(playStoreUrl, "_blank");
  };

  const handleAppStore = () => {
    const playStoreUrl = "https://www.apple.com/app-store";
    window.open(playStoreUrl, "_blank");
  };

  return (
    <div className="max-w-[1700px]">
      <div className="relative w-full  bg-black">
        <img
          src={BG_SERVICES}
          alt="bg_services"
          className="w-full h-[900px]"
          id="order"
        />
        <div className="absolute top-[400px] left-[200px] w-[950px] transform -translate-x-1/2 -translate-y-1/2 z-10 ">
          <h1 className="text-[#1d1d1d] ml-96 text-left text-[50px] font-bold">
            Sudah Lapar?
          </h1>
          <p className="text-[#1d1d1d] ml-96 text-[35px] mt-10 text-left font-medium">
            Yuk, Eksplor lebih banyak lagi menu kami, dan pesan sekarang juga.
            Unduh dulu ya aplikasi nya
          </p>
          <div className="flex">
            <img
              src={PLAYSTORE}
              className="mt-24 ml-96 h-[80px] cursor-pointer"
              onClick={handlePlayStore}
            />
            <img
              src={APPSTORE}
              className="ml-20 mt-24 h-[80px] cursor-pointer"
              onClick={handleAppStore}
            />
            <img
              src={HANDPHONE}
              className="w-[600px] -right-[800px] absolute -bottom-56"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
