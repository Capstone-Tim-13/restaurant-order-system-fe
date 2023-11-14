import React, { useState } from 'react';
import { CEKLIST_CIRCLE, CLOSE_CIRCLE } from '../../assets';
import { Rating, Select } from '@mantine/core';

import img from '../../assets/images/potato.png';

export default function RetingWebAntrian(props) {
  const { datas } = props;
  const [detailReview, setDetailReview] = useState(false);

  const DataSelects = [
    { value: 'Appetizer', label: 'Appetizer' },
    { value: 'Dessert', label: 'Dessert' },
    { value: 'Ala Carte', label: 'Ala Carte' },
    { value: 'Paket Hemat', label: 'Paket Hemat' },
    { value: 'Minuman', label: 'Minuman' },
  ];

  return (
    <div className={`w-full mt-10 pb-10 px-10 pt-10 bg-white rounded-2xl shadow-md relative ${detailReview ? '' : 'overflow-hidden h-[950px]'}`}>
      <h1 className="text-3xl font-semibold font-poppins">Terpublish</h1>
      <button onClick={() => setDetailReview(!detailReview)} className={`fontpopins text-black absolute ${detailReview ? 'bottom-12' : 'bottom-6'} right-10 text-sm font-semibold`}>
        {detailReview ? 'Sembunyikan' : 'Lihat Lainnya'}
      </button>

      {datas.map((data) => (
        <>
          {/* Bagian Judul */}
          <div className="mt-10 flex justify-between gap-5">
            {/* Bagian Profile User */}
            <div className="w-1/4 flex gap-6">
              <div>
                <img src={img} alt="" className="rounded-full" />
              </div>
              <div>
                <p className="font-poppins text-xl text-orange font-light">USER ID 56430</p>
                <h2 className="font-poppins text-xl font-semibold mt-1">Rizky</h2>
                <p className="font-poppins text-surface font-semibold">9/11/10 13:10 WIB</p>
              </div>
            </div>

            <div className="flex w-3/4 gap-5 items-center border-b border-black pb-10 mb-14">
              {/* Bagian Komentar */}
              <div className="w-2/3 flex gap-10 items-center">
                <div className="text-center ">
                  <p className="font-poppins text-surface text-2xl mb-2 font-semibold">3.0</p>
                  <Rating value={3} variant="unstyled" />
                </div>
                <div className="mt-3 ">
                  <p className="font-poppins text-surface font-ligh text-lg">{data.komentar}</p>
                </div>
              </div>

              {/* Bagian Button Kategori */}
              <div className="w-1/4 relative flex justify-center">
                <button className="flex px-6 py-3  gap-2 bg-green-600 hover:bg-green-500 text-white rounded-full transition duration-300 ease-in-out">
                  <img src={CEKLIST_CIRCLE} alt="" />
                  Publish
                </button>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
