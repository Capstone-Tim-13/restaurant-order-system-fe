import React, { useEffect, useState } from "react";
import { Rating } from "@mantine/core";
import Slider from "react-slick";
import axios from "axios";

export const CardRating = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fecthData = async () => {
      const api = "https://654b557f5b38a59f28eee3f9.mockapi.io/reting";
      try {
        const response = await axios.get(api);
        const responseData = await response.data;
        setDatas(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    fecthData();
  }, []);

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
    <div className="max-w-[1500px] ml-28 ">
      <Slider {...settings}>
        {datas.map((data) => (
          <div className="h-[500px] ">
            <div className="bg-[#fcfcfc] absolute bottom-8 p-8 w-[350px] h-[420px] rounded-[20px]">
              <img
                src={data.avatar}
                alt="avatar"
                className="rounded-full ml-[85px]"
              />
              <h2 class="text-[#000000] text-[25px] mt-3 text-center font-medium">
                {data.nama}
              </h2>
              <Rating
                defaultValue={data.rating}
                size="lg"
                color="#FFBC80"
                className="ml-16"
                readOnly
              />
              <p class="text-[#1d1d1d] text-[17px] mt-3 text-center font-normal">
                {data.komentar}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
