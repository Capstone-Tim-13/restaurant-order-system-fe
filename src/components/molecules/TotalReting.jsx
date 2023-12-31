import React, { useEffect, useState } from 'react';

import { Progress, Rating } from '@mantine/core';
import { PEN_REVIEW, STAR_ICON_2, STAR_RETING } from '../../assets';
import Tooltip from '../atoms/Tooltip';
import axios from 'axios';

const initialRating = [
  {
    title: 5,
    value: 80,
  },
  {
    title: 4,
    value: 60,
  },
  {
    title: 3,
    value: 70,
  },
  {
    title: 2,
    value: 40,
  },
  {
    title: 1,
    value: 50,
  },
];

export default function TotalReting() {
  const [valueRating, setValueRating] = useState(0);

  const totalReting = async () => {
    try {
      const response = await axios.get('https://654b557f5b38a59f28eee3f9.mockapi.io/reting');
      const responseData = await response.data;

      const total = responseData.reduce((acc, cur) => acc + cur.rating, 0);
      const average = total / responseData.length;
      const roundedUpAverage = Math.ceil(average); // Memperoleh nilai rata-rata yang dibulatkan ke atas

      setValueRating(roundedUpAverage);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    totalReting();
  }, []);

  return (
    <>
      {/* Total Review 1 */}
      <div className="w-[288px] bg-white rounded-2xl shadow-md p-4">
        <img src={PEN_REVIEW} alt="icon" className="mb-5" />
        <div className="flex items-center mt-2">
          <h1 className="text-3xl font-semibold font-poppins lowercase">10.0K</h1>
          <Tooltip title="2k" withArrow>
            <p className="font-poppins text-xl text-green-600">+2.5%</p>
          </Tooltip>
        </div>
        <h2 className="font-semibold font-poppins text-[15px] mt-2">Total Review</h2>
        <p className="font-poppins text-surface text-[12px] -mt-1">Kenaikan review yang masuk bulan ini</p>
      </div>

      {/* Total Review 2 */}
      <div className="w-[306px] bg-white rounded-2xl shadow-md p-4">
        <img src={STAR_RETING} alt="icon" className="mb-5" />
        <div className="flex items-center mt-2 gap-2">
          <h1 className="text-3xl font-semibold font-poppins lowercase">{valueRating}.0</h1>
          <Rating value={valueRating} variant="unstyled" readOnly />
        </div>
        <h2 className="font-semibold font-poppins text-[15px] mt-2">Rata-rata rating</h2>
        <p className="font-poppins text-surface text-[12px] -mt-1">Rata-rata bulan ini</p>
      </div>

      {/* Total Review 3 */}
      <div className="w-[455px] bg-white rounded-2xl shadow-md px-4 py-10">
        {initialRating.map((rating, index) => (
          <div key={index} className="flex gap-2 items-center">
            <div className="flex gap-1 justify-center relative">
              {/* <FaStar className=" text-2xl text-start rounded-xl" /> */}
              <img src={STAR_ICON_2} alt="rating" />
              <p className="text-[13px] font-poppins absolute top-1">{rating.title}</p>
            </div>
            <Progress variant="unstyled" value={rating.value} className="w-full" color="brown" />
            <p className="text-[13px] font-poppins">{rating.value}k</p>
          </div>
        ))}
      </div>
    </>
  );
}
