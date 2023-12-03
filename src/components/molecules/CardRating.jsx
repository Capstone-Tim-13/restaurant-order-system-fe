import { USER_SATU } from "../../assets";
import { USER_DUA } from "../../assets";
import { USER_TIGA } from "../../assets";
import { USER_EMPAT } from "../../assets";
import { USER_LIMA } from "../../assets";
import { Rating } from "@mantine/core";
import Slider from "react-slick";

export const CardRating = () => {
  const settings = {
    infinite: false,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="h-[500px]">
        <div className="bg-[#fcfcfc] absolute bottom-14 p-8 w-[350px] h-[400px] ml-10 rounded-[20px]">
          <img
            src={USER_SATU}
            alt="user"
            className="w-[110px] ml-[85px] h-[110px]"
          />
          <h2 class="text-[#000000] text-[30px] mt-3 text-center font-medium">
            Hestia Raniri
          </h2>
          <Rating
            defaultValue={5}
            size="xl"
            color="#FFBC80"
            className="ml-14"
            readOnly
          />
          <p class="text-[#1d1d1d] text-[18px] mt-3 text-center font-normal">
            “Top banget si, pelayannya oke dan harganya juga sesuai sama budget
            mahasiswa kayak gue, tapii rasanya tetap juara. Rec bgt si”
          </p>
        </div>
      </div>

      <div className="h-[500px]">
        <div className="bg-[#fcfcfc] absolute bottom-14 p-8 w-[350px] h-[400px] ml-10 rounded-[20px]">
          <img
            src={USER_DUA}
            alt="user"
            className="w-[110px] ml-[85px] h-[110px]"
          />
          <h2 class="text-[#000000] text-[30px] mt-3 text-center font-medium">
            Dewi Kartika
          </h2>
          <Rating
            defaultValue={5}
            size="xl"
            color="#FFBC80"
            className="ml-14"
            readOnly
          />
          <p class="text-[#1d1d1d] text-[18px] mt-3 text-center font-normal">
            “Makanannya enakk! buat pecinta makanan murah tapi enak dan lebih ke
            western, coba disini si, enak soalnya, ga rugi deh”
          </p>
        </div>
      </div>

      <div className="h-[500px]">
        <div className="bg-[#fcfcfc] absolute bottom-14 p-8 w-[350px] h-[400px] ml-10 rounded-[20px]">
          <img
            src={USER_TIGA}
            alt="user"
            className="w-[110px] ml-[85px] h-[110px]"
          />
          <h2 class="text-[#000000] text-[30px] mt-3 text-center font-medium">
            David Sinagar
          </h2>
          <Rating
            defaultValue={5}
            size="xl"
            color="#FFBC80"
            className="ml-14"
            readOnly
          />
          <p class="text-[#1d1d1d] text-[18px] mt-3 text-center font-normal">
            “Buat mahasiswa oke, apalagi pas nongki ama tmn. Ya lumayan lah,
            harga sesuai dan rasanya si gila harga murah tapi rasanya oke, top
            buat gue”
          </p>
        </div>
      </div>

      <div className="h-[500px]">
        <div className="bg-[#fcfcfc] absolute bottom-14 p-8 w-[350px] h-[400px] ml-10 rounded-[20px]">
          <img
            src={USER_EMPAT}
            alt="user"
            className="w-[110px] ml-[85px] h-[110px]"
          />
          <h2 class="text-[#000000] text-[30px] mt-3 text-center font-medium">
            Rachel Andrea
          </h2>
          <Rating
            defaultValue={5}
            size="xl"
            color="#FFBC80"
            className="ml-14"
            readOnly
          />
          <p class="text-[#1d1d1d] text-[18px] mt-3 text-center font-normal">
            “OKE BGT WOY! yg ga setuju gelud ama gue. Ini oke bgt, bahkan jd rec
            buat temen” kampus, jadi kalian semua mesti coba, wajib parahh”
          </p>
        </div>
      </div>

      <div className="h-[500px] ">
        <div className="bg-[#fcfcfc] absolute bottom-14 p-8 w-[350px] h-[400px] ml-10 rounded-[20px]">
          <img
            src={USER_LIMA}
            alt="user"
            className="w-[110px] ml-[85px] h-[110px]"
          />
          <h2 class="text-[#000000] text-[30px] mt-3 text-center font-medium">
            Daniel
          </h2>
          <Rating
            defaultValue={5}
            size="xl"
            color="#FFBC80"
            className="ml-14"
            readOnly
          />
          <p class="text-[#1d1d1d] text-[18px] mt-3 text-center font-normal">
            “Enak, bintang lima dah”
          </p>
        </div>
      </div>
    </Slider>
  );
};
