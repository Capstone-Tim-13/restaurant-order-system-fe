import { KUALITAS } from "../../assets";
import { PELAYANAN } from "../../assets";
import { HARGA } from "../../assets";
import { ICON_KIRI } from "../../assets";
import { ICON_KANAN } from "../../assets";

export const Layanan = () => (
  <div
    className="w-full h-[700px] mt-10 rounded-tl-[172px] rounded-tr-[172px] bg-[#FCFCFC]"
    id="service"
  >
    <div class="w-full min-h-[auto] text-center">
      <div className="relative">
        <h1 class="text-[#1d1d1d] text-[56px] mt-10 text-center font-semibold ">
          <img
            src={ICON_KIRI}
            className="absolute w-[100px] -top-5 left-[380px]"
          />
          Kenapa Harus Kita
        </h1>
        <img
          src={ICON_KANAN}
          className="absolute w-[100px] -top-5 right-[380px]"
        />
      </div>

      <div className="flex gap-10  my-5 justify-center ">
        <div className="flex mt-10 justify-center items-center">
          <div className="w-[400px] h-[500px] [border-top:4px_dashed_#1d1d1d] [border-left:4px_dashed_#1d1d1d] [border-right:4px_dashed_#1d1d1d] [border-bottom:4px_dashed_#1d1d1d] rounded-tl-[48px] rounded-br-[48px] rounded-tr-[48px] rounded-bl-[48px]">
            <div className="bg-[#783525] text-white p-8 w-[350px] h-[450px] mt-5 ml-5 rounded-[50px]">
              <img src={KUALITAS} alt="kualitas" width="325" height="268" />
              <p class="text-[#fcfcfc] text-[26px] text-center font-bold leading-[65px]">
                Kualitas terbaik
              </p>
              <p class="text-[#fcfcfc] text-[20px] text-center">
                Kami menyediakan menu dari bahan kualitas terbaik untukmu setiap
                saat
              </p>
            </div>
          </div>
        </div>

        <div className="flex mt-10 justify-center items-center">
          <div className="w-[400px] h-[500px] [border-top:4px_dashed_#1d1d1d] [border-left:4px_dashed_#1d1d1d] [border-right:4px_dashed_#1d1d1d] [border-bottom:4px_dashed_#1d1d1d] rounded-tl-[48px] rounded-br-[48px] rounded-tr-[48px] rounded-bl-[48px]">
            <div className="bg-[#783525] text-white p-8 w-[350px] h-[450px] mt-5 ml-5 rounded-[50px]">
              <img
                src={PELAYANAN}
                alt="pelayanan"
                className="w-[190px] ml-8 h-[220px]"
              />
              <p class="text-[#fcfcfc] text-[26px] mt-7 text-center font-bold leading-[38px]">
                Pelayanan Terjamin
              </p>
              <p class="text-[#fcfcfc] text-[20px] mt-3 text-center">
                Tidak perlu ragu, karena yang melayanimu berasal dari background
                yang bekualitas
              </p>
            </div>
          </div>
        </div>

        <div className="flex mt-10 justify-center items-center">
          <div className="w-[400px] h-[500px] [border-top:4px_dashed_#1d1d1d] [border-left:4px_dashed_#1d1d1d] [border-right:4px_dashed_#1d1d1d] [border-bottom:4px_dashed_#1d1d1d] rounded-tl-[48px] rounded-br-[48px] rounded-tr-[48px] rounded-bl-[48px]">
            <div className="bg-[#783525] text-white p-8 w-[350px] h-[450px] mt-5 ml-5 rounded-[50px]">
              <img
                src={HARGA}
                alt="harga"
                width="320"
                height="268"
                class="w-full h-auto m-0 block max-w-[325px]"
              />
              <p class="text-[#fcfcfc] text-[26px] text-center font-bold leading-[65px]">
                Harga Terjangkau
              </p>
              <p class="text-[#fcfcfc] text-[19px] text-center">
                Ga perlu takut buat pesan, karena kami jamin menu kami pas
                dengan kantongmu
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
