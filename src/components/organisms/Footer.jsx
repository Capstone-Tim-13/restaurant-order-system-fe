import { LOGO_ALTA } from "../../assets";
import { INSTAGRAM } from "../../assets";
import { TWITTER } from "../../assets";
import { LINKEDIN } from "../../assets";
import { FACEBOOK } from "../../assets";
import { YOUTUBE } from "../../assets";

export default function Footer() {
  const handleInstagram = () => {
    const playStoreUrl = "https://www.instagram.com";
    window.open(playStoreUrl, "_blank");
  };

  const handleTwitter = () => {
    const playStoreUrl = "https://twitter.com";
    window.open(playStoreUrl, "_blank");
  };

  const handleLinkedin = () => {
    const playStoreUrl = "https://linkedin.com";
    window.open(playStoreUrl, "_blank");
  };

  const handleFacebook = () => {
    const playStoreUrl = "https://www.facebook.com";
    window.open(playStoreUrl, "_blank");
  };

  const handleYoutube = () => {
    const playStoreUrl = "https://www.youtube.com/";
    window.open(playStoreUrl, "_blank");
  };

  return (
    <div className="max-w-[1700px]">
      <div className="flex h-[550px] w-full bg-[#0c0c0c]">
        <div className="w-full h-[470px] mt-10 ml-14 max-w-[1600px] [border-top:4px_dashed_#FCFCFC] [border-left:4px_dashed_#FCFCFC] [border-right:4px_dashed_#FCFCFC] [border-bottom:4px_dashed_#FCFCFC] max-h-[614.72216796875px]  rounded-tl-[41px] rounded-br-[41px] rounded-tr-[41px] rounded-bl-[41px]">
          <div className="grid grid-cols-4 gap-4">
            <img src={LOGO_ALTA} className="ml-12 mt-5 w-52" />
            <h2 class="text-[#ffffff] text-[28px] flex ml-[750px] w-full mt-5  font-bold ">
              Find us
            </h2>
            <div className="flex ml-[340px] h-[40px] cursor-pointer mt-20 gap-5">
              <img src={INSTAGRAM} onClick={handleInstagram} />
              <img src={TWITTER} onClick={handleTwitter} />
              <img src={LINKEDIN} onClick={handleLinkedin} />
              <img src={FACEBOOK} onClick={handleFacebook} />
              <img src={YOUTUBE} onClick={handleYoutube} />
            </div>
          </div>
          <div class="grid grid-cols-4 gap-4 mt-5">
            <div class="w-full ml-12 ">
              <p class="text-[#ffffff] text-[28px] font-medium">About Us</p>
              <p class="text-[#ffffff] text-[25px]">Cookies & Setting</p>
            </div>
            <div class="w-full">
              <p class="text-[#ffffff] text-[28px] font-medium">FAQs</p>
              <p class="text-[#ffffff] text-[25px]">Term & Conditions</p>
            </div>
            <div class="w-full">
              <p class="text-[#ffffff] text-[28px] font-medium">
                Privacy & Cookies
              </p>
              <p class="text-[#ffffff] text-[25px]">Help & Report</p>
            </div>
          </div>
          <div class="w-full max-w-[1400px] ml-12 mt-10 ">
            <p class="text-[#ffffff] text-[28px]">©Alta-Resto 2023</p>
            <p class="mt-0 text-left mb-0">
              <br />
              <br />
            </p>
            <p class="text-[#ffffff] text-[28px]">
              Alta-Resto adalah restauran penyedia layanan pemesanan antar
              makanan secara online. Bergabung bersama kami dalam memberikan
              pelayanan yang terbaik
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
