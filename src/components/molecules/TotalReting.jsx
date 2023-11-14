import React, { useState } from 'react';

import { Progress, Rating } from '@mantine/core';
import { STAR_ICON_2 } from '../../assets';

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
  return (
    <>
      {/* Total Review 1 */}
      <div className="w-[288px] bg-white rounded-2xl shadow-md p-4">
        <img src="" alt="" />
        <div className="flex items-center mt-2">
          <h1 className="text-3xl font-semibold font-poppins lowercase">10.0K</h1>
          <p className="font-poppins text-xl text-green-600">+2.5%</p>
        </div>
        <h2 className="font-semibold font-poppins text-[15px] mt-2">Total Review</h2>
        <p className="font-poppins text-surface text-[12px] -mt-1">Kenaikan review yang masuk bulan ini</p>
      </div>

      {/* Total Review 2 */}
      <div className="w-[306px] bg-white rounded-2xl shadow-md p-4">
        <img src="" alt="" />
        <div className="flex items-center mt-2 gap-2">
          <h1 className="text-3xl font-semibold font-poppins lowercase">{valueRating}</h1>
          <Rating defaultValue={valueRating} count={5} />
        </div>
        <h2 className="font-semibold font-poppins text-[15px] mt-2">Rata-rata rating</h2>
        <p className="font-poppins text-surface text-[12px] -mt-1">Rata-rata bulan ini</p>
      </div>

      {/* Total Review 3 */}
      <div className="w-[455px] bg-white rounded-2xl shadow-md px-4 py-6">
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
