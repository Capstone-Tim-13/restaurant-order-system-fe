import React from "react";
import { CardMenu } from "../molecules/CardMenu";
import { Layanan } from "../molecules/Layanan";
import { MAKANAN } from "../../assets";
import { LINE } from "../../assets";

export default function Feature() {
  return (
    <div>
      <div className="w-full bg-[#030303] flex flex-col mb-20">
        <CardMenu />
        <img src={LINE} alt="line" className="w-[1700px]" />
        <div className="flex items-center">
          <div class="w-1/2 p-8  min-h-[auto] text-left ml-28" id="feature">
            <h1 class="text-[#fcfcfc] text-[56px] text-left mb-10 font-semibold ">
              Kenalan sama kita, yuk!
            </h1>
            <p class="text-[#fcfcfc] text-[30px] mb-20 text-left">
              Alta-Resto adalah restoran inovatif yang memanjakan para
              pelanggannya dengan layanan pemesanan dan pengantaran makanan
              secara online melalui aplikasi. Dengan menggabungkan cita rasa
              kuliner berkualitas dan kemudahan teknologi, Alta-Resto memberikan
              pengalaman kuliner yang tak terlupakan untukmu
            </p>
          </div>
          <div className="w-1/3">
            <img
              src={MAKANAN}
              alt="Makanan"
              className="ml-[231px] object-cover w-[500px] h-[800px]"
            />
          </div>
        </div>
        <Layanan />
      </div>
    </div>
  );
}
